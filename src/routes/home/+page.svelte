<script lang="ts">
    import WorkoutProgressChart from "./Components/WorkoutProgressChart.svelte";
    import {onMount} from "svelte";
    onMount(() => {
        console.log(sessionStorage.getItem("sessionID"));
    })
    const currentPersonsWorkout = fetch("")

    let date = new Date();
    let weekday = () => {
        switch (date.getDay()){
            case 0:
                return "Sonntag"
            case 1:
                return "Montag"
            case 2:
                return "Dienstag"
            case 3:
                return "Mittwoch"
            case 4:
                return "Donnerstag"
            case 5:
                return "Freitag"
            case 6:
                return "Samstag"
            default:
                return "Error"
        }
    }
    let day = date.getDate()
    let month = date.getMonth() + 1
    let currentDateText: string = `${weekday()}, ${day}.${month}`
</script>

<main class="p-8">
    <div class="flex flex-col mb-8">
        <p class="text-md text-gray-400">{currentDateText}</p>
        <h1 class="text-4xl font-bold mb-4">Guten Tag, Neuer Nutzer</h1>
        <p class="text-sm text-black font-thin">Sieht so aus, als stünde heute eine neue Einheit an. Gib alles!</p>
    </div>
    <div class="w-full h-48 bg-black rounded-3xl p-4 pt-2 justify-between shadow-lg shadow-gray-200">
        <div class="flex flex-row justify-between items-center">
            <div class="flex flex-col">
                <h3 class="text-white">Krafttraining</h3>
                <h2 class="text-white">Heute</h2>
            </div>
            <WorkoutProgressChart />
        </div>
        <div class="flex flex-row w-full justify-between">
            <div class="flex flex-col">
                <h4 class="text-white text-sm">450kCal</h4>
                <p class="text-xs text-gray-400 font-thin">Verbrannt</p>
            </div>
            <div class="flex flex-col">
                <h4 class="text-white text-sm">60min.</h4>
                <p class="text-xs text-gray-400 font-thin">Dauer</p>
            </div>
            <div class="flex flex-col">
                <h4 class="text-white text-sm">Hoch</h4>
                <p class="text-xs text-gray-400 font-thin">Intensität</p>
            </div>
        </div>
    </div>

</main>