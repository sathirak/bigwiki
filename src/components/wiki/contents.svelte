<script lang="ts">
	import { onMount } from 'svelte';

	export let content;

	let headings: { text: string; depth: number; href: string }[] = [];
	let activeHeading = '';

	if (content) {
		headings = content
			.filter((item: { type: string }) => item.type === 'heading')
			.map((heading: { text: string }) => {
				return {
					...heading,
					href: heading.text.trim().replace(/\s+/g, '-').toLowerCase()
				};
			});
		console.log('super headings + ', headings);
	}

	// Intersection Observer setup to highlight the part from content page	
	let observer: any;

	function observeSections() {
		const options = {
			root: null,
			rootMargin: '70px',
			threshold: 0.5
		};

		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeHeading = entry.target.id;
				}
			});
		}, options);

		headings.forEach((heading) => {
			const section = document.getElementById(heading.href);
			if (section) {
				observer.observe(section);
			}
		});
	}

	// Start observing when the component mounts
	onMount(() => {
		observeSections();
		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	});
</script>

<div class="fixed h-full w-1/6 pb-2 pl-6 pt-8">
	<div class="flex items-center gap-2">
		<h2 class="select-none py-2 text-lg">Navigation</h2>
	</div>

	<ul
		class="content-list my-2 h-[65%] overflow-x-hidden overflow-y-scroll text-slate-700 dark:text-slate-50"
	>
		{#each headings as heading}
			<li style="margin-left: {(heading.depth - 1) * 14}px;">
				<a
					href={'#' + heading.href}
					class:active={activeHeading === heading.href}
					class="overflow-ellipsis whitespace-nowrap px-2 hover:text-slate-900 hover:underline"
				>
					{#if heading.depth < 3}#{/if}
					{heading.text}
				</a>
			</li>
		{/each}
	</ul>
</div>

<div class="my-6 w-1/6 rounded-r-md bg-white dark:bg-gray-500"></div>

<style>
	.content-list {
		scrollbar-color: rgb(225, 225, 225) rgb(246, 245, 245);
		scrollbar-width: thin;
	}
	.active {
		background-color: rgb(236, 236, 236);
	}
</style>
