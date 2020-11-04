<script>
  // core components
  import CardLineChart from "../../components/Cards/CardLineChart.svelte";
  import CardBarChart from "../../components/Cards/CardBarChart.svelte";
  import CardPageVisits from "../../components/Cards/CardPageVisits.svelte";
  import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.svelte";
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
  <div>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardLineChart />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <CardBarChart />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
        <CardPageVisits />
      </div>
      <div class="w-full xl:w-4/12 px-4">
        <CardSocialTraffic />
      </div>
    </div>
  </div>

</main>
