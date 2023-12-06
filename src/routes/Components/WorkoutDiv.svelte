<script lang="ts">
import WorkoutProgressChart from "../home/Components/WorkoutProgressChart.svelte";
export let workoutProgress:number;
export let workoutCalories:number;
export let workoutTime:number;
export let workoutViewOpened:boolean;
export let workoutType:string;

$: workoutIntensity = workoutTime > 60 ? "Hoch" : "Niedrig";
$: intensityColor = workoutIntensity === "Hoch" ? "text-red-600" : "text-green-600";


</script>

<div tabindex="0" on:keydown={()=>{}} on:keyup={()=>{}} role="button" on:click={()=>workoutViewOpened=true} class="w-full h-44 bg-black active:scale-95 transition-all ease-in-out duration-300 p-4 py-0 justify-center items-center shadow-lg shadow-gray-200">
    <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col justify-evenly">
            <h3 class="text-white basis-1/3 font-light">Heute</h3>
            <h2 class="text-white text-2xl font-bold basis-2/3">{workoutType}</h2>
        </div>
        <WorkoutProgressChart progress={workoutProgress} />
    </div>
    <div class="flex flex-row w-full justify-between place-self-center">
        <div class="flex flex-col">
            <h4 class="text-white text-xs">{workoutCalories}kCal</h4>
            <p class="text-xs text-white font-thin">Verbrannt</p>
        </div>
        <div class="flex flex-col">
            <h4 class="text-white text-xs">{workoutTime} min.</h4>
            <p class="text-xs text-white font-thin">Dauer</p>
        </div>
        <div class="flex flex-col">
            <h4 class="{intensityColor} text-xs">Hoch</h4>
            <p class="text-xs text-white font-thin">Intensität</p>
        </div>
    </div>
</div>