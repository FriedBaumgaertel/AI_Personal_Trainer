
<script>
    import FirstStep from './Components/firstStep.svelte';
    import GoalSection from './Components/goalSection.svelte';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { step } from './stores';
    import { onMount } from 'svelte';
    import { readable } from 'svelte/store';
    let ready;
    onMount(() => {
        step.set(1);
        ready = true;
    });
    let currentStep;
    step.subscribe((value) => {
		currentStep = value;
	});
</script>

<section class="flex justify-center items-center min-h-[20vh] flex-col gap-4 p-6 mb-10">
    <h1 class="text-4xl text-white font-mont font-bold">GrandMaster</h1>
    <p class="text-center text-sm text-gray-200">Benutze die Kraft von Künstlicher Intelligenz und erstelle einen einzigartigen, personalisierten Trainings- und Ernährungsplan.</p>
</section>
{#if currentStep === 1}
<FirstStep />
{:else if currentStep === 2}
<GoalSection />
{/if}