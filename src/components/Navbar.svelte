<script lang="ts">
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    SkipToContent,
    HeaderUtilities,
    HeaderNavMenu,
    HeaderAction,
    Button,
    HeaderPanelDivider,
    HeaderPanelLinks,
    HeaderPanelLink,
  } from "carbon-components-svelte";
  import { theme } from "../stores";
  import Search from "./Search.svelte";
  import RadioButton20 from "carbon-icons-svelte/lib/RadioButton20";
  import Contrast20 from "carbon-icons-svelte/lib/Contrast20";
  import Sun20 from "carbon-icons-svelte/lib/Sun20";
  import Moon20 from "carbon-icons-svelte/lib/Moon20";

  const themes = {
    light: ["g10", "white"],
    dark: ["g90", "g100"],
  };

  function hasContrast(themeName) {
    return ["g90", "g10"].includes(themeName);
  }
  function isDark(themeName) {
    return ["g100", "g90"].includes(themeName);
  }

  function setTheme(toggleTheme = true) {
    let themeType = isDark($theme) ? "dark" : "light";
    let contrastType = hasContrast($theme) ? 0 : 1;
    if (toggleTheme) {
      themeType = themeType === "dark" ? "light" : "dark";
    } else {
      contrastType = contrastType === 1 ? 0 : 1;
    }
    theme.set(themes[themeType][contrastType]);
  }

  // function isExternal(link) {
  // 	const host = 'https://' + $page.host;
  // 	return new URL(link, host).origin !== host;
  // }

  $: contrastIcon = hasContrast($theme) ? RadioButton20 : Contrast20;
  $: themeIcon = isDark($theme) ? Sun20 : Moon20;

  let isOpen = false;

  export let isSideNavOpen;
  export let nav = [
    {
      link: "https://github.com/y330/quicksum",
      name: "GitHub",
    },
  ];
</script>

<Header company="Quick" platformName="Sum" href="/" bind:isSideNavOpen>
  <div slot="skip-to-content">
    <SkipToContent />
  </div>

  <HeaderNav>
    {#if nav.length > 5}
      <HeaderNavMenu text="Pages">
        {#each nav as navItem}
          <HeaderNavItem href={navItem.link} text={navItem.name} />
        {/each}
      </HeaderNavMenu>
    {:else}
      {#each nav as navItem}
        <HeaderNavItem href={navItem.link} text={navItem.name} />
      {/each}
    {/if}
  </HeaderNav>
  <slot />
  <slot name="tabs" />

  <Search />
  <HeaderUtilities>
    <!--*typescript-ignore-->

    <div class="qs--theme-switcher-button">
      <Button
        iconDescription="Toggle Contrast"
        icon={contrastIcon}
        kind="secondary"
        on:click={() => setTheme(false)}
      />
      <Button
        iconDescription="Toggle Theme"
        icon={themeIcon}
        kind="secondary"
        on:click={() => setTheme()}
        tooltipAlignment="end"
      />
    </div>
    <div class="qs--app-menu">
      <HeaderAction bind:isOpen>
        <HeaderPanelLinks>
          {#each nav as navItem}
            <HeaderPanelLink href={navItem.link}>{navItem.name}</HeaderPanelLink
            >
          {/each}
          <HeaderPanelDivider />
          <HeaderPanelLink on:click={() => setTheme(false)}
            >Toggle Contrast</HeaderPanelLink
          >
          <HeaderPanelLink on:click={() => setTheme()}
            >Toggle Theme</HeaderPanelLink
          >
        </HeaderPanelLinks>
      </HeaderAction>
    </div>
  </HeaderUtilities>
</Header>

<style>
  .qs--theme-switcher-button {
    display: none;
    margin-inline: 0.5em !important;
  }
  .qs--app-menu {
    display: inline-flex;
  }

  @media only screen and (min-width: 1056px) {
    .qs--theme-switcher-button {
      display: inline-flex;
    }
    .qs--app-menu {
      display: none;
    }
  }
  @media only screen and (max-width: 425px) {
    :global([slot="tabs"]) {
      display: flex;
      flex-direction: column;
      width: fit-content !important;

      flex-grow: 0 !important;
    }
    :global(.bx--tabs__nav-item) {
      width: fit-content !important;
      flex-grow: 0 !important;
      flex-shrink: 10;
    }
    :global(.spacer) {
      /* width: 25%; */
    }
  }
</style>
