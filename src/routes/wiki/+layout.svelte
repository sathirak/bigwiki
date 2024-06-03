<script>
	import { base } from '$src/data/base';

	import Header from '$components/wiki/layout/header.svelte';
	import Footer from '$components/wiki/layout/footer.svelte';
	import BackgroundImage from '$components/wiki/layout/background.svelte';
</script>

<Header
	icon={base.header.icon}
	title={base.header.title}
	menu={base.header.menu}
/>

<BackgroundImage imageUrl={base.background.image_url} />

<slot></slot>

<Footer menu={base.footer.menu}/>
