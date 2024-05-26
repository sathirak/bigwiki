<script>
	import ParagraphComp from '../markdown/paragraph.svelte';
	import HeadingComp from '../markdown/heading.svelte';
	import Image from '../markdown/image.svelte';
	import Link from '../markdown/link.svelte';

	import SvelteMarkdown from 'svelte-markdown';

	// @ts-ignore
	function handleParsed(event) {
		//access tokens via event.detail.tokens
		console.log(event.detail.tokens);
	}
	export let source; 
</script>

<section class="w-3/4 rounded-md bg-white px-4 py-6">
	<SvelteMarkdown
		{source}
		on:parsed={handleParsed}
		renderers={{ paragraph: ParagraphComp, heading: HeadingComp, image: Image, link: Link }}
	/>
	<slot></slot>
</section>
