

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c570dfff.js","_app/immutable/chunks/scheduler.ec8521dc.js","_app/immutable/chunks/index.760b4eb1.js","_app/immutable/chunks/singletons.2449d632.js","_app/immutable/chunks/index.6051af55.js"];
export const stylesheets = [];
export const fonts = [];
