import type { Post } from '@prisma/client'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, depends }) => {
	const random = Math.round(Math.random() * 30)
	const response = await fetch(`/api/posts?limit=${random}`)
	const posts: Post[] = await response.json()

	depends('posts')

	return { posts }
}
