import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <nav class="fixed top-0 h-24 w-screen flex flex-row items-center justify-between px-4 bg-black z-30"><div class="flex flex-col gap-2 float-left"><div class="bg-white w-10 h-[2px] rounded-2xl"></div> <div class="bg-white w-10 h-[2px] rounded-2xl"></div> <div class="bg-white w-10 h-[2px] rounded-2xl"></div></div> <button class="h-full"><img src="https://cdn.shopify.com/s/files/1/0753/3828/5388/files/Logowhite.svg?v=1698160621" class="h-full" alt="Grand Nutrition Logo"></button> <div class="w-10" data-svelte-h="svelte-9rs9mi"></div></nav> ${slots.default ? slots.default({}) : ` `}`;
});
export {
  Layout as default
};
