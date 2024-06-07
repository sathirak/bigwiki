<script lang="ts">
	import { page } from '$src/data/pages/egghead-arc';
	import { Renderers } from '$comp/renderers';

	import SvelteMarkdown from 'svelte-markdown';
</script>

<SvelteMarkdown source={page.pagesrc} renderers={Renderers} />