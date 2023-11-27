<script>
    import "../app.css";

</script>

<header class="w-screen static bg-transparent z-50 top-0">
    <div></div>
</header>

<slot></slot>


<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="#" class="flex items-center">
                    <img src="//grand-nutrition.net/cdn/shop/files/Design_ohne_Titel_83.png?v=1696332458&width=96" class="h-8 me-3" alt="FlowBite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Grand Nutrition</span>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
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
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Folge uns</h2>
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
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Weitere Links</h2>
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

