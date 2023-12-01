<script>
    import {fly} from "svelte/transition";
    import {currentStep} from "../../stores.ts";
    import {userTrainingDays} from "../../stores.ts";

    let activeButton;
    function setActive(index) {
        activeButton=index;
        userTrainingDays.set(index);
    }
</script>
<section in:fly={{ duration:1000, y:50 }} class="bg-white flex flex-col h-3/4 p-8">
    <h1 class="text-3xl text-black text-center font-extrabold">Personalisierung</h1>
    <p class="text-center mb-12 mt-2">Erzähle uns mehr über deine Vorlieben bei einem Trainingsplan.</p>
</section>
<section class="p-8 flex mb-44 flex-col text-center justify-center items-center">
    <h2 class="text-xl text-bold">Wie oft möchtest du trainieren?</h2>
    <p class="text-sm text-black mb-8">pro Woche</p>
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
</section>
