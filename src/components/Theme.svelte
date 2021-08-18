<script>
  import { onMount, afterUpdate } from "svelte";
  import { theme } from "../stores";
  const key = "theme";
  const themesArr = ["g100", "g90", "g10", "white"];
  const isThemeAvailable = (x) => themesArr.includes(x);
  onMount(() => {
    const savedTheme = localStorage.getItem(key);
    let tmpTheme = themesArr[0];
    if (isThemeAvailable(savedTheme)) {
      tmpTheme = savedTheme;
    } else if (matchMedia("(prefers-color-scheme: light)")?.matches) {
      tmpTheme = themesArr[3];
    }
    theme.set(tmpTheme);
  });
  afterUpdate(() => {
    if (!isThemeAvailable($theme)) return;
    document.documentElement.setAttribute("theme", $theme);
    localStorage.setItem(key, $theme);
  });
</script>

<slot />

<style>
  :global(:root),
  :global(:root[theme="g10"]),
  :global(:root[theme="g100"]),
  :global(:root[theme="g90"]),
  :global(:root[theme="white"]) {
    --cds-body-long-02-line-height: 1.8;
    --cds-interactive-01: #ff3e00;
    --cds-button-primary: #ff3e00;
    --cds-button-primary-hover: #e14900;
    --cds-button-primary-active: #e20000;
    --cds-focus: var(--cds-button-primary);
  }
  :global(button, select, input, textarea) {
    border-radius: 10px;

    outline: none !important;
  }

  /*-----------------------*/ /*-----------------------*/ /*-----------------------*/ /*-----------------------*/ /*-----------------------*/ /*-----------------------*/ /*-----------------------*/ /*-----------------------*/
  :global(.bx--btn) {
    overflow-wrap: anywhere;
    /* Safari & Opera */
    word-break: break-word;
    border-radius: 10px;
    border-width: 2px !important;
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  :global(.bx--btn--primary:hover) {
    background-color: var(--cds-button-primary-hover);
  }
  :global(.bx--btn--primary:focus:active) {
    transform: scale(0.95);
  }
  :global(.bx--btn--primary:focus:active:not(:hover), .bx--btn--primary:focus:hover) {
    background-color: var(--cds-focus);
    border: 2px var(--cds-button-primary-active) solid;
  }


  :global(.bx--switcher__item-link:focus) {
    border: 2px var(--cds-button-primary) solid;
  }
  :global(#main-content) :global(ul) {
    list-style-type: square;
  }
  :global(li) {
    line-height: var(--cds-body-long-02-line-height, 1.5);
  }
  :global(a) {
    color: var(--cds-button-primary);
    line-height: var(--cds-body-long-02-line-height, 1.5);
  }
  :global(:root[theme="g10"]) :global(pre),
  :global(:root[theme="white"]) :global(pre) {
    background-color: var(--cds-ui-03);
  }

  :global(a.bx--side-nav__link[aria-current="page"]::before),
  :global(a.bx--side-nav__link--current::before) {
    background-color: var(--cds-button-primary);
    border-radius: 10px;
  }
  :global(.bx--header__menu-item) {
    outline: none !important;
    background-clip: border-box;
    border: 2px transparent solid !important;

    border-radius: 5px;
  }
  :global([role="menuitem"]:active) {
    border: 2px var(--cds-button-primary-active) solid !important;
  }
  :global([role="search"].active) {
    outline: none !important;
  }
  /*-----------------------*/ /*-----------------------*/ /*-----------------------*/ /*-----------------------*/ /*-----------------------*/ /*-----------------------*/

  /*------------------------------*/
  /*----------------------------*/
  :global(.bx--search-input, .bx--input, [role="search"], .bx--text-area) {
    outline: none !important;
    border: 1px solid transparent;
    border-color: transparent;
    border-bottom: 1px solid var(--cds-ui-04, #8d8d8d);
    border-radius: 10px;
    transition-duration: 300ms;
    transition-property: background-color, border-color, border-radius;
    transition: background-color 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86),
      border-color 230ms cubic-bezier(0.785, 0.135, 0.15, 0.86),
      border-radius 230ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition-delay: 0.2s;
  }
  :global(.bx--header [role="search"]) {
    transition: border-color 300ms ease;
    border-bottom: 2px solid var(--cds-focus);
    transform: scale(0.9);
  }
  :global(.bx--header [role="search"]:hover) {
    border-color: transparent;
  }
  :global([role="search"] [role="combobox"]) {
    border: none !important;
    border-bottom: 1px solid var(--cds-ui-04, #8d8d8d);
  }
  :global(.bx--search-input:hover, [role="search"]:hover, .bx--search:hover, .bx--text-area:hover) {
    background-color: transparent;
    border: 1px solid var(--cds-ui-04, #8d8d8d);
  }
  :global(:root[theme="g10"]) :global(.bx--search-input),
  :global(:root[theme="g10"]) :global([role="search"]),
  :global(:root[theme="white"]) :global(.bx--search-input),
  :global(:root[theme="white"]) :global([role="search"]) {
    background-color: #222222;
  }
  :global(:root[theme="g10"]) :global(.bx--input:hover),
  :global(:root[theme="white"]) :global(.bx--input:hover) {
    background-color: #f1f1f1;
    border-color: #aaa;
  }
  :global(:root[theme="g10"]) :global(.bx--search-input:not(:focus):hover),
  :global(:root[theme="white"]) :global(.bx--search-input:not(:focus):hover) {
    background-color: transparent;

    border-color: #222222;
    border-bottom-color: transparent;
  }
  :global(:root[theme="g10"]) :global([role="search"]:not(:focus):hover),
  :global(:root[theme="white"]) :global([role="search"]:not(:focus):hover) {
    border-color: none;
    background-color: none;
  }

  :global(.bx--search-input:focus, [role="search"]:focus, .bx--input:focus, .bx--text-area:focus) {
    border: 2px solid var(--cds-focus);
    border-bottom-left-radius: 10px;

    border-bottom-right-radius: 10px;
  }
  /*-------------------------*/

  :global([role="combobox"] > button) {
    outline: none !important; /**/
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }
  :global([role="search"].active button) {
    width: 2.5em !important; /**/
    height: 2.5em !important;
    margin: 0.5em;
  }

  :global([role="combobox"] > button:hover) {
    border: 2px solid var(--cds-focus);
  }

  :global(.bx--search-close:focus, .bx--header__action:focus) {
    border: 2px solid var(--cds-focus);
  }

  :global(.bx--search-close:active) {
    background-color: transparent;
    transform: scale(0.8);
  }

  :global(.bx--search-close::before, .bx--search-button::before) {
    display: none;
  }
  /*-------------------------*/
  /*-------------------------*/
  /*-------------------------*/
  /*-------------------------*/
  :global(.spacer) {
    flex-grow: 1;
  }
  :global([slot="tabs"]) {
    display: flex;
    width: 100%;
    margin-inline: 2rem;
    border-radius: 5px;
    border-bottom: 3px solid var(--cds-interactive-01);
    flex-direction: row;
    /* transform: scale(1.1) */
    flex-grow: 2;
  }
  :global(.bx--tabs__nav-item) {
    width: -webkit-fill-available;
    background-color: transparent;
    border-style: solid;
    border-width: 2px;
    flex-grow: 3;
    margin-top: 3px;
    border-radius: 5px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color: var(--cds-ui-03);
    border: none !important;

    transition: all 0.3s ease-in-out, transform 0.5s ease;
  }
  :global(.bx--tabs__nav-link) {
    outline: none !important;
    border: none !important;
    transition: all 0.3s ease-in-out !important;
  }

  :global(.bx--tabs__nav-item:active) {
    transform: scaleX(0.97);
  }
  :global(.bx--tabs__nav-item:hover) {
    border-color: var(--cds-button-primary);
  }
  :global(.bx--tabs__nav-item--selected) {
    border-color: var(--cds-button-primary) !important;
  }

  :global(.bx--tabs__nav-item--selected) {
    background-color: var(--cds-button-primary);
    color: white !important;
  }
  :global(.bx--tabs__nav-item--selected:hover) {
    background-color: var(--cds-button-primary-hover) !important;
  }
</style>
