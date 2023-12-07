<script>
    import "../app.css";
    import {onMount} from "svelte";
    import {page} from "$app/stores";
    let userID;
    let url;
    onMount(() => {
        try {
            userID = localStorage.getItem('userID');
        }  catch (e) {
            null;
        }
        page.subscribe((value) => {
            url = value.data.pathname;
        })
    });
</script>

<header class="w-screen static bg-transparent z-50 top-0">
    <div></div>
</header>

{#if (url === "/" || url === "/start") && (!userID) }
<slot></slot>
{:else if (url !== "/" || url !== "/start") && (userID)}
    <slot></slot>
{:else}
    <main class="h-screen bg-white w-screen flex flex-col gap-6 items-center justify-center px-12">
        <h1 class="text-center text-2xl">
            Es sieht so aus, als hättest du noch keinen Plan erstellt.
        </h1>
        <a class="w-full flex items-center justify-center" href="start">
            <button class="w-3/4 h-12 bg-action text-white font-bold text-lg">Jetzt loslegen</button>
        </a>
    </main>
{/if}

<footer class="bg-black dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="#" class="flex items-center">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Grand Nutrition</span>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="https://grand-nutrition.net/" class="hover:underline">Homepage</a>
                        </li>
                        <li>
                            <a href="https://grand-nutrition.net/collections/all" class="hover:underline">Shop</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Folge uns</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="https://instagram.com/grandnutritionde" class="hover:underline ">Instagram</a>
                        </li>
                        <li>
                            <a href="https://facebook.com/grandnutritionde" class="hover:underline">Facebook</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Weitere Links</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="https://grand-nutrition.net/pages/uber-uns" class="hover:underline">Über Uns</a>
                        </li>
                        <li>
                            <a href="https://grand-nutrition.net/policies/privacy-policy" class="hover:underline">Datenschutzerklärung</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

