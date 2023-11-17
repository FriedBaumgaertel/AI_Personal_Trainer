

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9fcc7b91.js","_app/immutable/chunks/scheduler.659779dd.js","_app/immutable/chunks/index.0afc53e5.js"];
export const stylesheets = ["_app/immutable/assets/0.251bafe7.css"];
export const fonts = [];
