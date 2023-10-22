

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5e09ed1c.js","_app/immutable/chunks/scheduler.cc9b4bb6.js","_app/immutable/chunks/index.b557cc27.js"];
export const stylesheets = ["_app/immutable/assets/0.50f3a132.css"];
export const fonts = [];
