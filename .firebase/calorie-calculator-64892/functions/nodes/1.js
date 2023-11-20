

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.74918447.js","_app/immutable/chunks/scheduler.95e0f4bf.js","_app/immutable/chunks/index.9aa0e169.js","_app/immutable/chunks/singletons.b383db87.js","_app/immutable/chunks/index.c80d6696.js"];
export const stylesheets = [];
export const fonts = [];
