<script>
  export let href = "";
  export let title = undefined;
  export let text = "";
</script>

<img
class="rounded-md float-left mr-4"
  src={href}
  {title}
  alt={text}
/>