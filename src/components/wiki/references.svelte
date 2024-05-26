<script>

  const cards = [
    {
      title: "Monkey D. Luffy",
      image: "https://via.placeholder.com/150?text=Luffy"
    },
    {
      title: "Roronoa Zoro",
      image: "https://via.placeholder.com/150?text=Zoro"
    },
    {
      title: "Nami",
      image: "https://via.placeholder.com/150?text=Nami"
    },
    {
      title: "Thousand Sunny",
      image: "https://via.placeholder.com/150?text=Sunny"
    },
    {
      title: "Marineford",
      image: "https://via.placeholder.com/150?text=Marineford"
    }
  ];
</script>

<div class="flex gap-2">
  {#each cards as card}
    <div class="relative rounded-md">  
      <img src={card.image} alt={card.title} class="rounded-md border-2 border-white object-cover"/>
      <h3 class="absolute bottom-0 ps-2 bg-white rounded-b-md text-center text-lg w-full">{card.title}</h3>
    </div>
  {/each}
</div>
