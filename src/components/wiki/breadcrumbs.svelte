<script>
  let storyArcs = [
    { id: "top", label: "Story Arcs" },
    { id: "egghead", label: "Egghead Arc" }
  ];
</script>

<h2 class="text-slate-700 flex gap-4">
  {#each storyArcs as arc}
    <a href={'/' + arc.id} class="rounded-sm bg-white px-2">{arc.label}</a>
  {/each}
</h2>
