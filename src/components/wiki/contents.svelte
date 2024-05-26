<script>
	import Control from './control.svelte';

	const sections = [
		'Summary',
		'Story Impact',
		'Trivia',
		'References',
		'Arc Navigation',
		'Site Navigation'
	];
</script>

<div class="h-inherit w-1/6 border-r bg-white p-6 dark:bg-gray-500">
	<Control />
	<h2 class=" select-none text-lg">Contents</h2>

	<ul class="text-slate-700 dark:text-slate-50">
		{#each Object.entries(sections) as [key, value]}
			<li class="my-2">
				<a href="#top" class=" hover:text-slate-900 hover:underline">{value}</a>
			</li>
		{/each}
	</ul>
</div>
