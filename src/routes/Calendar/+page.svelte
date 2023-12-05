<script>
    import { onMount } from "svelte";
    import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import {auth} from "$lib";

    let userSignedIn = false;

    const CLIENT_ID = import.meta.env.GOOGLE_CLIENT_ID;
    const API_KEY = import.meta.env.GOOGLE_API_KEY;
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
            }).catch((error) => {
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
    async function createNewCalendarEvent() {
        const event = {
            'summary': 'Google I/O 2015',
            'location': '800 Howard St., San Francisco, CA 94103',
            'description': 'A chance to hear more about Google\'s developer products.',
            'start': {
                'dateTime': '2023-12-04T09:00:00+0000',
                'timeZone': ''
            },
            'end': {
                'dateTime': '2023-12-04T10:30:00+0000',
                'timeZone': ''
            }
        };
        const request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
        });

        request.execute(function(event) {
            console.log('Event created: ' + event.htmlLink);
        });
    }
    onMount(() => {
        gapiLoaded();
        gisLoaded();
    })
</script>

<main>
    <button class="w-full h-16 bg-action" on:click={handleAuthClick}>Sign In</button>
    {#if userSignedIn}
        <button class="w-full h-16 bg-action text-white" on:click={createNewCalendarEvent}>Create Calendar event</button>
    {/if}
</main>

<style>
    /* Your CSS styles */
</style>
