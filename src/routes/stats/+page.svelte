<script lang="ts">
    import {onMount} from "svelte";
    import Modal from "./Components/Modal.svelte";

    import {showModal} from "./stores";

    let modalType:string = "age";
    let modalValue:number | string;

    let age:number;
    let weight:number;
    let height:number | null;
    let trainingDays:number;
    let fitnessGoal:string;
    onMount(() => {
        try {
            age = sessionStorage.getItem("age");
            weight = sessionStorage.getItem("weight");
            height = sessionStorage.getItem("height");
            trainingDays = sessionStorage.getItem("trainingDays");
            fitnessGoal = sessionStorage.getItem("fitnessGoal");
        }
        catch (e) {
            console.log(e);
        }
    });
    $: console.log(modalValue)
</script>

<main class="p-8 flex flex-col gap-12 h-screen">
    <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-bold">Meine Daten</h1>
        <p>Klicke auf eine Kachel, um die Daten zu ändern.</p>
    </div>
    <div class="grid grid-cols-2 gap-4 text-black">
        <div tabindex="0" on:keydown={null}  on:keyup={null}  role="button" on:click={()=>{showModal.set(true);modalType="age";modalValue=age}} class="w-full flex pb-4 pt-2 flex-col justify-start items-center border-neutral-400 border-solid border-[1px]">
            <h4 class="text-lg pb-2">Alter</h4>
            <h3 class="text-4xl font-extrabold">{age}</h3>
        </div>
        <div tabindex="0" on:keydown={null}  on:keyup={null}  role="button" on:click={()=>{showModal.set(true);modalType="weight";modalValue=weight}} class="w-full flex pb-4 pt-2 flex-col justify-start items-center border-neutral-400 border-solid border-[1px]">
            <h4 class="text-lg pb-2">Gewicht</h4>
            <div class="flex flex-row">
                <h3 class="text-4xl font-extrabold">{weight}</h3>
                <h5 class="text-xl font-extrabold">kg</h5>
            </div>
        </div>
        <div tabindex="0" on:keydown={null}  on:keyup={null}  role="button" on:click={()=>{showModal.set(true);modalType="height";modalValue=height}} class="w-full flex pb-4 pt-2 flex-col justify-start items-center border-neutral-400 border-solid border-[1px]">
            <h4 class="text-lg pb-6">Größe</h4>
            <div class="flex flex-row">
                <h3 class="text-4xl font-extrabold">{height}</h3>
                <h5 class="text-xl font-extrabold">cm</h5>
            </div>
        </div>
        <div tabindex="0" on:keydown={null}  on:keyup={null}  role="button" on:click={()=>{showModal.set(true);modalType="days";modalValue=trainingDays}} class="w-full flex pb-4 pt-2 flex-col justify-start items-center border-neutral-400 border-solid border-[1px]">
            <h4 class="text-lg text-center">Trainings-<br>tage</h4>
            <h3 class="text-4xl font-extrabold">{trainingDays}</h3>
        </div>
        <div tabindex="0" on:keydown={null}  on:keyup={null}  role="button" on:click={()=>{showModal.set(true);modalType="goal";modalValue=fitnessGoal}} class="w-full col-span-2 border-neutral-400 border-solid border-[1px] h-20 flex flex-col justify-start items-center">
            <h4 class="text-lg">Trainingsziel</h4>
            <h3 class="text-3xl font-extrabold">{fitnessGoal}</h3>
        </div>
    </div>
    <button on:click={null} class="mt-auto bg-action h-14 text-white w-full font-bold text-lg">Speichern</button>
</main>
<Modal {modalType} {modalValue}/>