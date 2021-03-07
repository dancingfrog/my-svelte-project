<script>
  // core components
  import CardSettings from "../../components/Cards/CardSettings.svelte";
  import CardProfile from "../../components/Cards/CardProfile.svelte";
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
    <div class="w-full lg:w-4/12 px-4">
      <CardProfile />
    </div>
    <div class="w-full lg:w-8/12 px-4">
      <CardSettings />
    </div>
  </div>
</main>
