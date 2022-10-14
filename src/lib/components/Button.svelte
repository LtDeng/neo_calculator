<script>
  import { createEventDispatcher } from "svelte";
  export let fluid = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click", true);
  }
</script>

<button
  class="neo_dynamic"
  on:click={handleClick}
  style="height:{fluid ? '100%' : '45px'}"
>
  <slot />
</button>

<style lang="scss">
</style>
