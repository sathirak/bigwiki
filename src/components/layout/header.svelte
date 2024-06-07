<script>
	import HeaderLogo from './header-logo.svelte';
	import Menu from './header-menu.svelte';
	import BrandHeaderLogo from './brand-header-logo.svelte';
</script>

<div class="sticky top-0 flex w-full items-center justify-between bg-secondary px-4 py-4">
	<div class="flex items-center gap-4">
		<Menu />
		<HeaderLogo />
	</div>
	<BrandHeaderLogo/>
</div>