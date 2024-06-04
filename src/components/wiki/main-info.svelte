<script>
	export let info;
</script>

<div class="w-1/3 bg-secondary p-4">
	{#each info as section}
		<table class="mb-2 w-full border-b p-2 font-medium text-text-600">
			{#if section.head}
				<thead>
					<tr>
						<th colspan={section.body[0].length} class="text-center font-medium text-text-800"
							>{section.head}</th
						>
					</tr>
				</thead>
			{/if}
			<tbody>
				{#each section.body as row}
					<tr>
						{#each row as cell}
							<td class={row.length === 1 ? 'text-center' : 'text-left'}>{cell}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	{/each}
</div>
