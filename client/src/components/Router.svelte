<script>
  import { routes } from "../routes.js";
  import { route } from "../stores.js";

  let currentRoute = null;
  const unsub = route.subscribe(r => {
    currentRoute = r;
    console.log(r);
  });
</script>

{#if routes[currentRoute]}
  <svelte:component this={routes[currentRoute]} />
{/if}
