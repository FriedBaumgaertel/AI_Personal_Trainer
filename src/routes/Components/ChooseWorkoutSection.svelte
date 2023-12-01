<script lang="ts">
    let parentDiv: HTMLElement;
    let childDiv: HTMLElement;
    let focusedIndex = 0;

    let workouts = [
        {"name": "Beine", scale: 100},
        {"name": "Arme", scale: 100},
        {"name": "Brust", scale: 100},
        {"name": "Rücken", scale: 100},
        {"name": "Trizeps", scale: 100},
    ]


</script>


<section class="w-full overflow-auto">
    <h2 class="text-2xl font-bold">Workouts</h2>
    <p class="text-xs font-light">Wähle ein Workout aus.</p>
    <div class="overflow-x-scroll w-full flex gap-6 snap-x">
        {#each workouts as workout, index}
            <div class="transition-all duration-300 w-5/6 h-72 bg-black flex-none flex flex-col justify-evenly p-4 py-6 snap-center scroll-smooth">
                <div class="bg-neutral-300 w-full h-1/2 self-start"></div>
                <h4 class="text-xs font-bold text-white">Kraftworkout - Beine</h4>
                <p class="text-[10px] font-light text-white">Squats • Leg Press • Deadlift ...</p>
            </div>
        {/each}
    </div>
</section>