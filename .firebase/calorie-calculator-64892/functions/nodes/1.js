

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bee450a2.js","_app/immutable/chunks/scheduler.659779dd.js","_app/immutable/chunks/index.0afc53e5.js","_app/immutable/chunks/singletons.a426a2da.js","_app/immutable/chunks/index.d2ca2041.js"];
export const stylesheets = [];
export const fonts = [];
