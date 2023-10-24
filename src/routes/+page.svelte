
<script>
    import Chart from 'chart.js/auto';
    import { getContext, onMount } from 'svelte';
    import GoalSection from './Components/goalSection.svelte';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    let age;
    let gender;
    let height;
    let weight;
    let maleRadio;
    let femaleRadio;
    function setGender(g) {
        gender  = g;
    }
    function getMedianBMI(age) {
        if (age >= 18 && age <= 24) return 25.5;
        if (age >= 25 && age <= 29) return 26.4;
        if (age >= 30 && age <= 34) return 28.1;
        if (age >= 35 && age <= 39) return 29.0;
        if (age >= 40 && age <= 44) return 29.1;
        if (age >= 45 && age <= 49) return 28.6;
        if (age >= 50 && age <= 54) return 29.1;
        if (age >= 55 && age <= 59) return 29.2;
        if (age >= 60 && age <= 64) return 28.9;
        if (age >= 65 && age <= 69) return 29.0;
        if (age >= 70 && age <= 74) return 28.6;
        if (age >= 75) return 27.5;
        return null;
    }
    let activity = 80;
    function getSelectedActivity(selectedActivity) {
        switch (selectedActivity) {
            case 0:
                activity = 80;
                break;
            case 1:
                activity = 180;
                break;
            case 2:
                activity = 390;
                break;
            default:
                activity = 80;
                break;
        }
        return activity;
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
    $: neat = activity;
    // 66 + (13.7 × weight in kg) + (5 × height in cm) - (6.8 × age in years).
    $: bmr = Math.round(66 + (13.7 * weight) + (5 * height) - (6.8 * age));
    $: bmi = Math.round(weight / (height/100 * height/100));
    $: medianBMI = getMedianBMI(age);
    let totalCalories = 0;

    let digits = [0,0,0,0]

    let translateY1 =100;
    let translateY2 =-100;
    let translateY3 =100;
    let translateY4 =-100;


    let targetCalories = 0;
    let start;
    let duration = 100; // 5 seconds
    let isAnimating = false;
    let activeCalories;
    let statVisible = false;
    function getTotalCalories(bmr, neat, activityMinutes = 0) { 
        if (isAnimating) return;
        if (!age || !height || !weight || !activityMinutes) return;
        statVisible = false;
        // Calculate active and total calories
        translateY1 = 100;
        translateY2 = -100;
        translateY3 = 100;
        translateY4 = -100;

        activeCalories = Math.round(MET * 3.5 * weight / 200) * activityMinutes;
        totalCalories = bmr + activeCalories + neat;
        digits = Array.from(String(totalCalories), Number);
        // Start the count-up animation
        start = null; // Reset start time for animation
        isAnimating = true;
        requestAnimationFrame(countUp);

        return targetCalories;
    }
    function countUp(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let percentage = Math.min(progress / duration, 1);
        translateY1 = 70 - percentage * 70;
        translateY2 = -70 + percentage * 70;
        translateY3 = 70 - percentage * 70;
        translateY4 = -70 + percentage * 70;  
        if (percentage < 1) {
            requestAnimationFrame(countUp);
        } else {
            isAnimating = false;  // Reset the flag when animation is done
            statVisible = true;
        }
    }

    let arrow = "";
    $: {
        if (bmi < medianBMI) {
            arrow = "↑";
        } else if (bmi > medianBMI) {
            arrow = "↓";
        } else {
            arrow = "";
        }
    }
    let showGoals = false;
    let arrowPosition = 1;
    function setArrowPosition(pos) {
        if (totalCalories === 0) return;
        showGoals = true;
        arrowPosition = pos;
    }
    //Chart 
    let carbs;
    let fats;
    let proteins;
    function calculateMacros() {
        if (arrowPosition === 1) {
            carbs = Math.round(totalCalories * 0.4 / 4);
            fats = Math.round(totalCalories * 0.2 / 9);
            proteins = Math.round(totalCalories * 0.4 / 4);
        } else if (arrowPosition === 2) {
            carbs = Math.round(totalCalories * 0.4 / 4);
            fats = Math.round(totalCalories * 0.3 / 9);
            proteins = Math.round(totalCalories * 0.3 / 4);
        } else if (arrowPosition === 3) {
            carbs = Math.round(totalCalories * 0.3 / 4);
            fats = Math.round(totalCalories * 0.3 / 9);
            proteins = Math.round(totalCalories * 0.4 / 4);
        }
    }
</script>

<section class="flex justify-center items-center min-h-[20vh] flex-col gap-8 p-6">
    <h1 class="text-4xl text-white font-mont font-bold">Kalorienrechner</h1>
    <p class="text-white text-center">Berechne deinen Verbrauch.</p>
</section>
<section class="overflow-x-hidden">
    <div class="flex relative justify-center flex-col mb-8">
        <div class="text-8xl text-white text-center font-extrabold flex flex-col overflow-hidden relative justify-center items-center h-[96px]">
            <div class="text-8xl text-white text-center font-extrabold flex flex-row justify-center">
                <h1 class="transition-all ease-in-out duration-1000" style="transform: translateY({translateY1}%)">{statVisible? digits[0] : "_"}</h1>
                <h1 class="transition-all ease-in-out duration-1000" style="transform: translateY({translateY2}%)">{statVisible? digits[1] : "_"}</h1>
                <h1 class="transition-all ease-in-out duration-1000" style="transform: translateY({translateY3}%)">{statVisible? digits[2] : "_"}</h1>
                <h1 class="transition-all ease-in-out duration-1000" style="transform: translateY({translateY4}%)">{statVisible? digits[3] : "_"}</h1>
            </div>
        </div>
        {#if statVisible}
            <h2 in:fly={{duration: 1200, y:100, easing: quintOut}} class="top-0 right-10 mt-2 absolute text-white">kCal</h2>    
        {/if}
    </div>
    <!--Make a flex row that holds 3 rounded-md divs that contain felx-cols-->
    <div class="join join-horizontal w-full justify-between px-4 p-0 rounded-xl">
        <button on:click={() => setGender(0)} class="w-1/2 text-center join-item transition-all ease-in-out duration-300 {gender===0? "bg-white text-black": "text-white"} outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-left pl-2">Weiblich</button>
        <button on:click={() => setGender(1)} class="w-1/2 text-center join-item transition-all ease-in-out duration-300 {gender===1? "bg-white text-black": "text-white"} outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-left pl-2">Männlich</button>
    </div>

    <div class="flex flex-row w-full p-4 justify-between gap-2">
        <div class="flex flex-col gap-4 items-center relative">
            <input class="transition-all ease-in-out duration-300 focus:bg-white focus:text-black outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-white text-left pl-2" type="number" placeholder="Alter" bind:value={age}/>
            <p class="top-2 right-4 absolute text-white text-xs">Jahre</p>
            <input class="transition-all ease-in-out duration-300 focus:bg-white focus:text-black outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-white text-left pl-2" type="number" placeholder="Körpergröße" bind:value={height}/>
            <p class="bottom-2.5 right-4 absolute text-white text-xs">cm</p>
            </div>        
        <div class="flex flex-col gap-4 relative">
            <select class="outline-none bg-transparent border-solid border-[1px] border-white rounded-xl p-2 text-xs text-white w-full" bind:value={selectedSport}>
                <option class="text-white" disabled selected>Sport</option>
                <option class="text-black">Rennen</option>
                <option class="text-black">Fahrrad fahren</option>
                <option class="text-black">Schwimmen</option>
                <option class="text-black">Wandern</option>
                <option class="text-black">Stairmaster</option>
            </select>
            <input class="focus:bg-white focus:text-black outline-none bg-transparent border-solid border-[1px] rounded-xl p-2 text-xs text-white text-left pl-2" type="number" placeholder="Minuten Pro Woche" bind:value={activityMinutes}/>
            <p class="transition-all ease-in-out duration-300 bottom-2 right-4 absolute text-white text-xs">{activityMinutes? "min/Woche": ""}</p>
        </div>    
    </div>
    <div class="flex flex-row w-full pb-4 px-4 items-center justify-center">
        <input class="transition-all ease-in-out duration-300 focus:bg-white focus:text-black outline-none bg-transparent border-solid border-[1px] rounded-xl p-2 text-xs text-white text-center w-full" type="number" placeholder="Gewicht" bind:value={weight}/>
    </div>
    <div class="w-full p-4 flex flex-row">
        <button on:click={() => {getTotalCalories(bmr, neat, activityMinutes)}} class="w-full border-b-4 border-gray-400 active:border-none active:mt-1  bg-white rounded-md p-4 flex flex-row justify-center font-medium text-lg items-center gap-4">Berechnen <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" zoomAndPan="magnify" viewBox="0 0 150 149.999998" height="12" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#000000" d="M 51.332031 0 L 126.296875 75.09375 L 51.332031 150.179688 L 23.230469 122.023438 L 70.078125 75.09375 L 23.230469 28.15625 Z M 51.332031 0 " fill-opacity="1" fill-rule="nonzero"/></svg></button>
    </div>
    {#if statVisible}
    <div in:fly={{duration: 1200, y:300, easing: quintOut}}  class="mt-4 stats stats-horizontal bg-transparent flex flex-row items-center justify-center p-4 py-0 border-y-2 rounded-none border-white">
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
<section class="p-4 text-center mt-16">
    <h2 class="text-4xl text-white mb-4 font-mont font-bold">Trainingsziel</h2>
    <p class="text-white text-center mb-4">Wähle ein Trainingsziel und wir ermitteln die besten Schritten, um es zu erreichen.</p>
    <div class="flex flex-row gap-4 justify-evenly relative">
        <button on:click={() => {setArrowPosition(1); calculateMacros()}} class="rounded-lg border-white border-[1px] p-4 border-solid flex flex-col hover:bg-gray-800">
            <h3 transition:fly={{duration:300}} class="text-white text-sm">Muskeln aufbauen</h3>
        </button>
        <button on:click={() => {setArrowPosition(2); calculateMacros()}} class="rounded-lg border-white border-[1px] p-4 border-solid flex flex-col hover:bg-gray-800">
            <h3 transition:fly={{duration:300}} class="text-white text-sm">Gewicht halten</h3>
        </button>
        <button on:click={() => {setArrowPosition(3); calculateMacros()}} class="rounded-lg border-white border-[1px] p-4 border-solid flex flex-col hover:bg-gray-800">
            <h3 transition:fly={{duration:300}} class="text-white text-sm">Fett abnehmen</h3>
        </button>
        <div class="h-0 w-0 border-x-8 border-x-transparent border-b-8 border-b-white left-{arrowPosition}/4 top-[112%] absolute">
        </div>
    </div>
    {#if showGoals === true}
    <GoalSection arrowPosition={arrowPosition} carbs={carbs} fats={fats} proteins={proteins}/>
    
    {/if}
</section>