<script>
  // Components
  import {
    Tabs,
    Tab,
    TabContent,
    Button,
    Search,
  } from "carbon-components-svelte";
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

<Theme />
<main>
  <Tabs bind:selected>
    <Navbar />

    <Tab label="Introduction" />
    <Tab label="Summarizer" />

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

<style>
  main {
    margin-top: 50px;
  }
</style>
