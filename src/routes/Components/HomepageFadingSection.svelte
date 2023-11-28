<script>
    import {onMount} from "svelte";
    import {fade} from "svelte/transition";
    import {cubicInOut, sineInOut} from "svelte/easing";
    let currentVisibleSection = 0;
    function setCurrentVisibleSection() {
        switch (currentVisibleSection) {
            case 0:
                currentVisibleSection = 1;
                break;
            case 1:

                currentVisibleSection = 2;
                break;
            case 2:
                currentVisibleSection = 3;
                break;
            case 3:
                currentVisibleSection = 1;
                break;
        }
    }
    onMount(() =>{
        setCurrentVisibleSection()
        setInterval(() => {
            setCurrentVisibleSection()
        }, 5000)
    })
</script>


<section class="w-screen h-[85vh] relative overflow-hidden">
    {#if currentVisibleSection===1}
        <video src="https://cdn.shopify.com/videos/c/o/v/7e1b326cf2f14650abfaf10704c08fed.mp4" autoplay="true" class="top-0 absolute right-0 z-10 aspect-[9/16] opacity-30"></video>
        <div transition:fade={{duration:1000, easing:sineInOut}} class="z-0 w-screen absolute top-0 bg-black h-[85vh] p-8 flex flex-col justify-start gap-4 overflow-hidden">
            <h2 class="z-10 text-white text-4xl font-bold">Flexibel</h2>
            <p class="z-10 lg:w-1/3 text-white text-xs text-light">Ein Trainingsplan sollte sich an deinen Lifestyle anpassen, nicht andersherum. Integriere deine Sessions in deinen Alltag mit unserem Smart Calendar Feature.</p>
        </div>
    {:else if currentVisibleSection===2}
        <video src="https://cdn.shopify.com/videos/c/o/v/c2d02116db9a43b1a918bd06a850644a.mp4" autoplay="true" class="top-0 absolute right-0 z-10 aspect-[9/16] opacity-30"></video>

        <div transition:fade={{duration:1000, easing:sineInOut}} class="z-0 w-screen absolute top-0 bg-black h-[85vh] p-8 flex flex-col justify-start gap-4">
            <h2 class="z-10 text-white text-4xl font-bold">Individuell</h2>
            <p class="z-10 lg:w-1/3 text-white text-xs text-light">Unsere KI-Technologie berücksichtigt nicht nur deine physischen Daten, sondern auch dein Fitnesslevel, deine Ziele, deine Arbeitsweise u.v.m.</p>
        </div>
    {:else if currentVisibleSection===3}
        <video src="https://cdn.shopify.com/videos/c/o/v/9edfe281ccc24a64a194d9ec7207c299.mp4" autoplay="true" class="top-0 absolute right-0 z-10 aspect-[9/16] opacity-30"></video>

        <div transition:fade={{duration:1000, easing:sineInOut}} class="z-0 w-screen absolute top-0 bg-black h-[85vh] p-8 flex flex-col justify-start gap-4">
            <h2 class="z-10 text-white text-4xl font-bold">Lernbereit</h2>
            <p class="z-10 lg:w-1/3 text-white text-xs text-light">Je mehr du unsere App nutzt, desto mehr lernt unsere KI über dich und dein Vorlieben.</p>
        </div>
    {/if}
</section>