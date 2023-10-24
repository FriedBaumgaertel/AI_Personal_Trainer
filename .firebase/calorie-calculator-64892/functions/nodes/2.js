

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.05b9d682.js","_app/immutable/chunks/scheduler.ec8521dc.js","_app/immutable/chunks/index.760b4eb1.js","_app/immutable/chunks/index.6051af55.js"];
export const stylesheets = [];
export const fonts = [];
