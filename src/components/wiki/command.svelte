<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { IconX } from '@tabler/icons-svelte';

	let isVisible = false;

	function toggleVisibility() {
		isVisible = !isVisible;
	}

	function handleKeydown(event: { key: string; preventDefault: () => void; }) {
		if (event.key === '/') {
			event.preventDefault();
			toggleVisibility();
		}
	}
</script>

{#if isVisible}
	<section
		class="fixed left-1/2 top-1/2 z-20 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border marker:text-text bg-secondary"
	>
		<div class="flex h-1/5 items-center border-b">
			<input
				type="search"
				name="command search"
				id=""
				class=" w-full bg-transparent px-8 py-2 caret-text-800 outline-none"
				placeholder="Search for anything..."
			/>
			<IconX class=" mx-6 text-text-500"></IconX>
		</div>
	</section>
{/if}

<svelte:window on:keydown={handleKeydown} />
