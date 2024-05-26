<script>
  export let tags;
</script>

<h2 class="text-slate-700 flex gap-4">
  {#each tags as tag}
    <a href={tag.href} class="rounded-sm bg-white px-2">{tag.label}</a>
  {/each}
</h2>
