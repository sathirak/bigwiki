<script>
	export let icon;
	export let title;
	export let border;
	export let menu;

	import Dropdown from '$components/wiki/layout/dropdown.svelte';
	import Theme from '$components/wiki/theme.svelte';
</script>

<div
	class="z-10 flex w-full justify-between p-4 text-lg font-medium text-text opacity-100"
>
	<div class="flex gap-16">
		<div class="flex gap-4">
			<img src={icon} class=" w-6 object-cover" alt="" srcset="" />
			<h1 class="font-serif text-3xl">{title}</h1>
		</div>
	</div>

	<div>
		<a href="https://bigwiki.org" class="w-max">
			<h1 class="font-serif text-3xl">Outerwiki</h1>
			<h2 class="sr-only">Go to BIgWiki</h2>
		</a>
	</div>
</div>
