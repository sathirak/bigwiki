<script>
  export let header
  export let align
</script>

{#if header}
  <th {align} class="border border-primary table-cell"><slot></slot></th>
{:else}
  <td {align} class="border border-primary table-cell"><slot></slot></td>
{/if}