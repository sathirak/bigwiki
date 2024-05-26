<script>
	const sections = [
		'Summary',
		'Story Impact',
		'Trivia',
		'References',
		'Arc Navigation',
		'Site Navigation'
	];
</script>

<div class="h-inherit w-1/6 border-r p-6 bg-white dark:bg-gray-500">
	<h2 class=" select-none">Contents</h2>

	<ul class="text-slate-700 dark:text-slate-50">
		{#each Object.entries(sections) as [key, value]}
			<li class="my-2">
				<a href="#top" class=" hover:underline hover:text-slate-900">{value}</a>
			</li>
		{/each}
	</ul>
</div>
