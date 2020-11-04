<script>
  // core components
  import MapExample from "../../components/Maps/MapExample.svelte";
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
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
      >
        <MapExample />
      </div>
    </div>
  </div>
</main>
