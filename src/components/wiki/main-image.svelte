<script>
	export let image;
	export let image_alt;
	export let title;
</script>

<h1 class="bg-secondary text-text absolute mt-4 px-4 py-2 text-3xl">
	{title}
</h1>
<img
	src={image}
	alt={image_alt}
	srcset=""
	class="border-secondary h-80 w-2/3 border-2 object-cover"
/>
