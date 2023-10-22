

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cb68f8ab.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.b557cc27.js","_app/immutable/chunks/singletons.5b14119c.js"];
export const stylesheets = [];
export const fonts = [];
