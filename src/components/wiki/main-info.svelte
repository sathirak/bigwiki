<script>
    const sections = {
        'Volumes': '105-',
        'Manga Chapters': '1058-',
        'Anime Episodes': '1086-',
        'Year(s) Released': '2022- (Manga) 2023- (Anime)',
    };
</script>

<div class="p-4 bg-slate-100 rounded-md w-1/3">
    <ul class="text-slate-700">
        {#each Object.entries(sections) as [key, value]}
            <li class="my-2 flex gap-2 w-full text-sm">
                <div class="w-1/3 font-medium">{key}</div>
                <div class="w-2/3">{value}</div>
            </li>
        {/each}
    </ul>
</div>
