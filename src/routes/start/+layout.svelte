<script lang="ts">
    import {currentStep, userAge, userHeight, userWeight, selectedFitnessGoal, userTrainingDays } from "../stores";
    let step: number;

    currentStep.subscribe((value: number) => {
        step = value;
    });

    let lineColors: Array<string> = ["black", "gray-300", "gray-300", "gray-300"];

    function nextStep() {
        currentStep.update((value) => {
            return value + 1;
        });
        lineColors[step-1] = "black";
    }
    let currentAge:number = 0;
    let currentHeight:number = 0;
    let currentWeight:number = 0;
    let currentTrainingDays:number = 0;
    let currentFitnessGoal:number = 0;

    userAge.subscribe((value:number) => {
            currentAge = value;
        }
    )
    userHeight.subscribe((value:number) => {
            currentHeight = value;
        }
    )
    userWeight.subscribe((value:number) => {
            currentWeight = value;
        }
    )
    userTrainingDays.subscribe((value:number) => {
            currentTrainingDays = value;
        }
    )
    selectedFitnessGoal.subscribe((value:number) => {
            currentFitnessGoal = value;
        }
    )

    $: if (step===4) {
        console.log("userAge: " + currentAge);
        console.log("userHeight: " + currentHeight);
        console.log("userWeight: " + currentWeight);
        console.log("userTrainingDays: " + currentTrainingDays);
        console.log("selectedFitnessGoal: " + currentFitnessGoal);
    }
</script>

<header class="w-screen bg-transparent flex flex-row justify-center items-center gap-2 px-16 py-8">
    {#each lineColors as color}
        <div class="w-1/3 h-2 rounded-sm bg-{color}"></div>
    {/each}
    <svg class="" width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L16 1L1 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
</header>
<slot></slot>
{#if step!==4}
<button on:click={()=>nextStep()} class="flex flex-row  items-center justify-center gap-8 pl-12 bg-black fixed p-4 rounded-md bottom-6 left-10 text-white text-center w-3/4">
    Weiter <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.11366 6.53033C6.40656 6.23744 6.40656 5.76256 6.11366 5.46967L1.34069 0.696699C1.0478 0.403806 0.572926 0.403806 0.280032 0.696699C-0.0128608 0.989593 -0.0128608 1.46447 0.280032 1.75736L4.52267 6L0.280032 10.2426C-0.0128608 10.5355 -0.0128608 11.0104 0.280032 11.3033C0.572926 11.5962 1.0478 11.5962 1.34069 11.3033L6.11366 6.53033ZM4 6.75H5.58333V5.25H4V6.75Z" fill="white"/>
</svg>
</button>
{:else}
<button on:click={()=>{location.href="/home"}} class="flex flex-row  items-center justify-center gap-8 pl-12 bg-black fixed p-4 rounded-md bottom-6 left-10 text-white text-center w-3/4">
    Plan ansehen <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.11366 6.53033C6.40656 6.23744 6.40656 5.76256 6.11366 5.46967L1.34069 0.696699C1.0478 0.403806 0.572926 0.403806 0.280032 0.696699C-0.0128608 0.989593 -0.0128608 1.46447 0.280032 1.75736L4.52267 6L0.280032 10.2426C-0.0128608 10.5355 -0.0128608 11.0104 0.280032 11.3033C0.572926 11.5962 1.0478 11.5962 1.34069 11.3033L6.11366 6.53033ZM4 6.75H5.58333V5.25H4V6.75Z" fill="white"/>
</svg>
</button>
{/if}