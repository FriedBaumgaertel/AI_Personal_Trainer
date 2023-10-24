import { writable } from 'svelte/store';

export const digits = writable([])
export const step = writable(1);
export const totalCalories = writable(0);
export const activeCalories = writable(0);
export const bmr = writable(0);
export const carbs = writable(0);
export const proteins = writable(0);
export const fats = writable(0);
