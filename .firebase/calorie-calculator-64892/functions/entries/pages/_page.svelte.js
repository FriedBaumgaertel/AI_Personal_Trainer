import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import "chart.js/auto";
const digits = writable([]);
const step = writable(2);
const totalCalories = writable(0);
const activeCalories = writable(0);
const bmr = writable(0);
const carbs = writable(0);
const proteins = writable(0);
const fats = writable(0);
const FirstStep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  totalCalories.subscribe((value) => {
  });
  bmr.subscribe((value) => {
  });
  setTimeout(
    () => {
    },
    1e3
  );
  return `${``} ${``}`;
});
const GoalSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentCarbs;
  let currentFats;
  let currentProteins;
  let currentTotalCalories;
  totalCalories.subscribe((value) => {
    currentTotalCalories = value;
  });
  activeCalories.subscribe((value) => {
  });
  bmr.subscribe((value) => {
  });
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
  let donutChartCanvas;
  let barChartCanvas;
  return `<div><h3 class="text-left text-lg p-4 pb-0 mt-16 text-gray-400 self-center " data-svelte-h="svelte-13s8ju8">Dein Tagesbedarf:</h3> <div class="w-screen p-4 pb-0 pt-0 flex flex-row"><h2 class="text-8xl text-extrabold text-white">${escape(currentTotalCalories)}</h2> <p class="text-white text-xs mt-2" data-svelte-h="svelte-1pntp0m">kCal</p></div> <div class="w-screen p-4"><canvas class="" id="barChart"${add_attribute("this", barChartCanvas, 0)}></canvas></div></div> <div class="mt-8 h-6">${``}</div> <div class="flex flex-row w-full p-6 gap-2 items-center">${``} ${``} ${``}</div> ${`${`${``}`}`} ${currentCarbs !== 0 ? `<div class="flex flex-row justify-between items-center p-4 gap-4 mt-4"><canvas class="basis-1/3 w-1/3" id="donutChart"${add_attribute("this", donutChartCanvas, 0)}></canvas> <div class="flex flex-row basis-2/3 text-left text-white gap-4 justify-between"><div class="flex flex-col basis-2/3 text-left text-white gap-4 justify-between"><p class="border-b-2" data-svelte-h="svelte-7ag1nn">Kohlenhydrate</p> <p class="border-b-2" data-svelte-h="svelte-3vg2bn">Fette</p> <p class="border-b-2" data-svelte-h="svelte-1ahkwp9">Eiweiß</p></div> <div class="flex flex-col basis-2/3 text-white gap-4 justify-between text-left"><p>${escape(currentCarbs)}g</p> <p>${escape(currentFats)}g</p> <p>${escape(currentProteins)}g</p></div></div></div> <div class="w-full p-4 flex flex-row overflow-visible mb-8"><button class="transition-shadow ease-in duration-100 w-full border-b-4 border-gray-400 active:mt-1 active:border-none bg-white rounded-md p-4 flex flex-row justify-center font-medium text-lg items-center gap-4">Weiter <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" zoomAndPan="magnify" viewBox="0 0 150 149.999998" height="12" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#000000" d="M 51.332031 0 L 126.296875 75.09375 L 51.332031 150.179688 L 23.230469 122.023438 L 70.078125 75.09375 L 23.230469 28.15625 Z M 51.332031 0 " fill-opacity="1" fill-rule="nonzero"></path></svg></button></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentStep;
  step.subscribe((value) => {
    currentStep = value;
  });
  return `<section class="flex justify-center items-center min-h-[20vh] flex-col gap-4 p-6 mb-10"><h1 class="text-4xl text-white font-mont font-bold" data-svelte-h="svelte-1q4navj">Kalorienrechner</h1> <p class="text-center text-sm text-gray-200" data-svelte-h="svelte-7vsgwx">Berechne deinen Kalorienverbrauch präzise.</p></section> ${validate_component(FirstStep, "FirstStep").$$render($$result, {}, {}, {})} ${currentStep === 2 ? `${validate_component(GoalSection, "GoalSection").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Page as default
};
