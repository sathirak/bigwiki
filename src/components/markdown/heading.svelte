<script>
	export let depth;
	export let text;

</script>

{#if depth === 1}
	<h1 id={text.replace(" ", "-")} class=" text-slate-700 font-medium text-3xl"><slot></slot></h1>
{:else if depth === 2}
	<h2 id={text.replace(" ", "-")} class=" text-slate-700 font-medium text-2xl"><slot></slot></h2>
{:else if depth === 3}
	<h3 id={text.replace(" ", "-")} class=" text-slate-700 font-medium text-xl"><slot></slot></h3>
{:else if depth === 4}
	<h4 id={text.replace(" ", "-")} class=" text-slate-700 font-medium text-lg"><slot></slot></h4>
{:else if depth === 5}
	<h5 id={text.replace(" ", "-")} class=" text-slate-700 font-medium text-sm"><slot></slot></h5>
{:else if depth === 6}
	<h6 id={text.replace(" ", "-")} class=" text-slate-700 font-medium text-xs"><slot></slot></h6>
{:else}
	{text}
{/if}

<style>

</style>
