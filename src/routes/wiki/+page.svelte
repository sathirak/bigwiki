<script lang="ts">
	import { page } from '$src/data/pages/egghead-arc';
	import { Renderers } from '$components/renderers';

	import SvelteMarkdown from 'svelte-markdown';
</script>

<SvelteMarkdown source={page.pagesrc} renderers={Renderers} />