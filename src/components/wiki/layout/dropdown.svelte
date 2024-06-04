<script>
	export let menu_item;
	export let border;
</script>

<div class="dropdown">
	<button class="dropbtn">{menu_item.label}</button>
	<div
		class="z-1 dropdown-content absolute hidden border-2 bg-secondary"
		style="border-color: {border.color};"
	>
		{#each menu_item.items as item}
			<a class="block px-4 py-2 decoration-0 hover:brightness-50" href={item.link}>{item.label}</a>
		{/each}
	</div>
</div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
