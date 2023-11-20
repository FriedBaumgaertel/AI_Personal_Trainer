export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Design ohne Titel (1).svg","Design ohne Titel (2).svg","Design ohne Titel.svg","favicon.png","HeroImageBlackBackground.png","LogoWhite.png","Minato_fit_man_running_in_great_landscape_facing_camera_ultra_20a56bba-a0a3-4aa5-af02-ad720e44bcd1_3.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e0228064.js","app":"_app/immutable/entry/app.b45ed87c.js","imports":["_app/immutable/entry/start.e0228064.js","_app/immutable/chunks/scheduler.95e0f4bf.js","_app/immutable/chunks/singletons.b383db87.js","_app/immutable/chunks/index.c80d6696.js","_app/immutable/entry/app.b45ed87c.js","_app/immutable/chunks/scheduler.95e0f4bf.js","_app/immutable/chunks/index.9aa0e169.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/start",
				pattern: /^\/start\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
