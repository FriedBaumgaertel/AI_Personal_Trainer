<script lang="ts">
    import {showModal} from "../stores";
    import {fly} from "svelte/transition";

    export let modalType: string;
    export let modalValue: number | string;

    let modalVisible: boolean = false;
    showModal.subscribe(value => modalVisible = value);

    function closeModal() {
        showModal.set(false);
    }

    let modalHeadline:string;
    let modalSubtext:string;

    $: switch (modalType) {
        case "age":
            modalHeadline = "Alter ändern";
            modalSubtext = "Bitte geben Sie Ihr neues Alter ein.";
            break;
        case "weight":
            modalHeadline = "Gewicht ändern";
            modalSubtext = "Bitte geben Sie Ihr neues Gewicht ein.";
            break;
        case "height":
            modalHeadline = "Größe ändern";
            modalSubtext = "Bitte geben Sie Ihre neue Größe ein.";
            break;
        case "days":
            modalHeadline = "Trainingstage ändern";
            modalSubtext = "Bitte geben Sie Ihre neuen Trainingstage ein.";
            break;
        case "goal":
            modalHeadline = "Trainingsziel ändern";
            modalSubtext = "Bitte geben Sie Ihr neues Trainingsziel ein.";
            break;
    }

</script>

{#if modalVisible}
    <div in:fly={{ duration:500, y:100 }} class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-screen p-8" style="z-index: 1000;">
        <!-- Modal Content -->
        <div class="relative flex flex-col top-[25vh] w-full h-[40vh] p-5 border shadow-lg bg-white">
            <div tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}}  role="button" class="cursor-pointer z-50 self-end" on:click={()=>{closeModal()}}>
                <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path d="M11.245 9l6.364-6.364-2.121-2.121L9 6.755 2.636.391 0.515 2.512 6.879 8.876l-6.364 6.364 2.121 2.121L9 11.245l6.364 6.364 2.121-2.121L11.245 9z"/>
                </svg>
            </div>

            <h3 class="text-2xl font-bold text-center text-black">{modalHeadline}</h3>
            <p class="font-light text-center">{modalSubtext}</p>
            <!-- Modal Footer -->
            <div class="flex flex-row mt-16 my-auto">
                <button on:click={()=>modalValue--} class="bg-black w-1/4 text-white text-4xl">-</button>
                <input class="w-2/4 font-bold text-6xl text-center" type="number" bind:value={modalValue}>
                <button on:click={()=>modalValue++} class="bg-black w-1/4 text-white text-4xl">+</button>
            </div>
            <button on:click={()=>{sessionStorage.setItem(modalType.toString(), modalValue);closeModal()}} class="mt-auto bg-action h-14 text-white w-full font-bold text-lg">Fertig</button>
        </div>
    </div>
{/if}
