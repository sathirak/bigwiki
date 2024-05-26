<script>
	import { base } from '../data/base';
	import { page } from '../data/egghead-arc';

	import SvelteMarkdown from 'svelte-markdown';

	import Header from '../components/wiki/header.svelte';
	import Footer from '../components/wiki/footer.svelte';
	import Contents from '../components/wiki/contents.svelte';
	import MainImage from '../components/wiki/main-image.svelte';
	import MainInfo from '../components/wiki/main-info.svelte';
	import Breadcrumbs from '../components/wiki/breadcrumbs.svelte';
	import Body from '../components/wiki/body.svelte';
	import BackgroundImage from '../components/wiki/background.svelte';
</script>

<Header
	icon={base.header.icon}
	bg_color={base.header.bg_color}
	title={base.header.title}
	menu={base.header.menu}
/>
<BackgroundImage imageUrl="/background.jpg" />
<main class="flex">
	<Contents />
	<div class="flex flex-1 flex-col gap-4 p-6">
		<Breadcrumbs></Breadcrumbs>
		<div class="flex w-3/4 flex-1 gap-4">
			<MainImage>Egghead Arc</MainImage>
			<MainInfo />
		</div>
		<Body source={page.pagesrc} >
		</Body>

	</div>
</main>
<Footer></Footer>
