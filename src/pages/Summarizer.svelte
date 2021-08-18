<script lang="ts">
  import {
    Button,
    TextArea,
    CopyButton,
    Grid,
    Row,
    Column,
    SkeletonText,
    NumberInput,
  } from "carbon-components-svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { article, demo_article } from "../stores";
  type Summary = {
    summary: string;
  };
  const SUMMARY_API = process.env.SUMMARY_API as string;
  $article = "";
  let showOriginal: boolean = false;
  let numSentences: number = 5;
  let summarize: Promise<Summary> | undefined = undefined;
  const fetchSummary = () => {
    summarize = fetch(
      `${SUMMARY_API}?num_sentences=${numSentences}&algorithm=gmm &min_length=40&max_length=400`,
      {
        method: "POST",
        body: `${$article}`,
        headers: {
          "Content-Type": "text/plain",
        },
      }
    ).then((response) => response.json());
  };

  onMount(fetchSummary);
</script>

<TextArea
  rows={8}
  class="dark-mode scroll__"
  bind:value={$article}
  placeholder="Hey there 👋! Want to summarize some text? Paste it here"
/>
<br />
<br />

<Grid>
  <Row>
    <Column>
      <NumberInput
      size="xl"
      min={4}
      max={20}
      bind:value={numSentences}
      invalidText="Number must be between 4 and 20."
      helperText="Increaing the amount of sentences in summary allows for more contextual results, at the cost of precision."
      label="Number of sentences (4 min, 20 max)"
    />
    </Column>
    <Column>
      <Button
        kind="ghost"
        on:click={() => {
          $article = $demo_article;
        }}>Load example</Button
      >
      <Button
        on:click={() => {
          fetchSummary();
          showOriginal = !showOriginal;
        }}>Summarize</Button
      >
    </Column>
  </Row>
  <Row>
    <Column>
      {#if showOriginal}
        <h2>Original</h2>
        {$article}
      {/if}
    </Column>
    <Column>
      <div>

        {#await summarize then res}
          {#if res}
            <h2>Summary</h2>
            <div>
              {#if res.summary === undefined}
                No text to summarize 😝
                <div out:fade={{ delay: 1000, duration: 100 }}>
                  <SkeletonText paragraph />
                </div>
              {:else}
                <p in:fade={{ delay: 1000, duration: 1000 }}>
                  <span in:fade={{ duration: 200 }}>🎉</span>

                  {res.summary}
                </p>
                <CopyButton text={res.summary} />
              {/if}
            </div>
          {/if}
        {:catch err}
          <p>{err.message}. Word.</p>
        {/await}
      </div>
    </Column>
  </Row>
</Grid>
