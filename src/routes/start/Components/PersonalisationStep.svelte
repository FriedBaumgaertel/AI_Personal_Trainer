<script lang="ts">
    import {fly} from "svelte/transition";
    import {userTrainingDays, userWorkingHours, userPreferredTrainingTypes} from "../../stores.ts";

    let activeButton;
    let userStartingWorkingTime;
    let userEndingWorkingTime;
    function setActive(index) {
        activeButton=index;
        userTrainingDays.set(index);
    }
    const sportTypes:Array<Object> = [{sport: "Kardiotraining", selected: false}, {sport: "Krafttraining", selected: false}, {sport: "HIIT", selected: false}, {sport: "Crossfit", selected: false}];


    $: userWorkingHours.set({from: userStartingWorkingTime, to: userEndingWorkingTime});
    $: userPreferredTrainingTypes.set(sportTypes.map((sport) => sport.selected ? sport.sport : null))
</script>
<section in:fly={{ duration:1000, y:50 }} class="bg-white flex flex-col h-3/4 p-8">
    <h1 class="text-3xl text-black text-center font-extrabold">Personalisierung</h1>
    <p class="text-center mb-12 mt-2">Erzähle uns mehr über deine Vorlieben bei einem Trainingsplan.</p>
</section>
<section class="p-8 flex mb-0 flex-col text-center justify-center items-center gap-24">
    <div>
        <h2 class="text-xl text-bold">Wie oft möchtest du trainieren?</h2>
        <p class="text-sm text-black mb-6">pro Woche</p>
        <div class="flex flex-row justify-center gap-1 items-center">
            {#each [1, 2, 3, 4, 5, 6, 7] as number (number)}
                <button
                        class:bg-white="{activeButton !== number}"
                        class:text-black="{activeButton !== number}"
                        class:bg-black="{activeButton === number}"
                        class:text-white="{activeButton === number}"
                        class="transition-all duration-300 p-4 text-lg font-bold border-[1px] border-black border-solid"
                        on:click={() => setActive(number)}>
                    {number}
                </button>
            {/each}
        </div>
    </div>
    <div>
        <h2 class="text-xl text-bold mb-6">Wie sind deine Arbeitszeiten?</h2>
        <p class="text-sm text-black mb-6">Wir legen deine Trainingszeiten außerhalb deiner Arbeitszeiten. Du kannst die Zeiten im Nachhinein ändern.</p>
        <div class="flex flex-row justify-center gap-1 items-center">
            Von <input bind:value={userStartingWorkingTime} type="time" class="border-[1px] border-black border-solid p-2 w-24"> bis <input bind:value={userEndingWorkingTime} type="time" class="border-[1px] border-black border-solid p-2  w-24">
        </div>
    </div>
    <div>
        <h2 class="text-xl text-bold mb-6">Welche Sportarten magst du?</h2>
        <div class="grid grid-cols-2 justify-center gap-1 items-center">
            {#each sportTypes as sport}
                <button on:click={()=>sport.selected=!sport.selected} class="{sport.selected === true ? 'bg-black text-white': 'bg-white text-black'} transition-all duration-300 p-4 text-lg font-bold border-[1px] border-black border-solid">
                    {sport.sport}
                </button>
            {/each}
        </div>
    </div>
</section>
