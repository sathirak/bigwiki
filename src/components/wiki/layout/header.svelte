<script>
	export let icon;
	export let title;
	export let bg_color;
	export let menu;
</script>

<div
	class=" glass fixed z-10 flex w-full justify-between border-b p-4 text-lg font-medium opacity-100"
	style="background: {bg_color};"
>
	<div class="flex gap-16">
		<div class="flex gap-4">
			<img src={icon} class=" w-6 object-cover" alt="" srcset="" />
			<h1 class=" ">{title}</h1>
		</div>

		<nav class="hidden gap-8 md:flex">
			{#each menu as menuItem}
				<div class="dropdown">
					<button class="dropbtn">{menuItem.label}</button>
					<div class="z-1 dropdown-content absolute hidden bg-white">
						{#each menuItem.items as item}
							<a class=" block px-4 py-2 decoration-0 hover:bg-slate-100" href={item.link}
								>{item.label}</a
							>
						{/each}
					</div>
				</div>
			{/each}
		</nav>
	</div>

	<div>
		<a href="https://bigwiki.org" class="w-max">
			<img src="/BigWiki.svg" height="27" width="100" class=" mr-4" alt="" srcset="" />
			<h2 class=" sr-only">Go to BIgWiki</h2>
		</a>
	</div>
</div>
<div class="fixed h-14 w-full bg-white"></div>
<div class="h-14 w-full"></div>

<style>
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
