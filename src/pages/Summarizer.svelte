<script lang="ts">
  import {
    Button,
    TextArea,
    CopyButton,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  type Summary = {
    summary: string;
  };
  const SUMMARY_API = process.env.SUMMARY_API as string;
  let article: string = "";
  let showOriginal: boolean = false;
  let summarize: Promise<Summary> | undefined = undefined;
  const fetchSummary = () => {
    summarize = fetch(
      `${SUMMARY_API}?num_sentences=5&algorithm=gmm &min_length=40&max_length=400`,
      {
        method: "POST",
        body: `${article}`,
        headers: {
          "Content-Type": "text/plain",
        },
      }
    ).then((response) => response.json());
  };

  onMount(fetchSummary);
</script>

<TextArea
  class="dark-mode scroll__"
  bind:value={article}
  placeholder="Hey there 👋! Want to summarize some text? Paste it here"
/>
<br />
<br />
<Button
  on:click={() => {
    fetchSummary();
    showOriginal = !showOriginal;
  }}>Summarize</Button
>

<Grid>
  <Row>
    <Column>
      {#if showOriginal}
        <h2>Original</h2>
        {article}
      {/if}
    </Column>
    <Column>
      <div>
        {#await summarize then res}
          {#if res}
            <h2>Summary</h2>
            <div in:slide={{ duration: 200 }}>🎉</div>
            <p in:fade={{ duration: 500 }}>
              {res.summary === undefined
                ? "No text to summarize 😝"
                : res.summary}
            </p>
            <CopyButton text={res.summary} />
          {/if}
        {:catch err}
          <p>{err.message}. Word.</p>
        {/await}
      </div>
    </Column>
  </Row>
</Grid>
