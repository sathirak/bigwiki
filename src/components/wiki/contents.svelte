<script lang="ts">
	export let content;
	console.log('contents + ', content);

	let headings: any;

	if (content) {
		console.log('super contents + ', content);

		headings = content.filter((item: { type: string }) => item.type === 'heading');

		console.log('super headings + ', headings);

	}
</script>

<div class=" fixed h-full w-1/6 pb-2 pl-6 pt-8">
	<div class="flex items-center gap-2">
		<h2 class="select-none py-2 text-lg">Navigation</h2>
	</div>

	<ul class="content-list my-2 h-[65%] overflow-y-scroll text-slate-700 dark:text-slate-50">
		{#if headings}
			{#each Object.entries(headings) as [key, value]}
				<li class="my-2">
					<a href={"#" + value.text.replace(" ", "-")} class=" hover:text-slate-900 hover:underline">{value.text}</a>
				</li>
			{/each}
		{/if}
	</ul>
</div>

<div class="my-6 w-1/6 rounded-r-md bg-white dark:bg-gray-500"></div>

<style>
	.content-list {
		scrollbar-color: rgb(225, 225, 225) rgb(246, 245, 245);
	}
</style>
