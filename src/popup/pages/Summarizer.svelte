<script>
  // UI
  import {
    TextArea,
    Button,
    TextInput,
    CopyButton,
    FileUploaderDropContainer,
  } from "carbon-components-svelte";
  import TextLink16 from "carbon-icons-svelte/lib/TextLink16";
  // Svelte
  /* Any imports from "svelte" go here */
  // Assets
  /* Any asset imports go here */
  // Other
  // import "../utils";
  // import * as summary from "text-summary";

  // Exports
  /* Component paramters go here */
  /*-------------------------------*/
  // Vars
  let showSummary = true;
  let text = `Paste an article URL or a body of text, and we will generate a summary for you, clean and simple. For the curious, we also map out each part of the summary to it's original place in the article.


You can select a key part in the summary view, and if you want to share it all you need to do is click a button in the article view for the corresponding text to generate a text fragment link to the original article webpage.

  `;
  let result = text
  // let result = summary(text, 2);
</script>

<div>
  <h3>Please enter any text you'd like into the textarea</h3>
  <TextArea
    labelText="Summarizer"
    helperText="QuickSum summarization: Uses advanced NLP that you do not understand"
    placeholder="Paste article text/URL..."
    on:change={(value) => {
      text = value;
    }}
  />

  <div>
    <h3>
      Alternatively, you can drag and drop a text file to summarize quickly.
    </h3>

    <FileUploaderDropContainer
      labelText="Drag and drop files here or click to upload for quick summerization"
    />
  </div>

  <div
    style="display:flex; flex-direction:row; justify-content: space-between;"
  >
    {#if showSummary}
      <Button kind="secondary" icon={TextLink16}
        >Genenrate Text Fragment Link</Button
      >
    {/if}
    <Button
      kind="primary"
      on:click={() => {
        showSummary = !showSummary;
      }}>Summarize</Button
    >
  </div>
</div>
<h5>Summary</h5>
<div padding="10px">
  {#if showSummary}
    <span>{result}Hell</span>
  {:else}
    please enter text
  {/if}
  <CopyButton text="Carbon svelte" feedback="Copied to clipboard" />
</div>

<style>
  div {
    padding: 10px;
  }
</style>
