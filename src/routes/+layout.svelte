<script>
    import "../app.css";
</script>

<!--Sticky header with burger menu, img-->
<nav class="fixed top-0 h-24 w-screen flex flex-row items-center justify-between px-4">
    <div class="flex flex-col gap-2 float-left">
        <div class="bg-white w-10 h-[2px] rounded-2xl"></div>
        <div class="bg-white w-10 h-[2px] rounded-2xl"></div>
        <div class="bg-white w-10 h-[2px] rounded-2xl"></div>
    </div>
    <img src="https://cdn.shopify.com/s/files/1/0753/3828/5388/files/Logowhite.svg?v=1698160621" class="h-full" alt="Grand Nutrition Logo"/>
    <div class="w-10">

    </div>
</nav>
<slot>
</slot>