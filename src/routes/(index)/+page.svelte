<script lang="ts">
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	// import { BC_VERSION, BC_SK_VERSION } from '$lib/config';
	export let data: any;

	const pageDescription = 'Test';
	const pageTitle = 'Test';
	console.log(data)
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
</svelte:head>

<main id="main" class="relative top-0 right-0 w-full overflow-visible">

</main>
