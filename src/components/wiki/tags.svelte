<script>
	export let tags;
	export let border;
</script>

<h2 class="flex gap-4 text-slate-700">
	{#each tags as tag}
		<a href={tag.href} class="border-2 bg-white px-2" style="border-color: {border.color};">{tag.label}</a>
	{/each}
</h2>
