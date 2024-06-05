<script>
	export let image;
	export let image_alt;
	export let title;
</script>

<img
	src={image}
	alt={image_alt}
	srcset=""
	class=" bottom-0 h-96 w-full border-2 border-secondary object-cover"
/>

<h1
	class="sticky bottom-0 top-0 z-10 w-full bg-secondary px-4 py-2 text-center font-serif text-4xl text-text"
>
	{title}
</h1>
