<script lang="ts">
import {workoutViewOpenedStore} from "../home/stores";
import WorkoutProgressChart from "../home/Components/WorkoutProgressChart.svelte";
export let workoutProgress:number;
export let workoutCalories:number;
export let workoutTime:number;
$: workoutIntensity = workoutTime > 60 ? "Hoch" : "Niedrig";
$: intensityColor = workoutIntensity === "Hoch" ? "text-red-600" : "text-green-600";

let workoutViewOpened:boolean = true;
workoutViewOpenedStore.subscribe((value) => {
    workoutViewOpened = value;
});

</script>

<div tabindex="0" on:keydown={()=>{}} on:keyup={()=>{}} role="button" on:click={()=>workoutViewOpenedStore.set(true)} class="w-full h-48 bg-black rounded-3xl active:scale-95 transition-all ease-in-out duration-300 p-4 pt-2 justify-center items-center shadow-lg shadow-gray-200">
    <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col">
            <h2 class="text-white text-3xl basis-2/3">Heute</h2>
            <h3 class="text-gray-500 basis-1/3">Krafttraining</h3>
        </div>
        <WorkoutProgressChart progress={workoutProgress} />
    </div>
    <div class="flex flex-row w-full justify-between place-self-center">
        <div class="flex flex-col">
            <h4 class="text-white text-sm">{workoutCalories}kCal</h4>
            <p class="text-xs text-gray-400 font-thin">Verbrannt</p>
        </div>
        <div class="flex flex-col">
            <h4 class="text-white text-sm">{workoutTime} min.</h4>
            <p class="text-xs text-gray-400 font-thin">Dauer</p>
        </div>
        <div class="flex flex-col">
            <h4 class="{intensityColor} text-sm">Hoch</h4>
            <p class="text-xs text-gray-400 font-thin">Intensität</p>
        </div>
    </div>
</div>