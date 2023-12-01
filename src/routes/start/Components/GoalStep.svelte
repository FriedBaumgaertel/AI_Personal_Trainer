<script lang="ts">
    import { fly } from "svelte/transition"
    import { selectedFitnessGoal } from "../../stores"

    let clickedDiv:number = -1;
    function setFitnessGoal(goalNumber:number) {
        selectedFitnessGoal.set(goalNumber);
        clickedDiv=goalNumber;
        console.log(clickedDiv);

    }
    $: opacityOne = clickedDiv===1? 100: 75;
    $: opacityTwo = clickedDiv===2? 100: 75;
    $: opacityThree = clickedDiv===3? 100: 75;
    console.log(clickedDiv);
</script>

<section in:fly={{ duration:1000, y:50 }} class="bg-white flex flex-col h-3/4 p-8 gap-8">
    <h1 class="text-3xl text-black text-center font-extrabold mb-8">Was ist dein Fitnessziel?</h1>
    <div tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}}  role="button" on:click={()=>setFitnessGoal(1)} class="opacity-{opacityOne} w-full h-36  overflow-hidden relative transition-all ease-in-out duration-300 hover:scale-110">
        <img alt="Man Running" class="top-[-4rem] absolute" src="https://cdn.shopify.com/s/files/1/0753/3828/5388/files/Minato_ttractive_man_running_in_nature_--v_5_d22b9730-345c-4263-bfad-9e488b882463.png?v=1700053177 ">
        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
            <h1 class="relative font-medium text-2xl text-white">Fett Abnehmen</h1>
            <p class="font-thin relative text-xs px-12 text-white">Baue durch ein kalorisches Defizit Fett ab und verbessere deine Körperkomposition.</p>
        </div>
    </div>
    <div tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}}  role="button" on:click={()=>setFitnessGoal(2)} class="opacity-{opacityTwo} w-full h-36  overflow-hidden relative transition-all ease-in-out duration-300 hover:scale-110">
        <img alt="Man Running" class="top-[-1rem] absolute" src="https://cdn.shopify.com/s/files/1/0753/3828/5388/files/Minato_man_working_out_on_black_background_modern_style_--ar__f0324db6-67a5-4d13-bea6-f81a53a28cc0_1.png?v=1700054474">
        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
            <h1 class="relative font-medium text-2xl text-white">Muskeln aufbauen</h1>
            <p class="font-thin relative text-xs px-12 text-white">Fokussiere dich auf das Steigern der Muskelmasse und Stärke.</p>
        </div>
    </div>
    <div tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}}  role="button" on:click={()=>setFitnessGoal(3)} class="opacity-{opacityThree} w-full h-36  overflow-hidden relative transition-all ease-in-out duration-300 hover:scale-110">
        <img alt="Man Running" class="top-[-4rem] absolute" src="https://cdn.shopify.com/s/files/1/0753/3828/5388/files/Minato_attractive_man_working_out_action_shot_in_natureultra__4081e5c2-6e49-409e-a4c3-a1199358459b_1.png?v=1700054399">
        <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
            <h1 class="relative font-medium text-2xl text-white">Rekomposition</h1>
            <p class="font-thin relative text-xs px-12 text-white">Baue bei gleichbleibendem Gewicht Muskeln auf und Fett ab.</p>
        </div>
    </div>
</section>