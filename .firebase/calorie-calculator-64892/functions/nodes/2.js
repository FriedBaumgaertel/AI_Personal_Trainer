

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.1cfa10ce.js","_app/immutable/chunks/scheduler.95e0f4bf.js","_app/immutable/chunks/index.9aa0e169.js","_app/immutable/chunks/index.80b5ae00.js"];
export const stylesheets = [];
export const fonts = [];
