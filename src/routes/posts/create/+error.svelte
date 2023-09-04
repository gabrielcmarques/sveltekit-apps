<script lang="ts">
    import { page } from '$app/stores'
</script>

<h1>Boom</h1>

<!-- <h1>{$page.error?.message}</h1> -->

<p>Something went wrong!</p>

<pre>
    {JSON.stringify($page)}
</pre>