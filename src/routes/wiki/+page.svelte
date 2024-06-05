<script lang="ts">
	import { page } from '$src/data/egghead-arc';
	import { base } from '$src/data/base';

	import { Renderers } from '$components/markdown';

	import Contents from '$components/wiki/contents.svelte';
	import MainImage from '$components/wiki/main-image.svelte';
	import MainInfo from '$components/wiki/main-info.svelte';
	import Tags from '$components/wiki/tags.svelte';
	import References from '$components/wiki/references.svelte';

	import SvelteMarkdown from 'svelte-markdown';
	import type TokensList from 'svelte-markdown';

	let content: TokensList;

	function handleParsed(event: CustomEvent<{ tokens: TokensList }>) {
		console.log(event.detail.tokens);
		content = event.detail.tokens;
	}
	
</script>

<svelte:head>
	<title>{page.main.image.title}</title>
</svelte:head>

<main class="flex bg-secondary">
	{#if content}
		<Contents {content} border={base.body.border} />
	{/if}
	<div class="flex w-3/5 flex-col gap-6 p-6">
		<!-- <Tags tags={page.tags} border={base.body.border}/> -->
		<MainImage
			image={page.main.image.image}
			image_alt={page.main.image.image_alt}
			title={page.main.image.title}
		/>
		<!-- <MainInfo info={page.main.info} /> -->
		<!-- <References references={page.references} border={base.body.border}/> -->
		<section class=" bg-secondary px-6 py-6">
			<SvelteMarkdown
				source={page.pagesrc}
				on:parsed={handleParsed}
				renderers={Renderers}
			/>
		</section>
	</div>
</main>
