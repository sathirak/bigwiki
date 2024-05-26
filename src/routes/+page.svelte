<script>
	import { base } from '../data/base';
	import { page } from '../data/egghead-arc';

	import Header from '../components/wiki/header.svelte';
	import Footer from '../components/wiki/footer.svelte';
	import Contents from '../components/wiki/contents.svelte';
	import MainImage from '../components/wiki/main-image.svelte';
	import MainInfo from '../components/wiki/main-info.svelte';
	import Tags from '../components/wiki/tags.svelte';
	import Body from '../components/wiki/body.svelte';
	import BackgroundImage from '../components/wiki/background.svelte';
	import References from '../components/wiki/references.svelte'
</script>

<Header
	icon={base.header.icon}
	bg_color={base.header.bg_color}
	title={base.header.title}
	menu={base.header.menu}
/>
<BackgroundImage imageUrl={base.background.image_url} />
<main class="flex">
	<Contents />
	<div class="flex flex-1 flex-col gap-4 p-6">
		<Tags tags={page.tags}/>
		<div class="flex w-3/4 flex-1">
			<MainImage image={page.main.image.image} image_alt={page.main.image.image_alt} title={page.main.image.title}/>
			<MainInfo info={page.main.info} />
		</div>
		<References />
		<Body source={page.pagesrc} />
	</div>
</main>
<Footer></Footer>
