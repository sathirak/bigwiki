<script lang="ts">
	export let depth: number;
	export let text: string;
	import markdownToFragment from '$lib/functions/markdown-to-url';

	// This formatting can be als seen on contents page
	const href = markdownToFragment({text: text});
</script>

<a href="#{href}">
	{#if depth === 1}
		<h1 id={href} class=" scroll-mt-16 text-3xl font-medium text-slate-700"><slot></slot></h1>
	{:else if depth === 2}
		<h2 id={href} class=" scroll-mt-16 text-2xl font-medium text-slate-700"><slot></slot></h2>
	{:else if depth === 3}
		<h3 id={href} class=" scroll-mt-16 text-xl font-medium text-slate-700"><slot></slot></h3>
	{:else if depth === 4}
		<h4 id={href} class=" scroll-mt-16 text-lg font-medium text-slate-700"><slot></slot></h4>
	{:else if depth === 5}
		<h5 id={href} class=" scroll-mt-16 text-sm font-medium text-slate-700"><slot></slot></h5>
	{:else if depth === 6}
		<h6 id={href} class=" scroll-mt-16 text-xs font-medium text-slate-700"><slot></slot></h6>
	{:else}
		{text}
	{/if}
</a>
