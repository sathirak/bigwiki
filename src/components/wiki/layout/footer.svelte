<script lang="ts">
	export let menu;
	export let border;
</script>

<div
	class=" flex w-full justify-center gap-16 border-b border-t-2 p-4 text-lg font-medium text-text bg-secondary"
	style="border-color: {border.color};"
>
	{#each menu as menu_item}
		<a href={menu_item.link}>{menu_item.label}</a>
	{/each}
</div>
