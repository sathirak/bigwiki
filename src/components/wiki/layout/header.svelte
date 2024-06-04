<script>
	export let icon;
	export let title;
	export let border;
	export let menu;

	import Dropdown from '$components/wiki/layout/dropdown.svelte';
	import Theme from '$components/wiki/theme.svelte'
</script>

<div
	class="fixed z-10 flex w-full justify-between border-b-2 bg-secondary text-text p-4 text-lg font-medium opacity-100"
	style="border-color: {border.color};"
>
	<div class="flex gap-16">
		<div class="flex gap-4">
			<img src={icon} class=" w-6 object-cover" alt="" srcset="" />
			<h1 class=" ">{title}</h1>
		</div>

		<nav class="hidden gap-8 md:flex">
			{#each menu as menu_item}
				<Dropdown {menu_item} {border} />
			{/each}
		</nav>
	</div>

	<Theme/>

	<div>
		<a href="https://bigwiki.org" class="w-max">
			<img src="/BigWiki.svg" height="27" width="100" class=" mr-4" alt="" srcset="" />
			<h2 class=" sr-only">Go to BIgWiki</h2>
		</a>
	</div>
</div>
<div class="fixed h-14 w-full"></div>
<div class="h-14 w-full"></div>
