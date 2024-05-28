<script>
	import { base } from '../../data/base';

	import Header from '$components/wiki/header.svelte';
	import Footer from '$components/wiki/footer.svelte';
	import BackgroundImage from '$components/wiki/background.svelte';
</script>

<Header
	icon={base.header.icon}
	bg_color={base.header.bg_color}
	title={base.header.title}
	menu={base.header.menu}
/>
<BackgroundImage imageUrl={base.background.image_url} />

<slot></slot>

<Footer />
