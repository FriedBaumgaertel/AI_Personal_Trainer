<script lang="ts">
    const today:number = 16;
    const days:Array<number> = [14,15,16,17,18]
    const monthAsString:string = new Date().toLocaleString('de-DE', { month: 'short' });
</script>

<div class="w-full flex flex-row justify-evenly items-center h-8">
    {#each days as day}
        {#if day === today}
            <div class="w-2/6 bg-black px-2 py-2 rounded-full h-full align-middle">
                <p class="text-white text-xs text-center align-middle">Heute, {day}. {monthAsString}</p>
            </div>
        {:else}
            <p class="text-center w-1/6 text-xs">{day}</p>
        {/if}

    {/each}
</div>