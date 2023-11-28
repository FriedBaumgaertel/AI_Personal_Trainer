<script>
import {cubicInOut} from "svelte/easing";
import {fly} from "svelte/transition";
import {onMount} from "svelte";

let trainingDays;
onMount(() => trainingDays=sessionStorage.getItem("trainingDays"))
</script>

<section class="flex flex-col my-8 px-2 gap-4">
    <h2 class="text-2xl font-bold">Workouts</h2>
    <h3 class="text-4xl font-bold">{trainingDays}<span class="text-sm text-black font-light">/4</span></h3>
</section>