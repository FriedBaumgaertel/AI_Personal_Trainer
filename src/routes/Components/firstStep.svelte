
<script>
    import { fly } from 'svelte/transition';
    import { fade } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { step } from '../stores';
    import { totalCalories, activeCalories, bmr, carbs, fats, proteins } from '../stores';
    import { digits } from '../stores';
    import { onMount } from 'svelte';
    let age;
    let gender;
    let height;
    let weight;
    let ready;
    onMount(() => {
        ready=true;
    });
    function setGender(g) {
        gender  = g;
    }
    //active calorie calculation
    let activityMinutes;
    let selectedSport = "Sport";
    let MET = 0;
    const getMets = (selectedSport) => {
        switch (selectedSport) {
            case 'Rennen':
                MET = 10;
                break;
            case 'Fahrrad fahren':
                MET = 8;
                break;
            case 'Schwimmen':
                MET = 6;
                break;
            case 'Wandern':
                MET = 5;
                break;
            case 'Stairmaster':
                MET = 9;
                break;
            default:
                MET = 0;
                break;
            }
    }
    $: if (selectedSport) {
        getMets(selectedSport);
    }
    // 66 + (13.7 × weight in kg) + (5 × height in cm) - (6.8 × age in years).
    $: bmi = Math.round(weight / (height/100 * height/100));

    let isAnimating = false;
    let statVisible = false;
    let currentTotalCalories;
    let currentActiveCalories;
    let currentBmr;
    totalCalories.subscribe((value) => {
        currentTotalCalories = value;
    })
    activeCalories.subscribe((value) => {
        currentActiveCalories = value;
    })
    bmr.subscribe((value) => {
        currentBmr = value;
    })
    function getTotalCalories(bmr, activityMinutes = 0) { 
        if (isAnimating) return;
        if (!age || !height || !weight || !activityMinutes) return;

        activeCalories.update(() => (Math.round(MET * 3.5 * weight / 200) * activityMinutes) /7);
        bmr.update(() => Math.round(66 + (13.7 * weight) + (5 * height) - (6.8 * age)));
        totalCalories.update(() => currentBmr + currentActiveCalories);
        
        let newDigits = Array.from(String(currentTotalCalories), Number);
        digits.update(() => newDigits);
        step.update(() => 2);
        return 
    }
    let showGoals = false;
    //Chart 
    let arrowPosition;
</script>

{#if ready}
<div transition:fly={{duration:2000, y:300, easing:quintOut}} class="rounded-3xl border-white border-solid border-2 m-4 z-0 shadow-white">
    <section class="overflow-x-hidden">
        <!--Make a flex row that holds 3 rounded-md divs that contain felx-cols-->
        <div class="join join-horizontal w-full justify-between px-4 p-0 rounded-xl mt-12">
            <button on:click={() => setGender(0)} class="w-1/2 text-center join-item transition-all ease-in-out duration-300 {gender===0? "bg-white text-black": "text-white"} outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-left pl-2">Weiblich</button>
            <button on:click={() => setGender(1)} class="w-1/2 text-center join-item transition-all ease-in-out duration-300 {gender===1? "bg-white text-black": "text-white"} outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-left pl-2">Männlich</button>
        </div>
    
        <div class="flex flex-row max-w-full 2 p-4 justify-between gap-2">
            <div class="w-1/2 flex flex-col gap-4 items-center relative">
                <input class="w-full transition-all ease-in-out duration-300 focus:bg-white focus:text-black outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-white text-left pl-2" type="number" placeholder="Alter" bind:value={age}/>
                <p class="top-2 right-4 absolute text-white text-xs">Jahre</p>
                <input class="w-full transition-all ease-in-out duration-300 focus:bg-white focus:text-black outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-white text-left pl-2" type="number" placeholder="Körpergröße" bind:value={height}/>
                <p class="bottom-2.5 right-4 absolute text-white text-xs">cm</p>
                </div>        
            <div class="w-1/2 flex flex-col gap-4 items-center relative">
                <select class="outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-white w-full" bind:value={selectedSport}>
                    <option class="text-white" disabled selected>Sport</option>
                    <option class="text-black">Rennen</option>
                    <option class="text-black">Fahrrad fahren</option>
                    <option class="text-black">Schwimmen</option>
                    <option class="text-black">Wandern</option>
                    <option class="text-black">Stairmaster</option>
                </select>
                <input class="w-full focus:bg-white focus:text-black outline-none bg-transparent border-solid border-[1px] rounded-xl p-2 text-xs text-white text-left pl-2" type="number" placeholder="Minuten Pro Woche" bind:value={activityMinutes}/>
                <p class="transition-all ease-in-out duration-300 bottom-2 right-4 absolute text-white text-xs">{activityMinutes? "min/Woche": ""}</p>
            </div>    
        </div>
        <div class="flex flex-row w-full pb-4 px-4 items-center justify-center">
            <input class="transition-all ease-in-out duration-300 focus:bg-white focus:text-black outline-none bg-transparent border-solid border-[1px] rounded-xl p-2 text-xs text-white text-center w-full" type="number" placeholder="Gewicht" bind:value={weight}/>
        </div>
        <div class="w-full p-4 flex flex-row overflow-visible mb-8">
            <button on:click={() => {getTotalCalories(bmr, activityMinutes)}} class="transition-shadow ease-in duration-100 w-full border-b-4 border-gray-400 active:mt-1 active:border-none bg-white rounded-md p-4 flex flex-row justify-center font-medium text-lg items-center gap-4">Berechnen <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" zoomAndPan="magnify" viewBox="0 0 150 149.999998" height="12" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#000000" d="M 51.332031 0 L 126.296875 75.09375 L 51.332031 150.179688 L 23.230469 122.023438 L 70.078125 75.09375 L 23.230469 28.15625 Z M 51.332031 0 " fill-opacity="1" fill-rule="nonzero"/></svg></button>
        </div>
        {#if statVisible}
        <div in:fly={{duration: 1200, y:300, easing: quintOut}}  class="hidden text-center mt-4 stats stats-horizontal bg-transparent flex flex-row items-center justify-center p-4 py-0 border-y-2 rounded-none border-white">
            <div class="stat p-4 w-full">
                <div class="stat-title text-xs text-gray-400">Grundumsatz</div>
                <div class="stat-value text-lg text-gray-100">{bmr} kCal</div>
            </div>
            <div class="stat p-4 w-full">
                <div class="stat-title text-xs text-gray-400">aktiver Verbrauch</div>
                <div class="stat-value text-lg text-gray-100">{activeCalories} kCal</div>
            </div>
            <div class="stat p-4 w-full">
                <div class="stat-title text-xs text-gray-400">BMI</div>
                <div class="stat-value text-lg text-gray-100">{bmi}</div>
            </div>
        </div>
        {/if}
    </section>
</div>
<h2 transition:fade={{duration:5000, easing:quintOut}} class="text-gray-200 text-center text-sm">Gib deine physischen Daten ein, um zu beginnen.</h2>
{/if}