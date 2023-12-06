<script lang="ts">
    export let currentlySelectedDay;
    $: currentlySelectedDayAsString = currentlySelectedDay
        ? currentlySelectedDay.toLocaleDateString("de-de", {
            weekday: "short",
            day: "numeric",
            month: "numeric"
        })
        : '';

    function getAdjustedDate(offset) {
        let adjustedDate = new Date(currentlySelectedDay);
        adjustedDate.setDate(adjustedDate.getDate() + offset);
        return adjustedDate;
    }

    let days = [
            { offset: -2, day: getAdjustedDate(-2) },
            { offset: -1, day: getAdjustedDate(-1) },
            { offset: 0, day: getAdjustedDate(0) },
            { offset: 1, day: getAdjustedDate(1) },
            { offset: 2, day: getAdjustedDate(2) }
        ]
    function updateDays() {
        days = [
            { offset: -2, day: getAdjustedDate(-2) },
            { offset: -1, day: getAdjustedDate(-1) },
            { offset: 0, day: getAdjustedDate(0) },
            { offset: 1, day: getAdjustedDate(1) },
            { offset: 2, day: getAdjustedDate(2) }
        ]
    }
    function updateCurrentlySelectedDay(offset:number) {
        let newDate = new Date(currentlySelectedDay);
        newDate.setDate(newDate.getDate() + offset);
        currentlySelectedDay = newDate;
        updateDays()
    }
</script>


<div class="w-full flex flex-row justify-evenly items-center h-8">
    {#each days as day}
        {#if day.day.getDate() === currentlySelectedDay.getDate()}
            <div class="w-2/6 bg-black px-2 py-2 rounded-full h-full align-middle">
                <p class="text-white text-xs text-center align-middle">{currentlySelectedDayAsString}</p>
            </div>
        {:else}
            <p on:click={()=>updateCurrentlySelectedDay(day.offset)} class="text-center w-1/6 text-xs">{day.day.getDate()}</p>
        {/if}
    {/each}
</div>