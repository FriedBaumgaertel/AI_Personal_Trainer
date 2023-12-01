<script lang="ts">
    import {fly} from "svelte/transition";
    import { userWeight, userAge, userHeight } from "../../stores";

    let age:number;
    let height:number;
    let weight:number;

    $: userAge.set(age);
    $: userHeight.set(height);
    $: userWeight.set(weight);
</script>
<section in:fly={{ duration:1000, y:50 }} class="bg-white flex flex-col justify-center h-3/4 p-8">
    <h1 class="text-3xl text-black text-center font-extrabold">Deine Daten</h1>
    <p class="text-center mb-12 mt-2">Wir berechnen deinen Kalorienumsatz anhand deiner physischen Daten.</p>
    <div class="flex flex-col w-full items-center">
        <div class="flex flex-col items-center justify-center w-full mb-4">
            <h2 class="text-2xl text-medium">Alter</h2>
            <p class="text-sm text-black mb-8 font-thin">In Jahren</p>
            <input bind:value={age} type="number" class="  w-full border-2  h-12 outline-none text-center border-solid border-gray-400"/>
        </div>
        <div class="flex flex-col items-center justify-center w-full mb-4">
            <h2 class="text-2xl text-medium">Körpergröße</h2>
            <p class="text-sm text-black mb-8 font-thin">In cm</p>
            <input bind:value={height} type="number" class="  w-full border-2  h-12 outline-none text-center border-solid border-gray-400"/>
        </div>
        <div class="flex flex-col items-center justify-center w-full mb-4">
            <h2 class="text-2xl text-medium">Körpergewicht</h2>
            <p class="text-sm text-black mb-8 font-thin">In kg</p>
            <input bind:value={weight} type="number" class="  w-full border-2  h-12 outline-none text-center border-solid border-gray-400"/>
        </div>
    </div>
</section>

