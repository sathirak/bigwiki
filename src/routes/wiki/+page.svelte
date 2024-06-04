<script lang="ts">
	import { page } from '$src/data/egghead-arc';
	import { base } from '$src/data/base';

	import ParagraphComp from '$components/markdown/paragraph.svelte';
	import HeadingComp from '$components/markdown/heading.svelte';
	import Image from '$components/markdown/image.svelte';
	import Link from '$components/markdown/link.svelte';

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

<main class="flex">
	{#if content}
		<Contents {content} border={base.body.border}/>
	{/if}
	<div class="flex w-2/3 flex-col gap-6 p-6">
		<Tags tags={page.tags} border={base.body.border}/>
		<div class="flex flex-1 border-2" style="border-color: {base.body.border.color};">
			<MainImage
				image={page.main.image.image}
				image_alt={page.main.image.image_alt}
				title={page.main.image.title}
			/>
			<MainInfo info={page.main.info} />
		</div>
		<References references={page.references} border={base.body.border}/>
		<section class=" border-2 bg-secondary px-6 py-6" style="border-color: {base.body.border.color};">
			<SvelteMarkdown
				source={page.pagesrc}
				on:parsed={handleParsed}
				renderers={{ paragraph: ParagraphComp, heading: HeadingComp, image: Image, link: Link }}
			/>
		</section>
	</div>
</main>
