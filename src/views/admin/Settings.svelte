<script>
  // core components
  import CardSettings from "../../components/Cards/CardSettings.svelte";
  import CardProfile from "../../components/Cards/CardProfile.svelte";
  export let location;
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;


  main {
    max-width: none;
    margin: 0 auto;
    padding: 4em 1em;
    text-align: center;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (max-width: 640px) {
    main {
      max-width: 300px;
      padding: 1em 0;
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
