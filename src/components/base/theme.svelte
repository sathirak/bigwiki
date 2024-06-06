<script>
	import { IconSun, IconMoon } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	let theme_name = 'light';

	function toggle_theme() {
		theme_name = theme_name === 'dark' ? 'light' : 'dark';
		set_theme();
		update_theme();
	}

	function set_theme() {
		if (theme_name === 'dark') {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.removeItem('theme');
		}
	}

	function update_theme() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	onMount(update_theme);
</script>

<button on:click={toggle_theme}>
	<h2 class=" sr-only">Change Theme</h2>
	{#if theme_name === 'dark'}
		<IconSun size={20} stroke={1.5} />
	{:else}
		<IconMoon size={20} stroke={1.5} />
	{/if}
</button>
