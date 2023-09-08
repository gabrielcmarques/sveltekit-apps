<script>
	import { enhance } from '$app/forms'

	/** @type {import('./$types').ActionData} */
	export let form
</script>

<pre>
	{JSON.stringify(form, null, 2)}
</pre>

<form method="POST" use:enhance>
	<input type="text" name="user" value={form?.data?.user ?? ''} />
	{#if form?.errors?.user}
		<p class="error">Name is required</p>
	{/if}

	<input type="password" name="password" />
	{#if form?.errors?.password}
		<p class="error">Password is required</p>
	{/if}
	
	<button type="submit">Login</button>
</form>

<style>
	.error {
		color: tomato;
	}
</style>
