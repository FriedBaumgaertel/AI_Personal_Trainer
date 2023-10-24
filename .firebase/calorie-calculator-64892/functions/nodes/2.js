

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.05ec7962.js","_app/immutable/chunks/scheduler.ec8521dc.js","_app/immutable/chunks/index.16432e1d.js"];
export const stylesheets = [];
export const fonts = [];
