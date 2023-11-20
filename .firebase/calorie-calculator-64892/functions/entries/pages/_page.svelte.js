import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img class="w-screen mb-[-1rem] static" alt="Man Running" src="https://cdn.shopify.com/s/files/1/0753/3828/5388/files/Minato_man_working_out_on_black_background_modern_style_--ar__f0324db6-67a5-4d13-bea6-f81a53a28cc0_0.png?v=1699522545"> <main class="bg-black"><div class="p-4 flex flex-col text-center"><h1 class="text-white text-4xl font-semibold z-20 top-20 left-4 pb-4" data-svelte-h="svelte-orpyza">Persönlicher Trainingsplan</h1> <p class="text-xs font-thin text-gray-600 top-28 left-4 w-full pb-2 mb-16" data-svelte-h="svelte-12sl6do">Erstelle einen personalisierten Trainings- und Ernährungplan in Minuten</p> <a href="start"><button class="self-end bg-white text-xs text-black p-8 py-2 top-44 left-4 w-48 rounded-md " data-svelte-h="svelte-1j08mq4">JETZT LOSLEGEN &gt;</button></a></div></main>`;
});
export {
  Page as default
};
