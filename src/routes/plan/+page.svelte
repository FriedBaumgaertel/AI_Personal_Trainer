<script lang="ts">
import PlanHeaderSection from "./Components/PlanHeaderSection.svelte";
import PlanTimelineSection from "./Components/PlanTimelineSection.svelte";
import WorkoutDiv from "../Components/WorkoutDiv.svelte";
import { onMount } from "svelte";
import { fly } from "svelte/transition";
import {quintOut} from "svelte/easing";
import WorkoutView from "../Components/WorkoutView.svelte";

let today= new Date();
let mounted:boolean=false;
let currentlySelectedDay = today;
let workoutViewOpened = false;
let restDay:boolean=false;

let workoutType:string = "";
let workoutCalories:number = 0;
let workoutProgress:number = 0;
let workoutTime:number = 0;
let exerciseArray:Array<Object>=[];

$: if (currentlySelectedDay && mounted) {
    updateWorkoutDiv();
}
function updateWorkoutDiv() {
    workoutCalories = 0;
    workoutProgress = 0;
    workoutTime = 0;

    fetch("https://gettodaysworkout-afizyqllwa-uc.a.run.app", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "userId": sessionStorage.getItem("userID"),
            "currentDate": currentlySelectedDay
        })
    })
        .then(response => response.json())
        .then(data =>{
                if (data.exercises) {
                    restDay=false;
                    exerciseArray=[];
                    for (let i=0; i < data.exercises.length; i++){
                        workoutTime+=(data.exercises[i].time * data.exercises[i].sets);
                        workoutCalories+=data.exercises[i].calories;
                        exerciseArray.push(data.exercises[i]);
                        if (data.exercises[i].completed === true){
                            workoutProgress++;
                        }
                    }
                    workoutProgress = workoutProgress / data.exercises.length * 100;
                    workoutType = data.exercises[0].workoutType;
                } else {
                    restDay=true;
                }
            }
        )
}

onMount(() => {
    const userID = sessionStorage.getItem("userID");

    fetch("https://gettodaysworkout-afizyqllwa-uc.a.run.app", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "userId": userID,
            "currentDate": currentlySelectedDay
        })
    })
        .then(response => response.json())
        .then(data =>{
            if (data.exercises) {
                restDay=false;
                exerciseArray=[];
                for (let i=0; i < data.exercises.length; i++){
                    workoutTime+=(data.exercises[i].time * data.exercises[i].sets);
                    workoutCalories+=data.exercises[i].calories;
                    exerciseArray.push(data.exercises[i]);
                    if (data.exercises[i].completed === true){
                        workoutProgress++;
                    }
                }
                workoutProgress = workoutProgress / data.exercises.length * 100;
                workoutType = data.exercises[0].workoutType;
                mounted=true;
            } else {
                restDay=true;
            }
        })
})
</script>

<section class="flex flex-col w-screen h-screen justify-start gap-4 z-50 p-6 px-10">
    <PlanHeaderSection />
    <PlanTimelineSection bind:currentlySelectedDay />
    {#if mounted && !restDay}
        <WorkoutDiv bind:workoutViewOpened workoutType={workoutType} workoutCalories={workoutCalories} workoutProgress={workoutProgress} workoutTime={workoutTime} />
    {:else if restDay}
        <div class="flex flex-col w-full h-full justify-center items-center">
            <h1 class="text-3xl font-bold">Rest Day</h1>
            <p class="text-xl">You have no workout today</p>
        </div>
    {/if}
</section>
{#if workoutViewOpened}
    <div transition:fly={{ duration: 1200, y: 600, easing: quintOut }} class="absolute top-0 left-0 right-0 bottom-0 z-20">
        <svg tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}} class="fixed top-10 right-10 z-30"  role="button" on:click={()=>workoutViewOpened=false} width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L16 1L1 16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>s
        </svg>
        <WorkoutView workoutType={workoutType} totalCalories={workoutCalories} totalTime={workoutTime} exerciseArray={exerciseArray} />
    </div>
{/if}