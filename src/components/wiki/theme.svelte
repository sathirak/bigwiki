<script>
	import { onMount } from 'svelte';

	let theme_name = 'light';

	function toggle_theme() {
		theme_name = theme_name === 'dark' ? 'light' : 'dark';
		selectTheme();
        updateTheme();
	}

	function selectTheme() {
		if (theme_name === 'dark') {
			localStorage.setItem('theme', 'dark');
		} else {
			localStorage.removeItem('theme')
		}
	}

	function updateTheme() {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC

		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// // Whenever the user explicitly chooses light mode
		// localStorage.theme = 'light';

		// // Whenever the user explicitly chooses dark mode
		// localStorage.theme = 'dark';

		// // Whenever the user explicitly chooses to respect the OS preference
		// localStorage.removeItem('theme');
	}

	onMount(updateTheme);
</script>

<main>
	<button on:click={toggle_theme}>
		<h2 class=" sr-only">Change Theme</h2>
		{#if theme_name === 'dark'}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-sun"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path
					d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-moon"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
			</svg>
		{/if}
	</button>
</main>
