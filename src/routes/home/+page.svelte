<script lang="ts">
    import WorkoutProgressChart from "./Components/WorkoutProgressChart.svelte";
    import WorkoutView from "./Components/WorkoutView.svelte";
    import {onMount} from "svelte";
    import {quintOut} from "svelte/easing";
    import { fly, fade } from "svelte/transition";
    let workoutViewOpened:boolean = false;

    let workoutProgress:number = 0;
    let workoutTime:number = 0;
    let workoutCalories:number = 0;
    let calorieProgress:number = 40;

    let exerciseArray:Array<object> = [];

    $: workoutIntensity = workoutTime > 60 ? "Hoch" : "Niedrig";
    $: intensityColor = workoutIntensity === "Hoch" ? "text-red-600" : "text-green-600";

    onMount(() => {
        const userID = sessionStorage.getItem("sessionID");
        fetch("https://getuserworkout-afizyqllwa-uc.a.run.app", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "userId": userID
            })
        })
            .then((res) => res.json())
            .then((data) => {
                for (let i=0; i < data.exercises.length; i++){
                    workoutTime+=data.exercises[i].time;
                    workoutCalories+=data.exercises[i].calories;
                    exerciseArray.push(data.exercises[i]);
                    if (data.exercises[i].completed === true){
                        workoutProgress++;
                    }
                }
                workoutProgress = workoutProgress / data.exercises.length * 100;
            })
            .catch((err) => {
                console.log(err)
            })
    })

    let date = new Date();
    let weekday = () => {
        switch (date.getDay()){
            case 0:
                return "Sonntag"
            case 1:
                return "Montag"
            case 2:
                return "Dienstag"
            case 3:
                return "Mittwoch"
            case 4:
                return "Donnerstag"
            case 5:
                return "Freitag"
            case 6:
                return "Samstag"
            default:
                return "Error"
        }
    }
    let day = date.getDate()
    let abbreviatedDay = date.toLocaleDateString("de-DE", {weekday: "short"}) + "."
    let month = date.getMonth() + 1
    let currentDateText: string = `${weekday()}, ${day}.${month}`
</script>

<main class="p-8 z-10">
    <div class="flex flex-col mb-8">
        <p class="text-md text-gray-400">{currentDateText}</p>
        <h1 class="text-4xl font-bold mb-4">Guten Tag, Neuer Nutzer</h1>
        <p class="text-sm text-black font-thin">Sieht so aus, als stünde heute eine neue Einheit an. Gib alles!</p>
    </div>
    <div tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}}  role="button" on:click={()=>workoutViewOpened=true} class="w-full h-48 bg-black rounded-3xl p-4 pt-2 justify-center items-center shadow-lg shadow-gray-200">
        <div class="flex flex-row justify-between items-center">
            <div class="flex flex-col">
                <h2 class="text-white text-3xl basis-2/3">Heute</h2>
                <h3 class="text-gray-500 basis-1/3">Krafttraining</h3>
            </div>
            <WorkoutProgressChart progress={workoutProgress} />
        </div>
        <div class="flex flex-row w-full justify-between place-self-center">
            <div class="flex flex-col">
                <h4 class="text-white text-sm">{workoutCalories}kCal</h4>
                <p class="text-xs text-gray-400 font-thin">Verbrannt</p>
            </div>
            <div class="flex flex-col">
                <h4 class="text-white text-sm">{workoutTime} min.</h4>
                <p class="text-xs text-gray-400 font-thin">Dauer</p>
            </div>
            <div class="flex flex-col">
                <h4 class="{intensityColor} text-sm">Hoch</h4>
                <p class="text-xs text-gray-400 font-thin">Intensität</p>
            </div>
        </div>
    </div>
    <section class="flex flex-col my-8 px-2 gap-4">
        <h2 class="text-2xl font-medium">Kalorien</h2>
        <h3 class="text-4xl font-bold">1640<span class="text-sm text-gray-300">/2350kCal</span></h3>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="10">
                <rect x="0" y="0" width="100%" height="10" rx="6" ry="6" fill="#cccccc"/>
                <rect x="0" y="0" width="{calorieProgress}%" height="10" rx="6" ry="6" fill="#00ff00"/>
            </svg>
        </div>
        <h4 class="text-xl text-gray-500">Heute</h4>
        <div class="w-full h-36 px-4 flex flex-row justify-between items-center">
            {#each ["Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So."] as day}
                <div class="w-1/7 h-full flex flex-col justify-between items-center"> <!-- Wrapper for the SVG and text -->
                    <svg style="height: 100%; width: auto; display: block;" viewBox="0 0 10 100" preserveAspectRatio="xMidYMid meet">
                        <!-- Gray background for the progress bar -->
                        <rect x="1" y="10" width="3" height="90" fill={day===abbreviatedDay?"#666666":"#cccccc"} rx="3" ry="3"/>
                    </svg>
                    <span class="text-xs mt-1">{day}</span> <!-- Text below the SVG -->
                </div>
            {/each}
        </div>
    </section>
</main>

    {#if workoutViewOpened}
<div transition:fly={{ duration: 1200, y: 600, easing: quintOut }} class="absolute top-0 left-0 right-0 bottom-0 z-20">
    <svg tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}} class="absolute top-10 right-10 z-30"  role="button" on:click={()=>workoutViewOpened=false} width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L16 1L1 16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
        <WorkoutView totalCalories={workoutCalories} totalTime={workoutTime} exerciseArray={exerciseArray} />
</div>
    {/if}
