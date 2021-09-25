<script lang="ts">
  // Components
  import { Tabs, Tab, TabContent, Button } from "carbon-components-svelte";
  import ArrowRight32 from "carbon-icons-svelte/lib/ArrowRight32";
  import Navbar from "./components/Navbar.svelte";
  // Pages
  import Home from "./pages/Home.svelte";
  import Summarizer from "./pages/Summarizer.svelte";
  // Syles
  import "carbon-components-svelte/css/all.css";
  import Theme from "./components/Theme.svelte";
  /*-------------------*/
  let selected = 0;
</script>

<svelte:head>
  <link rel="icon" href="../favicon.png" />
</svelte:head>
<Theme />
<main class="dark-mode">
  <Tabs bind:selected>
    <Navbar>
      <div class="spacer" />
      <div slot="tabs">
        <Tab label="Home" />
        <Tab label="Summarizer" />
      </div>
    </Navbar>

    <div slot="content">
      <TabContent>
        <Home>
          <div slot="demoButton">
            <Button
              icon={ArrowRight32}
              size="lg"
              on:click={() => (selected = 1)}
              style="margin-top: 3rem">Jump to quick demo</Button
            >
          </div>
        </Home>
      </TabContent>
      <TabContent>
        <div>
          <Summarizer />
        </div>
      </TabContent>
    </div>
  </Tabs>
</main>

<style global>
  /*____Scrollbar____*/
  ::-webkit-scrollbar {
    width: 1.1rem;
    height: 1.1rem;
    background-color: transparent;
    transition: all 500ms ease-in-out;
  }

  :root[theme="g100"]::-webkit-scrollbar {
    background-color: transparent;
  }

  ::-webkit-scrollbar-track:vertical {
    transition: all 500ms ease-in-out;

    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-track:horizontal {
    transition: all 500ms ease-in-out;

    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  :root[theme="g100"]::-webkit-scrollbar-track {
    border-color: rgba(255, 255, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    min-width: 3rem;
    min-height: 3rem;
    background-color: rgba(0, 0, 0, 0.25);
    border: 0 solid transparent;
    border-width: 0.4rem;
    -moz-background-clip: content;
    -webkit-background-clip: content;
    background-clip: content-box;
    border-radius: 1rem;
    transition: border 200ms ease;
    transition-property: all;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
    border-color: transparent;
    cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:active {
    border-width: 0.3rem;
    /* transition: border-width 700ms ease-in-out; */
    background-color: rgba(0, 0, 0, 0.4);
    /* border-color: rgba(0, 0, 0, 0.25); */
  }

  :root[theme="g90"]::-webkit-scrollbar-thumb,
  :root[theme="g100"]::-webkit-scrollbar-thumb,
  :root[theme="g80"]::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.25);
    border-color: transparent;
  }
  ::-webkit-scrollbar-corner {
    background-color: rgba(0, 0, 0, 0);
    border: none;
  }
  ::selection {
    background-color: #ff3e0033;
  }
</style>
