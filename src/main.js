import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		authenticated: true, // set to true to ignore auth state
		name: 'world'
	}
});

export default app;
