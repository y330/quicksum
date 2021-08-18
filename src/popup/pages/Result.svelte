.-<script>
  import { Grid, Row, Column, TextArea, Button,ProgressIndicator, ProgressStep } from "carbon-components-svelte";
  import TextLink16 from "carbon-icons-svelte/lib/TextLink16";

  const breakpoints = {
    sm: 8,
  };
  let showSummary = true;

</script>

  <ProgressIndicator currentIndex={2}>
	<ProgressStep
	  complete
	  label="Step 1"
	  description="The progress indicator will listen for clicks on the steps"
	/>
	<ProgressStep
	  complete
	  label="Step 2"
	  description="The progress indicator will listen for clicks on the steps"
	/>
	<ProgressStep
	  complete
	  label="Step 3"
	  description="The progress indicator will listen for clicks on the steps"
	/>
	<ProgressStep
	  label="Step 4"
	  description="The progress indicator will listen for clicks on the steps"
	/>
  </ProgressIndicator>


<Grid padding class="my--grid">
  <Row>
    <Column md sm={breakpoints.sm} class="my--imagePromo-wrapper">
      <TextArea />
    </Column>
    <Column md={1} sm={breakpoints.sm} class="my--line-wrapper">
      <hr class="my--line" />
    </Column>
    <Column md sm={breakpoints.sm} class="my--imagePromo-wrapper">
      <TextArea disabled />
    </Column>
  </Row>
  <Row>

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
  </Row>
</Grid>

<style>
  .my--line {
    border-color: var(--cds-interactive-01);
    animation: pulse 2s ease-in-out infinite alternate;
  }
  :global(.my--line-wrapper) {
    display: flex;
    flex-direction: row;
  }

  @keyframes pulse {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes pulseBorder {
    0% {
      -webkit-filter: drop-shadow(1px 1px 0 var(--cds-interactive-01))
        drop-shadow(-1px -1px 0 var(--cds-interactive-01));
      filter: drop-shadow(1px 1px 0 var(--cds-interactive-01))
        drop-shadow(-1px -1px 0 var(--cds-interactive-01));
    }
    100% {
      -webkit-filter: drop-shadow(1px 1px 0 #ffffff00)
        drop-shadow(-1px -1px 0 #ffffff00);
      filter: drop-shadow(1px 1px 0 #ffffff00)
        drop-shadow(-1px -1px 0 #ffffff00);
    }
  }
</style>
