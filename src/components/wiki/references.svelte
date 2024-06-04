<script>
	export let border;
	export let references;
</script>

<div class="flex w-full border-2" style="border-color: {border.color};">
	{#each references as reference}
		<a href={reference.href} class="w-full">
			<div class="relative w-full">
				<img src={reference.image} alt={reference.title} class="w-full border-2 border-white object-cover" />
				<h3 class="absolute bottom-0 w-full bg-white ps-2 text-center text-lg">{reference.title}</h3>
			</div>
		</a>
	{/each}
</div>
