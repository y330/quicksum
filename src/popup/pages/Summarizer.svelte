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
  import axios from "axios";
  // Exports
  /* Component paramters go here */
  /*-------------------------------*/
  let text = `today, the riddle of Heisenberg's role in Nazi Germany during World War II is getting new scrutiny as secret wartime papers and documents are released for the first time. Both defenders and detractors of Heisenberg are claiming important new evidence that bears on the question of his nuclear culpability.

The question of why Hitler failed to build the bomb has long intrigued historians. After all, Germany was the birthplace of modern physics. By the war's inception the Third Reich had industrial might, a head start in atom-bomb theorizing, access to key nuclear materials and some of the world's best scientists, including one, Otto Hahn, who discovered in 1938 that the atom could split, or fission, in a burst of energy.

Indeed, fear of Nazi atomic strides prompted the United States to embark on its own bomb effort.

Mysteriously, the German edge was lost. Although the Nazi regime perfected much innovative war machinery, including robot weapons, jet engines and the first rockets to soar into space, it failed to produce a nuclear weapon or anything close to it. Allied forces sweeping across Europe in 1944 and 1945 discovered only a small, half-hearted German effort to study the possibility of nuclear munitions.

Editors’ Picks

Jennifer Hudson Knew Aretha Franklin. To Play Her, She Had to Learn More.

Why Do American Grocery Stores Still Have an Ethnic Aisle?

‘Reign of Terror’ Brilliantly Traces the Course From 9/11 to President Trump
Continue reading the main story
At the heart of this enigma was Heisenberg, a physicist who early in the century turned science on its head by helping destroy the traditional model of the atom, in which particles moved about the atomic nucleus like planets around the sun. His view was statistical, paradoxical and revolutionary. Speeding electrons were seen as jumping from one orbit to another, in quanta, without passing through the space in between them.

Less than a year after receiving the Nobel Prize for his formulation of quantum mechanics, Heisenberg in 1933 found his cozy scientific world thrown into chaos as Hitler came to power. Heisenberg had always been a German nationalist but never joined the Nazi Party. Although not Jewish himself, he was critical of the regime, especially for firing Jewish professors and trying to ban such "Jewish" science as Einstein's general theory of relativity.

In 1937, Heisenberg was attacked in an SS periodical as a "representative of the Einsteinian spirit" and an enemy of the state who harbored at his side an inordinate number of Jews and foreigners. "All representatives of Judaism in German spiritual life," the article declared, "must be eliminated." A grueling investigation ensued. Heisenberg's home was bugged by the Gestapo, even as Jews and Jewish sympathizers were hauled off to concentration camps.

In an uneasy standoff with the authorities, Heisenberg was eventually allowed to go about his business but was denied his dream -- a promotion to direct the Institute for Theoretical Physics at the University of Munich, where Heisenberg was the chosen successor.

Dr. David C. Cassidy, author of "Uncertainty: the Life and Science of Werner Heisenberg," recently published by Freeman, argues that such abuse set the stage for Heisenberg to try to rehabilitate himself in the eyes of Nazi leaders. "Heisenberg came to regard his personal survival in Nazi Germany as tantamount to the survival of decent physics," Dr. Cassidy writes, leading to moral compromises and "ingratiation with the regime."

With the outbreak of war in 1939, Heisenberg was drafted into Germany's secret effort to perfect an atomic bomb, of which he soon became the scientific head. The Nazis were now, paradoxically, trying to unleash the awesome power Einstein hinted at in his famous equation, E = MC2, which showed the theoretical equivalence of matter and energy.  `;
  let title = "Untitled Article";
  let summary;
  let showSummary = false;
  /*_----------------_*/
  const options = {
    method: "GET",
    url: "https://aylien-text.p.rapidapi.com/summarize",
    params: {
      text: text,
      title: title,
    },
    headers: {
      "x-rapidapi-key": "6c83f25796msh892050008edb63fp1a6386jsn0361a29df677",
      "x-rapidapi-host": "aylien-text.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      summary = response.data;
    })
    .catch(function (error) {
      summary = error;
    });
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
    <span>{summary}Hell</span>
  {:else}
    please enter text
  {/if}
  <CopyButton text="Carbon svelte" feedback="Copied to clipboard" />
</div>

<style>
  div{
    padding: 10px;
  }
</style>