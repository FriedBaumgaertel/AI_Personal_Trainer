<script lang="ts">
    import WorkoutView from "../Components/WorkoutView.svelte";
    import WorkoutDiv from "../Components/WorkoutDiv.svelte";
    import {onMount} from "svelte";
    import {cubicInOut, quintOut} from "svelte/easing";
    import { fly } from "svelte/transition";
    import {workoutViewOpenedStore} from "./stores";
    import WeeklyWorkoutsDone from "./Components/WeeklyWorkoutsDone.svelte";

    // Animation handling
    let headersVisible = false;
    let workoutVisible = false;
    let calorieSectionVisible = false;
    let workoutsDoneVisible = false;

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
    // WorkoutView handling

    // Workout Data
    let workoutProgress:number = 0;
    let workoutTime:number = 0;
    let workoutCalories:number = 0;
    let exerciseArray:Array<object> = [];

    //User Data
    let userDailyRestingCalories = 0;
    let userDailyGoalCalories = 0;
    $: currentCaloriesBurned = Math.round( (date.getHours() / 24 ) * userDailyRestingCalories);
    $: calorieProgress = currentCaloriesBurned / userDailyGoalCalories * 100;

    let workoutViewOpened:boolean = false;
    workoutViewOpenedStore.subscribe((value) => {
        workoutViewOpened = value;
    });

    onMount(() => {
        const userID = sessionStorage.getItem("sessionID");
        fetch("https://getuserdata-afizyqllwa-uc.a.run.app", {
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
                userDailyRestingCalories = Math.round(data.userData.dailyRestingCalories);
                userDailyGoalCalories = Math.round(data.userData.goalCalories);
                const stringTrainingGoal = () => {
                    if (data.userData.fitnessGoal === 1){
                        return "Abnehmen"
                    } else if (data.userData.fitnessGoal === 2){
                        return "Muskeln aufbauen"
                    } else if (data.userData.fitnessGoal === 3){
                        return "Rekomposition"
                    } else {
                        return "Error"
                    }
                }
                sessionStorage.setItem("age", data.userData.age);
                sessionStorage.setItem("weight", data.userData.weight);
                sessionStorage.setItem("height", data.userData.height);
                sessionStorage.setItem("fitnessGoal", stringTrainingGoal());
                sessionStorage.setItem("trainingDays", data.userData.trainingDays);

                for (let i=0; i < data.workoutData.exercises.length; i++){
                    workoutTime+=data.workoutData.exercises[i].time;
                    workoutCalories+=data.workoutData.exercises[i].calories;
                    exerciseArray.push(data.workoutData.exercises[i]);
                    if (data.workoutData.exercises[i].completed === true){
                        workoutProgress++;
                    }
                }
                workoutProgress = workoutProgress / data.workoutData.exercises.length * 100;
            })
            .catch((err) => {
                console.log(err)
            })
        setTimeout(() => {
            headersVisible = true;
            setTimeout(() => {
                workoutVisible = true;
                setTimeout(() => {
                    calorieSectionVisible = true;
                    setTimeout(() => {
                        workoutsDoneVisible = true;
                    }, 300);
                }, 300);
            }, 300);
        }, 300);
    })
</script>

<main class="p-8 z-10">
        {#if headersVisible}
    <div in:fly={{duration:800, y:50, easing:cubicInOut}} class="flex flex-col mb-8">
        <p class="text-xs text-black font-light pl-[2px]">{currentDateText}</p>
        <h1 class="text-4xl font-bold mb-4">Guten Tag, Neuer Nutzer</h1>
        <p class="text-xs text-black font-light">Sieht so aus, als stünde heute eine neue Einheit an. Gib alles!</p>
    </div>
        {/if}
    <div>
        {#if workoutVisible}
            <div in:fly={{duration:800, y:50, easing:cubicInOut}}>
                <WorkoutDiv workoutProgress={workoutProgress} workoutCalories={workoutCalories} workoutTime={workoutTime}/>
            </div>
        {/if}
    </div>
    {#if calorieSectionVisible}
        <section in:fly={{duration:800, y:50, easing:cubicInOut}} class="flex flex-col my-8 px-2 gap-4">
            <h2 class="text-2xl font-bold">Kalorien</h2>
            <h3 class="text-4xl font-bold">{currentCaloriesBurned}<span class="text-sm text-black font-light">/{userDailyGoalCalories} kCal</span></h3>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="10">
                    <rect x="0" y="0" width="100%" height="6" rx="6" ry="6" fill="#EEEEEE"/>
                    <rect x="0" y="0" width="{calorieProgress?calorieProgress:0}%" height="6" rx="6" ry="6" fill="#00CA39"/>
                </svg>
            </div>
        </section>
    {/if}
    {#if workoutsDoneVisible}
    <div in:fly={{duration:800, y:50, easing:cubicInOut}}>
        <WeeklyWorkoutsDone />
    </div>
    {/if}
</main>
<section class="h-screen bg-white">

</section>
{#if workoutViewOpened}
    <div transition:fly={{ duration: 1200, y: 600, easing: quintOut }} class="absolute top-0 left-0 right-0 bottom-0 z-20">
        <svg tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}} class="fixed top-10 right-10 z-30"  role="button" on:click={()=>workoutViewOpenedStore.set(false)} width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L16 1L1 16" stroke="white" stroke-width="1.5" stroke-linecap="round"/>s
        </svg>
            <WorkoutView totalCalories={workoutCalories} totalTime={workoutTime} exerciseArray={exerciseArray} />
    </div>
{/if}
