import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "chart.js/auto";
const digits = writable([]);
const step = writable(1);
const totalCalories = writable(0);
const activeCalories = writable(0);
const bmr = writable(0);
const carbs = writable(0);
const proteins = writable(0);
const fats = writable(0);
const FirstStep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  totalCalories.subscribe((value) => {
  });
  activeCalories.subscribe((value) => {
  });
  bmr.subscribe((value) => {
  });
  return `${``}`;
});
const GoalSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentCarbs;
  let currentFats;
  let currentProteins;
  digits.subscribe((value) => {
  });
  carbs.subscribe((value) => {
    currentCarbs = value;
  });
  fats.subscribe((value) => {
    currentFats = value;
  });
  proteins.subscribe((value) => {
    currentProteins = value;
  });
  let donutChart;
  return `<div class="flex flex-row w-full p-6 gap-2 items-center">${``} ${``} ${``}</div>  ${currentCarbs !== 0 ? `<div class="flex flex-row justify-between items-center p-4 gap-4 mt-4"><canvas class="basis-1/3 w-1/3" id="donutChart"${add_attribute("this", donutChart, 0)}></canvas> <div class="flex flex-row basis-2/3 text-left text-white gap-4 justify-between"><div class="flex flex-col basis-2/3 text-left text-white gap-4 justify-between"><p class="border-b-2" data-svelte-h="svelte-7ag1nn">Kohlenhydrate</p> <p class="border-b-2" data-svelte-h="svelte-3vg2bn">Fette</p> <p class="border-b-2" data-svelte-h="svelte-1ahkwp9">Eiweiß</p></div> <div class="flex flex-col basis-2/3 text-white gap-4 justify-between text-right"><p>${escape(currentCarbs)}g</p> <p>${escape(currentFats)}g</p> <p>${escape(currentProteins)}g</p></div></div></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentStep;
  step.subscribe((value) => {
    currentStep = value;
  });
  return `<section class="flex justify-center items-center min-h-[20vh] flex-col gap-8 p-6"><h1 class="text-4xl text-white font-mont font-bold" data-svelte-h="svelte-1q4navj">Kalorienrechner</h1> <p class="text-white text-center" data-svelte-h="svelte-i92vus">Berechne deinen Verbrauch.</p></section> ${currentStep === 1 ? `${validate_component(FirstStep, "FirstStep").$$render($$result, {}, {}, {})}` : `${currentStep === 2 ? `${validate_component(GoalSection, "GoalSection").$$render($$result, {}, {}, {})}` : ``}`}`;
});
export {
  Page as default
};
