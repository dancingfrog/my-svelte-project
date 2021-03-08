<script>
  export let chosenOption = 1;
</script>

<button
        class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        disabled={chosenOption === 1}
        on:click={() => (chosenOption = 1)}>
  Option 1
</button>
<button
        class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
        type="button"
        disabled={chosenOption === 2}
        on:click={() => (chosenOption = 2)}>
  Option 2
</button>
