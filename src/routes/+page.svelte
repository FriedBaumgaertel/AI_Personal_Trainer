<script>
    import { fly } from "svelte/transition"
    import {onMount} from "svelte";
    import HomepageFadingSection from "./Components/HomepageFadingSection.svelte";
    import HomepageStepsSection from "./Components/HomepageStepsSection.svelte";


    let innerHeight;
    let y;
    $: explainingSectionVisible = y > innerHeight + 100
    $: stepsSectionVisible = y > innerHeight + 300
    $: buttonSectionVisible = y > innerHeight + 500

    let menuVisible = false;
</script>
<main class="">
    <section class="flex flex-col gap-6 h-[95vh] justify-center p-12 text-center items-center lg:px-[33vw]">
        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="96" height="96" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_193_2" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_193_2" width="96" height="96" xlink:href="data:image/png;base64,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"/>
            </defs>
        </svg>
        <h1 class="text-black text-4xl font-bold lg:text-5xl"> Persönlicher Trainings- und Ernährungsplan</h1>
        <p class="text-black text-xs font-light lg:text-2xl">Erschaffe neue Routinen, die perfekt auf dich abgestimmt sind. Kreiere Workouts, Logge deine Erfolge und erreiche deine Ziele.</p>
        <div class="flex flex-row items-center justify-evenly w-full">
            <a href="#" class="bg-white px-0 py-0 w-[30%] text-xs h-12 align-middle flex items-center">Mehr erfahren</a>
            <a href="start" class="bg-action text-white px-0 py-4 w-[40%] text-xs h-12 align-middle font-bold">Jetzt Starten</a>
        </div>
    </section>
    <HomepageFadingSection />
    <div class="h-fit min-h-[120vh] bg-white">
    {#if explainingSectionVisible}
        <section in:fly={{duration:500, y:50}} class="flex flex-col items-center justify-center h-[40vh] w-screen text-center p-8 gap-6">
            <h2 class="text-4xl font-bold text-black">So funktioniert's</h2>
            <p class="text-black text-xs font-light">Ein Trainingsplan sollte sich an deinen Lifestyle anpassen, nicht andersherum. Integriere deine Sessions in deinen Alltag mit unserem Smart Calendar Feature.</p>
        </section>
        {#if stepsSectionVisible}
            <div in:fly={{duration:1000, y:50}}>
                <HomepageStepsSection />
            </div>
        {/if}
        {#if buttonSectionVisible}
            <section in:fly={{duration:1500, y:50}} class="flex flex-col items-center justify-center h-[70vh] w-screen text-center p-8 gap-6">
                <h2 class="text-4xl font-bold text-black">Bereit?</h2>
                <a href="start" class="bg-action text-white w-[242px] h-[66px] text-2xl py-4 font-bold">Jetzt Loslegen</a>
            </section>
        {/if}
    {/if}
    </div>
</main>

<svelte:window bind:scrollY={y} bind:innerHeight />