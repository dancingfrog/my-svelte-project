<script>
  // core components
  import CardTable from "../../components/Cards/CardTable.svelte";
  export let location;
</script>

<style>
  main {
    text-align: center;
    padding: 4em 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <CardTable />
    </div>
    <div class="w-full mb-12 px-4">
      <CardTable color="dark" />
    </div>
  </div>
</main>
