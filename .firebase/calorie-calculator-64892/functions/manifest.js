export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Design ohne Titel (1).svg","Design ohne Titel (2).svg","Design ohne Titel.svg","favicon.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ef0c47cb.js","app":"_app/immutable/entry/app.c5dd476c.js","imports":["_app/immutable/entry/start.ef0c47cb.js","_app/immutable/chunks/scheduler.ec8521dc.js","_app/immutable/chunks/singletons.2449d632.js","_app/immutable/chunks/index.6051af55.js","_app/immutable/entry/app.c5dd476c.js","_app/immutable/chunks/scheduler.ec8521dc.js","_app/immutable/chunks/index.760b4eb1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
