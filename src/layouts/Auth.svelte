<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import {Router, Route, navigate} from "svelte-routing";

  // pages for this layout
  import Login from "../views/auth/Login.svelte";
  import Register from "../views/auth/Register.svelte";

  const registerBg2 = "../assets/img/register_bg_2.png";
  export let location;
</script>

<div>
  <main>
    <section class="relative w-full h-full py-40 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
        style="background-image: url({registerBg2});"
      ></div>
      <Router url="auth">
        <Route path="" component="{Login}" />
        <Route path="login" component="{Login}" />
        <Route path="register" component="{Register}" />
      </Router>
    </section>
  </main>
</div>
