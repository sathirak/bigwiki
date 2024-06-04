<script lang="ts">
  export let href: string;
  export let title: string;
  export let text: string;
</script>

<img
class=" float-left mr-4"
  src={href}
  {title}
  alt={text}
/>