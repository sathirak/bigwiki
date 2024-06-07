<script>
	import { meta } from "$src/data/meta";
</script>

<a href={meta.header.href} target="_blank" class="flex select-none items-center p-1 rounded-full hover:bg-amber-200 transition-colors">
	<img src={meta.header.logo_symbol_src} alt={meta.header.logo_aymbol_alt } height="256" width="256" class="h-12 w-auto" />
	<h2 class="sr-only">{meta.header.href_innerText}</h2>
</a>