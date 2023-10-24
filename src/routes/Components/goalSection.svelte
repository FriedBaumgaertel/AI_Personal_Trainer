<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { Chart } from "chart.js/auto";
    import { fade } from "svelte/transition";
    import { step, totalCalories, carbs, fats, proteins } from '../stores';
    import { digits } from "../stores";
    import { quintOut } from "svelte/easing";

    let currentDigits;
    let currentCarbs;
    let currentFats;
    let currentProteins;


    digits.subscribe((value) => {
        currentDigits = value;
    })
    carbs.subscribe((value) => {
        currentCarbs = value;
    })
    fats.subscribe((value) => {
        currentFats = value;
    })
    proteins.subscribe((value) => {
        currentProteins = value;
    })
    function setMacros(method) {
        if (method === 1) {
            carbs.set(40);
            fats.set(30);
            proteins.set(30);
        }
        if (method === 2) {
            carbs.set(40);
            fats.set(30);
            proteins.set(30);
        }
        if (method === 3) {
            carbs.set(40);
            fats.set(30);
            proteins.set(30);
        }
        // Update Chart
        if (chart) {
            chart.data.datasets[0].data[0] = currentCarbs;
            chart.data.datasets[0].data[1] = currentFats;
            chart.data.datasets[0].data[2] = currentProteins;
            chart.update();
        }
        else {
            setTimeout(() => {
                ctx1 = donutChart.getContext('2d');
                chart = new Chart(ctx1, config);
            })
        }
    };

    $: macroData = {
        labels: ['Kohlenhydrate', 'Fette', 'Eiweiß'],
        datasets: [
                {
                    label: 'Gramm',
                    data: [currentCarbs, currentFats, currentProteins],
                    backgroundColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
                    // hoverOffset: 4,
                    borderWidth: 2,
                    borderColor: ['#000000', '#000000', '#000000'],
                }
            ]
        };
    $: config = {
            type: 'doughnut',
            data: macroData,
            options: {
                borderRadius: '1',
                responsive: false,
                cutout: '50%',
                maintainAspectRatio: true,
                spacing: 2,
                hoverBorderWidth: 1,
                hoverBorderColor: "black",
                plugins: {
                    legend: {
                        position: 'bottom',
                        display: false,
                        labels: {
                            usePointStyle: true,
                            padding: 10,
                            font: {
                                size: 12
                            },
                            pointStyle: 'rectRounded',
                        }
                    },
                }
            }
        };
    
    let div1Background = "transparent";
    let div2Background = "transparent";
    let div3Background = "transparent";
    let div1Text = "white";
    let div2Text = "white";
    let div3Text = "white";
    let div1Scale = 100;
    let div2Scale = 100;
    let div3Scale = 100;
    function changeDivColors(num) {
        if (num === 1) {
            div1Background = "white";
            div1Text = "black";
            div2Background = "transparent";
            div2Text = "white";
            div3Background = "transparent";
            div3Text = "white";
            div1Scale = 105;
            div2Scale = 100;
            div3Scale = 100;
        }
        if (num === 2) {
            div2Background = "white";
            div2Text = "black";
            div1Background = "transparent";
            div1Text = "white";
            div3Background = "transparent";
            div3Text = "white";
            div1Scale = 100;
            div2Scale = 105;
            div3Scale = 100;
        }
        if (num === 3) {
            div3Background = "white";
            div3Text = "black";
            div1Background = "transparent";
            div1Text = "white";
            div2Background = "transparent";
            div2Text = "white";
            div1Scale = 100;
            div2Scale = 100;
            div3Scale = 105;
        }
    }
    let showDivOne = false;
    let showDivTwo = false;
    let showDivThree = false;

    let divs = [showDivOne, showDivTwo, showDivThree];
    let num = 0;
    function updateDivs() {
        if (num < divs.length) {
            divs[num] = true;
            num += 1;
            console.log(num);
            // If you want to keep updating the next div after a delay
            setTimeout(updateDivs, 200);
        }
    }

    let donutChart;
    let ctx1;
    let chart;
    onMount(() => {
        setTimeout(updateDivs, 100);
    });
