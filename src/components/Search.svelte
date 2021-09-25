<script>
  import { article } from "../stores";
  import { HeaderSearch } from "carbon-components-svelte";
  export let value;
  export let results = {id:1, name:"test",description: $article};
  export let selectedHref = "";
</script>

<HeaderSearch
  placeholder="Search"
  bind:value
  {results}
  on:select={(e) => {
    selectedHref = e.detail.selectedResult.href;
  }}
/>
{selectedHref}

