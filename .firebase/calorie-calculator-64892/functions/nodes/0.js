import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.aad46a8b.js","_app/immutable/chunks/scheduler.95e0f4bf.js","_app/immutable/chunks/index.9aa0e169.js"];
export const stylesheets = ["_app/immutable/assets/0.0667431e.css"];
export const fonts = [];
