<script>
	export let image;
	export let image_alt;
	export let title;
</script>

<h1 class="absolute mt-4 bg-white px-4 py-2 text-3xl text-slate-600 ">
	{title}
</h1>
<img
	src={image}
	alt={image_alt}
	srcset=""
	class="h-80 w-2/3 border-2 border-white object-cover"
/>
