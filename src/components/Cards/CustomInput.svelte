<script>
    export let val;
</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<input class="mr-1" type="text" bind:value={val}>
