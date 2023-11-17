import { writable } from 'svelte/store';

export const currentStep = writable(1);

export const selectedFitnessGoal = writable(0);
export const userAge = writable(0);
export const userHeight = writable(0);
export const userWeight = writable(0);
export const userTrainingDays = writable(0)