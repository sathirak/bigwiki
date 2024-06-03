<script lang="ts">
	export let menu;
</script>

<div class=" flex w-full justify-center gap-16 border-b bg-cyan-50 p-4 text-lg font-medium border-cyan-700 border-t-2">
	{#each menu as menu_item}
		<a href={menu_item.link}>{menu_item.label}</a>
	{/each}
</div>
