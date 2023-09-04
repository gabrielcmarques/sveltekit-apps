<script lang="ts">
	import type { Post } from '@prisma/client'
	async function getPosts() {
		const response = await fetch('api/posts')
		const posts: Post[] = await response.json()
		return posts
	}
</script>

<h1>Posts</h1>

{#await getPosts()}
	<p>Loading...</p>
{:then posts}
	<p>Showing {posts.length} posts</p>

	{#each posts as { slug, title }}
		<ul>
			<li>
				<a href="/posts/{slug}">{title}</a>
			</li>
		</ul>
	{/each}

	<!-- <pre>
	{JSON.stringify(posts, null, 2)}
</pre> -->
{:catch error}
	<p>{error.message}</p>
{/await}
