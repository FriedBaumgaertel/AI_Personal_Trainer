import { writable } from "svelte/store";

export const showModal = writable(false);

export const updatedAge = writable(0);
export const updatedWeight = writable(0);
export const updatedHeight = writable(0);
export const updatedFitnessGoal = writable("");
export const updatedFitnessDays = writable(0);