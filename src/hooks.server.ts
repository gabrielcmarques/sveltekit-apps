import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit'

// HOOK PARA MEDIR PERFORMANCE
export const handle: Handle = async ({ event, resolve }) => {
	// CARREGAMENTO
	const route = event.url

	const start = performance.now()
	const response = await resolve(event)
	const end = performance.now()

	const responseTime = end - start

	if (responseTime > 2000) {
		console.log(`LENTO! ${route} levou ${responseTime.toFixed(2)} ms`)
	}
	if (responseTime < 1000) {
		console.log(`RÁPIDO! ${route} levou ${responseTime.toFixed(2)} ms`)
	}

	return response
}

// HOOK PARA ERROR HANDLING
export const handleError: HandleServerError = async ({ error, event }) => {
	console.log('error: ', error)

	return {
		message: 'Yikes! Error'
	}
}

// HOOK PARA FETCH RESPONSE
export const handleFetch: HandleFetch = ({ request, fetch }) => {
	if (request.url.startsWith('http')) {
		const url = request.url.replace('http', 'https')
		request = new Request(url, request)

		console.log(request.url)
	}
	return fetch(request)
}
