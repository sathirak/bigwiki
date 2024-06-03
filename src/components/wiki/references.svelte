<script>
	export let border;
	const cards = [
		{
			title: 'Monkey D. Luffy',
			href: '/wiki/monkey-d-luffy',
			image: 'https://via.placeholder.com/150?text=Luffy'
		},
		{
			title: 'Roronoa Zoro',
			href: '/wiki/monkey-d-luffy',
			image: 'https://via.placeholder.com/150?text=Zoro'
		},
		{
			title: 'Nami',
			href: '/wiki/monkey-d-luffy',
			image: 'https://via.placeholder.com/150?text=Nami'
		},
		{
			title: 'Thousand Sunny',
			href: '/wiki/monkey-d-luffy',
			image: 'https://via.placeholder.com/150?text=Sunny'
		},
		{
			title: 'Marineford',
			href: '/wiki/monkey-d-luffy',
			image: 'https://via.placeholder.com/150?text=Marineford'
		}
	];
</script>

<div class="flex w-full border-2" style="border-color: {border.color};">
	{#each cards as card}
		<a href={card.href} class="w-full">
			<div class="relative w-full">
				<img src={card.image} alt={card.title} class="w-full border-2 border-white object-cover" />
				<h3 class="absolute bottom-0 w-full bg-white ps-2 text-center text-lg">{card.title}</h3>
			</div>
		</a>
	{/each}
</div>
