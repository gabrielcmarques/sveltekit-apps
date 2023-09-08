<script lang="ts">
	import { invalidateAll } from '$app/navigation'
	import type { PageData } from './$types'

	type Data = {
		success: boolean
		errors: Record<string, string>
	}

	export let data: PageData

	let form: Data

	async function addTodo(event: Event) {
		const formEl = event.target as HTMLFormElement
		const data = new FormData(formEl)

		console.dir(formEl)

		const response = await fetch(formEl.action, {
			method: 'POST',
			body: data
		})

		const responseData = await response.json()

		form = responseData

		formEl.reset()

		await invalidateAll()
	}

	async function removeTodo(event: Event) {
		const formEl = event.target as HTMLFormElement
		const data = new FormData(formEl)

		const response = await fetch(formEl.action, {
			method: 'DELETE',
			body: data
		})

		await invalidateAll()
	}
</script>

<pre>
    {JSON.stringify(data, null, 2)}    
</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form on:submit|preventDefault={removeTodo} method="POST">
				<input type="hidden" name="id" value={todo.id} />
				<button class="delete" type="submit">X</button>
			</form>
		</li>
	{/each}
</ul>

<form on:submit|preventDefault={addTodo} method="POST">
	<input type="text" name="todo" />
	{#if form?.errors?.todo}
		<p class="error">This field is required</p>
	{/if}
	<button type="submit">+ Add Todo</button>
</form>

{#if form?.success}
	<p>Added Todo!</p>
{/if}

<style>
	ul {
		padding: 0;
	}
	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	span {
		text-transform: capitalize;
	}

	.delete {
		margin: 0;
		background: none;
		border: none;
	}
	.error {
		color: tomato;
	}
</style>
