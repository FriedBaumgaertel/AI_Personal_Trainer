import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="w-screen static bg-transparent z-50 top-0"><div></div></header> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
