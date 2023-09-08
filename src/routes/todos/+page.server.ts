import type { PageServerLoad } from './$types'

import { getTodos } from '$lib/server/database'

export const load: PageServerLoad = async () => {
	const todos = getTodos()
	return { todos }
}
