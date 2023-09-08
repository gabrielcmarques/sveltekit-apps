import db from '$lib/database'
import type { SortOrder } from '@prisma/client'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? 30)
	const order = url.searchParams.get('order') ?? 'asc'

	const posts = await db.post.findMany({
		orderBy: { id: order as SortOrder },
		take: limit
	})

	return json(posts)
}
