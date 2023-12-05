<script>
    let visible = false;
    import { fly } from 'svelte/transition';
</script>
{#if visible}
    <aside transition:fly={{ duration:200, x:-200 }} class="absolute top-0 left-0 bg-white w-3/4 h-screen p-8 shadow-lg shadow-black z-30">
        <div class="flex flex-row w-full justify-between">
            <svg tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}}  role="button" on:click={()=>visible=false} class="" width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8.5 8.5M16 16L8.5 8.5M8.5 8.5L16 1L1 16" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </div>
        <nav class="flex flex-col text-4xl gap-8 mt-24">
            <a href="home">
                Home
            </a>
            <a href="plan">
                Plan
            </a>
            <a href="stats">
                Meine Daten
            </a>
        </nav>
    </aside>
{/if}
<nav class="flex flex-row justify-between w-screen h-24 p-4 pt-8 items-center pl-8">
    <div tabindex="0" on:keydown={()=>{}}  on:keyup={()=>{}}  role="button" on:click={()=>visible=true} class="flex flex-col gap-2">
        <div class="bg-black h-1 w-12"></div>
        <div class="bg-black h-1 w-12"></div>
        <div class="bg-black h-1 w-12"></div>
    </div>
    <div class="flex h-12">
        <button  class="bg-action text-white p-2">Kalender verbinden</button>
    </div>
</nav>
<slot></slot>
