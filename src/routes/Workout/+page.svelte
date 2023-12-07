<script>
    import {onMount} from "svelte";
    let currentExercise = {};
    let exerciseArray = [];
    function createExerciseArray() {
        let exerciseArray = [];
        for (let i=0; i<currentExercise.sets; i++) {
            if (currentExercise.weight !== 0) {
                let exercise = {
                    reps: currentExercise.reps,
                    weight: currentExercise.weight,
                    set: i+1
                }
                exerciseArray.push(exercise);
            } else {
                let exercise = {
                    reps: currentExercise.reps,
                    weight: currentExercise.weight,
                    set: i+1
                }
                exerciseArray.push(exercise);
            }
        }
        return exerciseArray
    }
    onMount(() => {
        currentExercise = JSON.parse(sessionStorage.getItem('currentExercise'));
        exerciseArray = createExerciseArray();
        console.log(currentExercise)
    })
</script>
<main class="bg-black h-screen w-screen pt-28 p-8 text-white">
    <h1 class="text-4xl font-bold tracking-widest">
        {currentExercise.name}
    </h1>
    <div class="flex flex-row justify-between text-2xl font-bold tracking-widest my-1 mb-0">
        {#if currentExercise.reps !== 0}
            <h2>{currentExercise.sets} Sets</h2>
            <h2>{currentExercise.reps} Reps</h2>
        {:else}
            <h2>{currentExercise.time} min.</h2>
        {/if}
    </div>
    <div class="h-[1px] my-8 w-full bg-white"></div>
    <h3 class="text-2xl font-bold tracking-widest">Sätze</h3>
    <div class="flex flex-col gap-4">
        {#each exerciseArray as exercise}
            {#if currentExercise.weight!==0}
                <div class="flex flex-row justify-between items-center bg-white p-4 text-black text-2xl font-bold tracking-widest my-1 mb-0 shadow-lg shadow-[rgba(255,255,255,0.25)]">
                    <h2 class="font-[Montserrat] font-light text-4xl">{exercise.set}</h2>
                    <h2 class="font-bold text-3xl">{exercise.reps} • {exercise.weight}kg</h2>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9V30.1871L33.1871 19.5935L12 9Z" fill="black"/>
                        <path d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM2.15578 20C2.15578 29.8551 10.1449 37.8442 20 37.8442C29.8551 37.8442 37.8442 29.8551 37.8442 20C37.8442 10.1449 29.8551 2.15578 20 2.15578C10.1449 2.15578 2.15578 10.1449 2.15578 20Z" fill="black"/>
                    </svg>
                </div>
            {:else}
                <div class="flex flex-row justify-between bg-white text-black text-2xl font-bold tracking-widest my-1 mb-0">
                    <h2>{currentExercise.time} Minuten</h2>
                </div>
            {/if}
        {/each}
    </div>
</main>