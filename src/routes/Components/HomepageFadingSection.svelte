<script>
    import {onMount} from "svelte";
    import {fade} from "svelte/transition";
    import {cubicInOut, sineInOut} from "svelte/easing";


</script>


<section class="w-screen h-[85vh] relative overflow-hidden gap-6 flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2">
        <div transition:fade={{duration:1000, easing:sineInOut}} class="w-5/6 bg-black h-full p-8 flex flex-col justify-start gap-4 overflow-hidden lg:col-span-2 lg:w-full lg:h-full">
            <h2 class="text-white text-4xl  font-bold lg:text-5xl">Flexibel</h2>
            <p class="text-white text-xs text-light lg:w-1/3">Ein Trainingsplan sollte sich an deinen Lifestyle anpassen, nicht andersherum. Integriere deine Sessions in deinen Alltag mit unserem Smart Calendar Feature.</p>
        </div>
        <div transition:fade={{duration:1000, easing:sineInOut}} class="relative w-5/6 bg-black h-full p-8 flex flex-col justify-start gap-4 overflow-hidden lg:col-span-1 lg:w-full lg:h-full self-end lg:overflow-visible">
            <h2 class="text-white text-4xl  font-bold lg:text-5xl">Individuell</h2>
            <p class="text-white text-xs text-light lg:w-3/4">Ein Trainingsplan sollte sich an deinen Lifestyle anpassen, nicht andersherum. Integriere deine Sessions in deinen Alltag mit unserem Smart Calendar Feature.</p>
            <div class="invisible absolute bottom-[-50px] h-16 lg:visible bg-black w-full left-0"></div>
        </div>
        <div transition:fade={{duration:1000, easing:sineInOut}} class=" w-5/6 bg-black h-full p-8 flex flex-col justify-start gap-4 overflow-hidden lg:col-span-1 lg:w-full lg:h-full">
            <h2 class="text-white text-4xl  font-bold lg:text-5xl">Lernbereit</h2>
            <p class="text-white text-xs text-light lg:w-3/4">Ein Trainingsplan sollte sich an deinen Lifestyle anpassen, nicht andersherum. Integriere deine Sessions in deinen Alltag mit unserem Smart Calendar Feature.</p>
        </div>
    <div class="invisible h-0 lg:visible col-span-2 bg-black lg:h-full w-full">

    </div>
</section>