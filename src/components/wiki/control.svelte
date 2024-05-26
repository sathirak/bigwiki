<script>
	import ThemeControl from './theme.svelte';
    import { IconEdit } from '@tabler/icons-svelte';
</script>

<div class="flex items-center gap-6 my-4 p-2 rounded-full bg-cyan-100 w-max text-slate-600 ">
    <ThemeControl />
    <IconEdit size={20} stroke={1.5}/>
</div>  