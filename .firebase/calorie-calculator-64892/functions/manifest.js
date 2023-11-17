export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Design ohne Titel (1).svg","Design ohne Titel (2).svg","Design ohne Titel.svg","favicon.png","LogoWhite.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d9c80994.js","app":"_app/immutable/entry/app.8a846648.js","imports":["_app/immutable/entry/start.d9c80994.js","_app/immutable/chunks/scheduler.659779dd.js","_app/immutable/chunks/singletons.a426a2da.js","_app/immutable/chunks/index.d2ca2041.js","_app/immutable/entry/app.8a846648.js","_app/immutable/chunks/scheduler.659779dd.js","_app/immutable/chunks/index.0afc53e5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/results",
				pattern: /^\/results\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
