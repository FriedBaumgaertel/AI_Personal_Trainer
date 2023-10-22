
<script>
    import Chart from 'chart.js/auto';
    import { onMount } from 'svelte';
    let age = 46;
    let height = 170;
    let weight = 70;
    let activity = 0;
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
    function getSelectedActivity(selectedActivity) {
        activity = selectedActivity;
    }
    // 66 + (13.7 × weight in kg) + (5 × height in cm) - (6.8 × age in years).
    $: totalCalories = Math.round(66 + (13.7 * weight) + (5 * height) - (6.8 * age));
    $: activeCalories = Math.round(activity * totalCalories);
    $: bmi = Math.round(weight / (height/100 * height/100));
    $: medianBMI = getMedianBMI(age);
    let calories;
    //Chart 
    $: data = {
            labels: ['Grundumsatz', 'aktive Kalorien', 'NEAT'],
            datasets: [
                {
                    label: 'Kalorienverbrauch',
                    data: [totalCalories, activeCalories, 100],
                    backgroundColor: ['#7000e1', '#fc8800', '#00b0e8'],
                    // hoverOffset: 4,
                    borderWidth: 0
                }
            ]
        };
    $: config = {
            type: 'doughnut',
            data: data,
            options: {
                borderRadius: '5',
                responsive: false,
                cutout: '80%',
                maintainAspectRatio: true,
                spacing: 2,
                plugins: {
                    legend: {
                        position: 'right',
                        display: true,
                        labels: {
                            usePointStyle: true,
                            padding: 30,
                            font: {
                                size: 18
                            },
                            pointStyle: 'rectRounded',
                        }
                    },
                }
            }
        };
        let myChart;
        $: {
            if (myChart) {
                myChart.data = data;
                myChart.update();
            }
        }
        onMount(()=> {
        const ctx = calories.getContext('2d');
        myChart = new Chart(ctx, config);
      })
</script>

<section class="flex justify-center items-center min-h-[50vh] flex-col gap-8">
    <h1 class="text-4xl text-white font-mont font-bold">Kalorienrechner</h1>
    <p class="text-white font-mont">Hier kannst du deine Kalorien berechnen</p>
</section>
<section class="container">
    <div class="grid grid-cols-3 text-white gap-8 p-16 w-[100vw]">
        <div class="bg-white rounded-md text-black p-10 col-span-2">
            <p>{age}</p>
            <label>Alter</label>
            <input id="age" type="range" min="18" max="90" class="range" step="1" bind:value={age}/>
                <div class="w-full flex justify-between text-xs px-2">
                <span>18</span>
                <span>36</span>
                <span>54</span>
                <span>72</span>
                <span>90</span>
            </div>
        </div>
        <div class="bg-white row-span-3 rounded-md text-black p-10">
  
                <canvas class="w-full" bind:this={calories} />
                <div class="stats stats-vertical shadow w-full">    
  
                    <div class="stat p-4 w-full">
                        <div class="stat-title">Grundumsatz</div>
                        <div class="stat-value">{totalCalories} kCal</div>
                        <div class="stat-desc"></div>
                    </div>
                    <div class="stat p-4">
                        <div class="stat-title">BMI</div>
                        <div class="stat-value">{bmi}</div>
                        <div class="stat-desc"><span class="text-green-500">↗︎</span> durchschnittlicher BMI: {medianBMI}</div>
                        </div>
                    <div class="stat p-4">
                        <div class="stat-title">Aktiver Verbrauch</div>
                        <div class="stat-value">{activeCalories} kCal</div>
                        <div class="stat-desc"></div>
                    </div>
                    
                </div>
        </div>
        <div class="bg-white rounded-md text-black p-10 flex flex-col justify-between">
            <label>Körpergröße</label>
            <input type="number" name="height" id="height" placeholder="Größe in cm" class="input input-bordered w-full max-w-xs" bind:value={height}>
        </div>
        <div class="bg-white rounded-md text-black p-10 flex flex-col justify-between">
            <label>Gewicht</label>
            <input type="number" name="height" id="height" placeholder="Größe in cm" class="input input-bordered w-full max-w-xs" bind:value={weight}>
        </div>
        <div class="bg-white rounded-md text-black p-10 flex flex-col justify-between col-span-2">
            <label>Aktivität</label>
            <div class="join flex justify-between">
                <button class="border-solid border-2 border-gray-600 p-8 font-mont py-2 cursor-pointer rounded-sm hover:bg-slate-100 " on:click={() => getSelectedActivity(0)}>
                    <h3 class="text-lg">Sitzend</h3>
                    <p class="text-sm text-gray-500">Keine sportliche Aktivität</p>
                </button>
                <button class="border-solid border-2 border-gray-600 p-8 font-mont py-2 cursor-pointer rounded-sm hover:bg-slate-100 " on:click={() => getSelectedActivity(1)}>
                    <h3 class="text-lg">Stehend</h3>
                    <p class="text-sm text-gray-500">Keine sportliche Aktivität</p>
                </button>
                <button class="border-solid border-2 border-gray-600 p-8 font-mont py-2 cursor-pointer rounded-sm hover:bg-slate-100 " on:click={() => getSelectedActivity(2)}>
                    <h3 class="text-lg">Aktiv</h3>
                    <p class="text-sm text-gray-500">Keine sportliche Aktivität</p>
                </button>
                <button class="border-solid border-2 border-gray-600 p-8 font-mont py-2 cursor-pointer rounded-sm hover:bg-slate-100 " on:click={() => getSelectedActivity(3)}>
                    <h3 class="text-lg">Leistungssport</h3>
                    <p class="text-sm text-gray-500">Keine sportliche Aktivität</p>
                </button>

            </div>

        </div>
    </div>
</section>