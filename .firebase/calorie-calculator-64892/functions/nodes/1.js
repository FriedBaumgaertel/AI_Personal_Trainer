

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d07c6f5b.js","_app/immutable/chunks/scheduler.ec8521dc.js","_app/immutable/chunks/index.16432e1d.js","_app/immutable/chunks/singletons.c84396c2.js"];
export const stylesheets = [];
export const fonts = [];
