import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let age = 25;
  return `<section class="flex justify-center items-center min-h-[50vh] flex-col gap-8"><h1 class="text-4xl text-white font-mont font-bold" data-svelte-h="svelte-1q4navj">Kalorienrechner</h1> <p class="text-white font-mont" data-svelte-h="svelte-t50pc0">Hier kannst du deine Kalorien berechnen</p></section> <section><form class="grid grid-cols-2 text-white"><div><p>${escape(age)}</p> <label for="age" data-svelte-h="svelte-4xw1e3">Alter</label> <input id="age" type="range" min="18" max="100" class="range" step="1"> <div class="w-full flex justify-between text-xs px-2"><span data-svelte-h="svelte-kyhbrn">18</span> <span data-svelte-h="svelte-cricgr">36</span> <span data-svelte-h="svelte-1gwc8yb">54</span> <span data-svelte-h="svelte-18pd9nf">72</span> <span data-svelte-h="svelte-dt345v">90</span></div></div> <div><label for="height" data-svelte-h="svelte-z0wqzq">Größe</label> <input type="number" name="height" id="height" placeholder="Größe in cm" class="bg-transparent border-b-2 border-white"></div></form></section>`;
});
export {
  Page as default
};
