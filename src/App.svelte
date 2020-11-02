<script>
	import { Router, Route } from "svelte-routing";

	// Auth Layout
	import Auth from "./layouts/Auth.svelte";

	// No Layout Pages
	import Index from "./views/Index.svelte";
	import Landing from "./views/Landing.svelte";
	import Profile from "./views/Profile.svelte";

	export let name;

	export let url = "";

</script>

<Router url="{url}">

	<!-- auth layout -->
	<Route path="auth/*auth" component="{Auth}" />

	<!-- no layout pages -->
	<Route path="landing" component="{Landing}" />
	<Route path="profile" component="{Profile}" />
	<Route path="/" component="{Index}" bind:name />
</Router>
