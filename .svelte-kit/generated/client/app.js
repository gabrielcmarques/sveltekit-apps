export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [2];

export const dictionary = {
		"/": [~4],
		"/[[lang]]/about": [5],
		"/image/[witdh]x[height]": [6],
		"/login": [~7],
		"/media/[...file]/[width]/[height]": [8],
		"/posts": [9,[2]],
		"/posts/create": [12,[2],[,3]],
		"/posts/[slug=slug]": [10,[2]],
		"/posts/[slug]": [~11,[2]],
		"/todos": [~13]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';