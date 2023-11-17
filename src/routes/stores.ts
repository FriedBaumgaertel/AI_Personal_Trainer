import { writable} from 'svelte/store';
import type {Writable} from 'svelte/store';
export const currentStep: Writable<number> = writable(1);

export const selectedFitnessGoal: Writable<number> = writable(0);
export const userAge: Writable<number> = writable(0);
export const userHeight: Writable<number> = writable(0);
export const userWeight: Writable<number> = writable(0);
export const userTrainingDays: Writable<number> = writable(0)