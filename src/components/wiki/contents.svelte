<script lang="ts">
	import { onMount } from 'svelte';
	import markdownToFragment from '$lib/functions/markdown-to-url';

	export let content;
	export let border;

	let headings: { text: string; depth: number; href: string }[] = [];
	let activeHeading = '';

	if (content) {
		headings = content
			.filter((item: { type: string }) => item.type === 'heading')
			.map((heading: { text: string }) => {
				return {
					...heading,
					href: markdownToFragment({ text: heading.text })
				};
			});
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

<div class="h-full w-1/5 sticky top-24 left-4">
	<ul class="content-list my-2 h-[65%] overflow-x-hidden overflow-y-scroll flex flex-col justify-center">
		{#each headings as heading}
			<li style="margin-left: {(heading.depth - 1) * 14}px;">
				<a
					href={'#' + heading.href}
					class:active={activeHeading === heading.href}
					class="overflow-ellipsis whitespace-nowrap px-2 text-muted-foreground hover:underline"
				>
					{heading.text}
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.content-list {
		scrollbar-width: thin;
	}
	.active {
		color: black;
	}
</style>