</script>
{#if divs[0] === true && divs[1] === true && divs[2] === true}
    <h2 transition:fade={{duration:5000, easing:quintOut}} class="text-gray-200 text-center text-sm">Wähle dein Fitnessziel.</h2>
{/if}
<div class="flex flex-row w-full p-6 gap-2 items-center">
    {#if divs[0] === true}
    <button in:fly={{ duration:1000, easing: quintOut, y:100 }} on:click={() => {changeDivColors(1); setMacros(1)}} class="w-1/3 scale-{div1Scale} transition-all ease-in-out duration-300 rounded-2xl bg-{div1Background} border-gray-400 border-solid border-[1px] p-4 h-32 text-left items-center flex flex-col">
        <h3 class="text-xs font-bold text-{div1Text}">Muskeln aufbauen</h3>
        <p class="text-[10px] text-gray-300">Steigere deine Muskelmasse und Stärke.</p>
    </button>
    {/if}
    {#if divs[1] === true}
    <button in:fly={{ duration:1000, easing: quintOut, y:100 }} on:click={() => {changeDivColors(2); setMacros(2)}} class="w-1/3 scale-{div2Scale} transition-all ease-in-out duration-300 rounded-2xl bg-{div2Background} border-gray-400 border-solid border-[1px] p-4 h-32 text-left items-center flex flex-col">
        <h3 class="text-xs font-bold text-{div2Text}">Fett abnehmen</h3>
        <p class="text-[10px] text-gray-300">Verliere Fett durch ein kalorisches Defizit.</p>
    </button>
    {/if}
    {#if divs[2] === true}
    <button in:fly={{ duration:1000, easing: quintOut, y:100 }} on:click={() => {changeDivColors(3); setMacros(3)}} class="w-1/3 scale-{div3Scale} transition-all ease-in-out duration-300 rounded-2xl bg-{div3Background} border-gray-400 border-solid border-[1px] p-4 h-32 text-left items-center flex flex-col">
        <h3 class="text-xs font-bold text-{div3Text}">Gewicht behalten</h3>
        <p class="text-[10px] text-gray-300">Behalte dein Gewicht bei.</p>
    </button>
    {/if}
</div>
<!-- 
<div in:fly={{duration:2000, x:300,easing:quintOut}} class="z-20 p-4 m-4">
    <div class="flex relative justify-center flex-col">
        <div class="text-8xl text-white text-center font-extrabold flex flex-col overflow-hidden relative justify-center items-center h-[96px]">
            <div class="text-8xl text-white text-center font-extrabold flex flex-row justify-center">
                <h1 class="transition-all ease-in-out duration-1000">{currentDigits[0]}</h1>
                <h1 class="transition-all ease-in-out duration-1000">{currentDigits[1]}</h1>
                <h1 class="transition-all ease-in-out duration-1000">{currentDigits[2]}</h1>
                <h1 class="transition-all ease-in-out duration-1000">{currentDigits[3]}</h1>
                <h2 in:fly={{duration: 1200, y:100, easing: quintOut}} class=" mt-2 static text-xs font-medium text-white">kCal</h2>    
            </div>
        </div>
    </div>
</div>
-->
{#if currentCarbs !== 0}
<div in:fly={{duration:1000, y:200, easing:quintOut}} class="flex flex-row justify-between items-center p-4 gap-4 mt-4">
    <canvas bind:this={donutChart} class="basis-1/3 w-1/3" id="donutChart"></canvas>
    <div class="flex flex-row basis-2/3 text-left text-white gap-4 justify-between">
        <div class="flex flex-col basis-2/3 text-left text-white gap-4 justify-between">
            <p class="border-b-2">Kohlenhydrate</p>
            <p class="border-b-2">Fette</p>
            <p class="border-b-2">Eiweiß</p>
        </div>
        <div class="flex flex-col basis-2/3 text-white gap-4 justify-between text-right">
            <p>{currentCarbs}g</p>
            <p>{currentFats}g</p>
            <p>{currentProteins}g</p>
        </div>
    </div>
</div>
{/if}