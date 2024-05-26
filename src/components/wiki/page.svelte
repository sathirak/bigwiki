<script>
	import { page } from '../../data/egghead-arc';

	import Contents from '../../components/wiki/contents.svelte';
	import MainImage from '../../components/wiki/main-image.svelte';
	import MainInfo from '../../components/wiki/main-info.svelte';
	import Tags from '../../components/wiki/tags.svelte';
	import References from '../../components/wiki/references.svelte';

    export let content;
</script>

<main class="flex">
	<Contents content={content}/>
	<div class="flex w-2/3 flex-col gap-4 p-6">
		<Tags tags={page.tags} />
		<div class="flex flex-1">
			<MainImage
				image={page.main.image.image}
				image_alt={page.main.image.image_alt}
				title={page.main.image.title}
			/>
			<MainInfo info={page.main.info} />
		</div>
		<References />
		<slot></slot>
	</div>
</main>
