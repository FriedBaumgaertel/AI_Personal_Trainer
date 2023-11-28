<script>
import PlanHeaderSection from "./Components/PlanHeaderSection.svelte";
import PlanTimelineSection from "./Components/PlanTimelineSection.svelte";
import WorkoutDiv from "../Components/WorkoutDiv.svelte";
</script>

<section class="flex flex-col w-screen h-screen justify-start gap-4 z-50 p-6 px-10">
    <PlanHeaderSection />
    <PlanTimelineSection />
    <WorkoutDiv workoutCalories={570} workoutProgress={36} workoutTime={72} />
</section>