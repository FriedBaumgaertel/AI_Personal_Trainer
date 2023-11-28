<script lang="ts">
    import SingleExerciseView from "./SingleExerciseView.svelte";

    export let exerciseArray: Array<Object>;
    export let totalCalories: number;
    export let totalTime: number;

    let singleExerciseViewOpened = false;
</script>
{#if !singleExerciseViewOpened}
<img src="https://cdn.shopify.com/s/files/1/0753/3828/5388/files/Minato_attractive_man_working_out_action_shot_in_natureultra__4081e5c2-6e49-409e-a4c3-a1199358459b_1.png?v=1700054399" class="w-full fixed top-0 left-0 z-0" alt="man doing pushups">
<section class="bg-white h-[800px] rounded-3xl z-30 relative mt-72 flex flex-col p-8 gap-12">
    <div class="flex flex-row justify-between">
        <div class="flex flex-col justify-between bg-white w-40 h-28 rounded-2xl p-6 text-black shadow-sm shadow-neutral-300">
            <div class="flex flex-row justify-between">
            <h3 class="font-bold">Kalorien</h3>
                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.71429 0C8.57143 5.71429 0 8.57143 0 14.2857C0 20 5.71429 22.8571 5.71429 22.8571C2.91429 17.2 11.4286 14.2857 11.4286 8.57143C11.4286 2.85714 5.71429 0 5.71429 0ZM14.2857 8.57143C17.1429 14.2857 8.57143 17.1429 8.57143 22.8571H17.1429C18.2857 22.8571 20 21.4286 20 17.1429C20 11.4286 14.2857 8.57143 14.2857 8.57143Z" fill="black"/>
                </svg>

            </div>
            <div class="flex flex-row justify-between items-center">
                <h2 class="font-bold text-2xl">{totalCalories}</h2>
                <h4 class="font-light text-2xl">kCal</h4>
            </div>
        </div>
        <div class="flex flex-col justify-between bg-white w-40 h-28 rounded-2xl p-6 text-black shadow-sm shadow-neutral-300">
            <div class="flex flex-row justify-between">
                <h3 class="font-bold">Zeit</h3>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 0C4.725 0 0 4.725 0 10.5C0 16.275 4.725 21 10.5 21C16.275 21 21 16.275 21 10.5C21 4.725 16.275 0 10.5 0ZM10.5 2.625C14.8575 2.625 18.375 6.1425 18.375 10.5C18.375 14.8575 14.8575 18.375 10.5 18.375C6.1425 18.375 2.625 14.8575 2.625 10.5C2.625 6.1425 6.1425 2.625 10.5 2.625ZM9.1875 5.25V11.0775L9.6075 11.4187L10.92 12.7312L11.8125 13.7288L13.7025 11.8388L12.705 10.9462L11.8125 10.0538V5.3025H9.1875V5.25Z" fill="black"/>
                </svg>
            </div>
                <div class="flex flex-row justify-between items-center">
                    <h2 class="font-bold text-2xl">{totalTime}</h2>
                    <h4 class="font-light text-2xl">min.</h4>
                </div>
            </div>
    </div>
<div class="flex flex-col gap-4 justify-center items-center">
    {#each exerciseArray as exercise}
        {#if exerciseArray.indexOf(exercise) < 3}
        <div class="flex flex-row border-neutral-300 border-solid border-[0.1px] {exerciseArray.indexOf(exercise) === 0 ? 'shadow-md' : 'shadow-sm'} shadow-neutral-200 {exerciseArray.indexOf(exercise) === 0 ? 'w-full' : 'w-[85%]'} {exerciseArray.indexOf(exercise) === 0 ? 'opcaity-100' : 'opacity-75'} bg-white rounded-3xl p-4 text-black">
            <div class="h-full aspect-square rounded-3xl bg-white"></div>
            <div class="flex flex-col justify-evenly gap-8 px-4">
                <h3 class="font-bold {exerciseArray.indexOf(exercise) === 0 ? 'text-2xl' : 'text-xl'}">{exercise.name}</h3>
                <h4 class="text-gray-500">{exercise.reps} Reps • {exercise.sets} Sets</h4>
            </div>
        </div>
        {/if}
    {/each}
</div>
</section>

<button class="active:scale-95 transition-all duration-100 fixed bottom-4 flex justify-center items-center left-4 rounded-2xl bg-white border-solid border-neutral-400 border-[1px] text-white z-50 p-6">
    <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0V26.8826H10.6667V0H0ZM21.3333 0V26.8826H32V0H21.3333Z" fill="black"/>
    </svg>
</button>

<button on:click={()=>singleExerciseViewOpened=true} class="active:scale-95 transition-all duration-100 flex flex-row items-center text-2xl font-bold p-6 justify-between fixed bottom-4 right-4 w-[50%] rounded-2xl bg-black text-white z-50">
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0V26.1871L26.1871 13.0935L0 0Z" fill="white"/>
    </svg>
    Starten
</button>
<div class="fixed bottom-0 h-36 bg-gradient-to-t from-white to-transparent w-screen z-40">
</div>
{:else}
    <SingleExerciseView />
{/if}