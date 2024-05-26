<script lang="ts">
	import { page } from '../../data/egghead-arc';

	import Page from '../../components/wiki/page.svelte';

	import ParagraphComp from '../../components/markdown/paragraph.svelte';
	import HeadingComp from '../../components/markdown/heading.svelte';
	import Image from '../../components/markdown/image.svelte';
	import Link from '../../components/markdown/link.svelte';

	import SvelteMarkdown from 'svelte-markdown';
	import type TokensList from 'svelte-markdown';

	let content: TokensList;

	function handleParsed(event: CustomEvent<{ tokens: TokensList }>) {
		console.log(event.detail.tokens);
		content = event.detail.tokens;
	}

</script>

<Page {content}>
	<section class=" rounded-md bg-white px-6 py-6">
		<SvelteMarkdown
			source={page.pagesrc}
			on:parsed={handleParsed}
			renderers={{ paragraph: ParagraphComp, heading: HeadingComp, image: Image, link: Link }}
		/>
	</section>
</Page>
