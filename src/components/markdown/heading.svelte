<script>
	export let depth;
	export let text;
	// This formatting can be als seen on contents page
	const href = text.trim().replace(/\s+/g, '-').toLowerCase()

</script>

{#if depth === 1}
	<h1 id={href} class=" text-slate-700 font-medium text-3xl"><slot></slot></h1>
{:else if depth === 2}
	<h2 id={href} class=" text-slate-700 font-medium text-2xl"><slot></slot></h2>
{:else if depth === 3}
	<h3 id={href} class=" text-slate-700 font-medium text-xl"><slot></slot></h3>
{:else if depth === 4}
	<h4 id={href} class=" text-slate-700 font-medium text-lg"><slot></slot></h4>
{:else if depth === 5}
	<h5 id={href} class=" text-slate-700 font-medium text-sm"><slot></slot></h5>
{:else if depth === 6}
	<h6 id={href} class=" text-slate-700 font-medium text-xs"><slot></slot></h6>
{:else}
	{text}
{/if}

<style>

</style>
