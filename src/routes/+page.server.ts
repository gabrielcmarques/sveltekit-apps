import type { Actions, PageServerLoad } from './$types'

// FETCH REQUEST + HOOKS.SERVER.TS
export const load: PageServerLoad = async ({ fetch }) => {
	console.log('pass', fetch)
	// await fetch('http://google.com/')
}

// PARSE FORM DATA + HOOKS.SERVER.TS
export const actions: Actions = {
	default: async ({ locals }) => {
		console.log(locals)
	}
}
