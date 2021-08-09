<script>
  // Components
  import { Search } from "carbon-components-svelte";
  import Navbar from "./components/Navbar.svelte";
  // Pages
  import Home from "./pages/Home.svelte";
  // Syles
  import "carbon-components-svelte/css/all.css";
  import Theme from "./components/Theme.svelte";
</script>

<Theme />
<Navbar />
<main>
  <Search />
  <Home />
</main>

<style>
  main {
    margin-top: 50px;
  }
</style>
