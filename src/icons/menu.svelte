<script>
	export let stroke;
	export let size;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size || 24}
	height={size || 24}
	viewBox="0 0 24 24"
	fill="none"
	style="display:block"
>
	<path
		d="M5 7H11M5 12H19M12 17L19 17"
		stroke="currentColor"
		style="stroke-opacity:1;"
		stroke-width={stroke || 2}
		stroke-linecap="round"
	/>
</svg>
