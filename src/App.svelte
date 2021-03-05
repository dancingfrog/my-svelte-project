<script>
	import { onMount } from "svelte";
	import { writable, readable } from "svelte/store";
	import { Router, Route, navigate } from "svelte-routing";

	import AuthNavbar from "./components/Navbars/AuthNavbar.svelte";
	import IndexNavbar from "./components/Navbars/IndexNavbar.svelte";
	import FooterSmall from "./components/Footers/FooterSmall.svelte";
	import Footer from "./components/Footers/Footer.svelte";

	// Auth Layout
	import Auth from "./layouts/Auth.svelte";

	// Admin Pages
	import Dashboard from "./views/admin/Dashboard.svelte";
	import Settings from "./views/admin/Settings.svelte";
	import Tables from "./views/admin/Tables.svelte";

	// No Layout Pages
	import Index from "./views/Index.svelte";
	import Landing from "./views/Landing.svelte";

	export let DEV = true; // set to true when developing

	export let skip = true; // set to true to auto-login when not developing

	export let authenticated = DEV;

	export let auth = writable(authenticated);

	export let name;

	export let url = "";

	onMount(async () => {
		if (!$auth) {
			// Start on the login page
			navigate("/auth/login", { replace: false });
		}

		if (!DEV && !!skip) {
			setTimeout(() => {
				if (!$auth) {
					// After timeout, set auth to true and redirect
					auth.set(true);
					navigate("/", {replace: true});
				}
			}, 5333);
		}
	});

</script>

{#if (!$auth)}
<AuthNavbar />
{:else}
<IndexNavbar />
{/if}

<Router url="{url}">

	<!-- auth layout -->
	<Route path="auth/*auth" component="{Auth}" bind:auth />

	<!-- admin pages -->
	<Route path="dashboard" component="{Dashboard}" />
	<Route path="settings" component="{Settings}" />
	<Route path="tables" component="{Tables}" />

	<!-- no layout pages -->
	<Route path="landing" component="{Landing}" />
	<Route path="/" component="{Index}" bind:name />
</Router>

{#if (!$auth)}
<FooterSmall absolute="true" />
{:else}
<Footer />
{/if}
