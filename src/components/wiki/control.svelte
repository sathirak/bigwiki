<script>
	import ThemeControl from './theme.svelte';
    import { IconEdit } from '@tabler/icons-svelte';
</script>

<div class="flex items-center gap-6 bg-cyan-100 w-max text-slate-600 px-4 py-2 rounded-2xl">
    <ThemeControl />
    <IconEdit size={20} stroke={1.5}/>
</div>  