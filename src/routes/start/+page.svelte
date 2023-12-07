<script lang="ts">
    import GoalStep from "./Components/GoalStep.svelte";
    import DataInputStep from "./Components/DataInputStep.svelte";
    import PersonalisationStep from "./Components/PersonalisationStep.svelte";
    import DonePage from "./Components/DonePage.svelte";
    import { currentStep } from "../stores"
    let step: number;
    currentStep.subscribe((value) => {
        step = value;
    })
</script>

{#if step===1}
<GoalStep />
{:else if step===2}
<DataInputStep />
{:else if step===3}
<PersonalisationStep />
{:else if step===4}
<DonePage />
{/if}