<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation'
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ posts } = data)

	function rerunLoadFunction() {
		//a )
		invalidate('posts')

		//b )
		// invalidate('api/posts')

		//c )
		// invalidate(url => url.href.includes('posts'))

		//d )
		// invalidateAll()
	}
</script>

<h1>Forms</h1>
<form action="/login" method="GET">
	<input type="text" name="user" />
	<input type="password" name="password" />
	<button type="submit">Login</button>
</form>

<h1>Posts</h1>

<button on:click={rerunLoadFunction}>Rerun</button>

<p>Showing {posts.length} posts.</p>

{#each posts as { slug, title }}
	<ul>
		<li>
			<a href="/posts/{slug}">{title}</a>
		</li>
	</ul>
{/each}
