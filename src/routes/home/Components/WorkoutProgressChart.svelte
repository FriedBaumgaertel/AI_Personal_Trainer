<script lang="ts">
    import { onMount } from 'svelte';

    export let progress: number; // Your dynamic value for the percentage
    let circumference = 2 * Math.PI * 15.91549430918954;
    let offset = -circumference / 4; // Offset to start at the top
    $: filledStroke = (progress / 100) * circumference;
    $: emptyStroke = circumference - filledStroke;
    $: strokeDasharray = `${filledStroke} ${emptyStroke}`;
</script>

<svg width="120" height="120" viewBox="0 0 42 42" class="donut">
    <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#313131" stroke-width="3"></circle>
    <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#fff" stroke-width="3" stroke-dasharray={strokeDasharray} stroke-dashoffset={offset} stroke-linecap="round"></circle>
    <text x="50%" y="50%"  dominant-baseline="middle" text-anchor="middle" style="font-size:0.45rem; transform: translateY(-0.1em)" fill="#fff">{progress}%</text>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="font-size:0.15rem;font-weight:thin;transform: translateY(1.8em)" fill="#CCC">Fortschritt</text>
</svg>
