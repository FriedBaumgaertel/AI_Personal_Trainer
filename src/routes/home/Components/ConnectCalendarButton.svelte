<script>
    import { onMount } from "svelte";
    import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import {auth} from "$lib";

    let userID;
    let modalVisible = false;
    let userSignedIn = false;

    const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    // Discovery doc URL for APIs used by the quickstart
    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

    let tokenClient;
    let gapiInited = false;
    let gisInited = false;

    async function signInWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
            })
            .catch((error) => {
            console.log(error);
        });
    }
    /**
     * Callback after api.js is loaded.
     */
    function gapiLoaded() {
        gapi.load('client', initializeGapiClient);
    }

    /**
     * Callback after the API client is loaded. Loads the
     * discovery doc to initialize the API.
     */
    async function initializeGapiClient() {
        await gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
    }

    /**
     * Callback after Google Identity Services are loaded.
     */
    function gisLoaded() {
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: CLIENT_ID,
            scope: SCOPES,
            callback: '', // defined later
        });
        gisInited = true;
    }

    /**
     * Enables user interaction after all libraries are loaded.
     */

    /**
     *  Sign in the user upon button click.
     */
    function handleAuthClick() {
        tokenClient.callback = async (resp) => {
            if (resp.error !== undefined) {
                throw (resp);
            }
        };

        if (gapi.client.getToken() === null) {
            // Prompt the user to select a Google Account and ask for consent to share their data
            // when establishing a new session.
            tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
            // Skip display of account chooser and consent dialog for an existing session.
            tokenClient.requestAccessToken({prompt: ''});
        }
        userSignedIn = true;
        modalVisible = true;
    }

    /**
     *  Sign out the user upon button click.
     */
    function handleSignoutClick() {
        const token = gapi.client.getToken();
        if (token !== null) {
            google.accounts.oauth2.revoke(token.access_token);
            gapi.client.setToken('');
        }
    }

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    async function syncCalendars() {
        try {
            const response = await fetch("https://getallworkouts-afizyqllwa-uc.a.run.app", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "userId": userID
                })
            });

            const data = await response.json();
            const events = [];
            for (let i = 0; i < data.length; i++) {
                let scheduledForSeconds = data[i].scheduledFor._seconds;
                let eventDate = new Date(scheduledForSeconds * 1000);

                const event = {
                    'summary': `Workout ${i+1}`,
                    'location': 'Gym',
                    'description': '',
                    'start': {
                        'dateTime': eventDate.toISOString(),
                        'timeZone': '' // replace with actual timezone
                    },
                    'end': {
                        // Calculate end time based on start time and duration
                        'dateTime': new Date(eventDate.getTime() + 90*60000).toISOString(), // adding 90 minutes for example
                        'timeZone': '' // replace with actual timezone
                    }
                };
                events.push(event);
            }

            for (const event of events) {
                const request = gapi.client.calendar.events.insert({
                    'calendarId': 'primary',
                    'resource': event
                });

                const createdEvent = await request.execute();
                console.log("Event created!");
            }
            modalVisible= false;
        } catch (err) {
            console.log(err);
        }
    }
    onMount(() => {
        gapiLoaded();
        gisLoaded();
        userID = sessionStorage.getItem("userID");
    })
</script>

<button  class="bg-action text-white p-2" on:click={()=>{handleAuthClick()}}>Kalender verbinden</button>

{#if modalVisible}
    <div  class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-screen p-8" style="z-index: 1000;">
        <div class="relative flex flex-col top-[25vh] w-full h-[40vh] p-5 border shadow-lg bg-white">

            <button on:click={syncCalendars} class="mt-auto bg-action h-14 text-white w-full font-bold text-lg">Fertig</button>
        </div>
    </div>
{/if}