<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { Chart } from "chart.js";
    export let carbs;
    export let fats;
    export let proteins;
    export let arrowPosition;


    let ctx;
    let myChart;
    onMount(() => {
        ctx = myChart.getContext('2d');
        myChart = new Chart(ctx, config);
    });
    $: data = {
            labels: ['Kohlenhydrate', 'Fette', 'Eiweiß'],
            datasets: [
                {
                    label: 'Gramm',
                    data: [carbs, fats, proteins],
                    backgroundColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
                    // hoverOffset: 4,
                    borderWidth: 2,
                    borderColor: ['#000000', '#000000', '#000000'],
                }
            ]
        };
    $: config = {
            type: 'doughnut',
            data: data,
            options: {
                borderRadius: '2',
                responsive: false,
                cutout: '80%',
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
    $: if (myChart) {
        myChart.data = data;
        myChart.options = config.options;
        myChart.update();
    }
</script>

<div class="flex flex-col mt-4 w-full relative">
    <div class="rounded-lg bg-white w-auto justify-start p-4">
        {#if arrowPosition===1}
            <p in:fly={{duration:300}} class="text-xs text-left">Um Gewicht zuzunehmen, musst du in einem kalorischen Überschuss sein.</p>
        {:else if arrowPosition===2}
            <p in:fly={{duration:300}} class="text-xs text-left">Um dein Gewicht zu behalten, solltest du maximal deinen Vebrauch essen.</p>
        {:else}
            <p in:fly={{duration:300}} class="text-xs text-left">Um abzunehmen, musst du weniger Kalorien als dein Verbrauch essen.</p>
        {/if}
    </div>  
</div>
<div class="flex flex-row justify-between items-center p-4 gap-4 mt-4">
    <canvas bind:this={myChart} class="basis-1/3 w-1/3" id="donutChart"></canvas>
    <div class="flex flex-row basis-2/3 text-left text-white gap-4 justify-between">
        <div class="flex flex-col basis-2/3 text-left text-white gap-4 justify-between">
            <p class="border-b-2">Kohlenhydrate</p>
            <p class="border-b-2">Fette</p>
            <p class="border-b-2">Eiweiß</p>
        </div>
        <div class="flex flex-col basis-2/3 text-white gap-4 justify-between text-right">
            <p>{carbs}g</p>
            <p>{fats}g</p>
            <p>{proteins}g</p>
        </div>
    </div>
</div>