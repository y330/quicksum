<script>
	// UI
	import Typewriter from "svelte-typewriter";
	import { Tile, Grid, Row, Column, ContentSwitcher, Switch} from "carbon-components-svelte";
	// Assets
	// import Logo from "../assets/Logo.svelte";
	import InlineSVG from 'svelte-inline-svg';
	import logo from "../assets/logo-animated.svg";
	// Config
	import Config from "../quickSum.config";
	/*-------------------------------*/
	// main page should be as self-contained as possible
	// to minimize internal project dependencies for easier maintaineance
	$: nav = Config.nav.overwrite;
	let currentYear = new Date().getFullYear();
	// Might be used for more in the future
	const breakpoints = {
	  sm: 8,
	};
	let uses = ["articles", "essays", "You"];
  </script>

  <svelte:head>
	<meta name="og:title" content={Config.title} />
	<title>{Config.title}</title>
  </svelte:head>

  <div class="main">
	<Grid padding class="qs--grid">
	  <Row>
		<Column style="text-align: center;">
		  <!-- <svg
			shape-rendering="auto"
			width="250"
			height="250"
			viewBox="0 0 98 100"
			xmlns="http://www.w3.org/2000/svg"
		  >
			<Logo
			  d={`M41.1,104C32.2,106.3,22.9,102.8,17.7,95.3C14.5,90.9,13.3,85.4,14.2,80C14.4,79.1,14.6,78.3,14.8,77.4L15.3,75.8L16.7,76.8C20,79.2,23.6,81,27.5,82.2L28.5,82.5L28.4,83.5C28.3,84.9,28.7,86.4,29.5,87.6C31.1,89.9,33.9,91,36.6,90.3C37.2,90.1,37.8,89.9,38.3,89.6L65.7,72.1C67.1,71.2,68,69.9,68.3,68.3C68.6,66.7,68.2,65,67.3,63.7C65.7,61.4,62.9,60.4,60.2,61.1C59.6,61.3,59,61.5,58.5,61.8L48,68.5C46.3,69.6,44.4,70.4,42.4,70.9C33.5,73.2,24.2,69.7,19,62.2C15.9,57.8,14.6,52.3,15.6,46.9C16.5,41.7,19.7,37,24.2,34.2L51.6,16.7C53.3,15.6,55.2,14.8,57.2,14.2C66.1,11.9,75.4,15.4,80.6,22.9C83.8,27.3,85,32.8,84.1,38.2C83.9,39.1,83.7,39.9,83.4,40.8L83,42.4L81.6,41.4C78.3,39,74.7,37.2,70.8,36L69.8,35.7L69.9,34.7C70,33.3,69.6,31.8,68.8,30.6C67.2,28.3,64.4,27.3,61.7,28C61.1,28.2,60.5,28.4,60,28.7L32.6,46.2C31.2,47,30.3,48.4,30,50C29.7,51.6,30.1,53.3,31,54.6C32.6,56.9,35.4,57.9,38.1,57.2C38.7,57,39.3,56.8,39.8,56.5L50.3,49.8C52,48.7,53.9,47.9,55.9,47.3C64.8,45,74.1,48.5,79.3,56C82.5,60.4,83.7,65.9,82.8,71.3C81.9,76.5,78.7,81.2,74.2,84L46.8,101.5C45,102.6,43.1,103.5,41.1,104`}
			/>
		  </svg> -->
		  <InlineSVG src={logo} alt="QuickSum Logo" width="250px" />

		  <h1 style="margin-top: 1rem;">Welcome to QuickSum</h1>
		  <h3 class="sub-title">
			<span>Summarization for </span>
			<Typewriter loop={4000} cursor="#ff3e00">
			  {#each uses as use}
				<span>{" "}{use}.</span>
			  {/each}
			</Typewriter>
		  </h3>
				  <slot name="demoButton"></slot>

				  <p>
  fml my computer is slow af
		  </p>
		</Column>
	  </Row>
	</Grid>
	<slot name="tabs"></slot>
	<Grid padding condensed class="qs--grid">
	  <Row>
		<Column md sm={breakpoints.sm}>
		  <Tile class="qs--tile">
			<h2 class="tile--title">Powered by Vite and Svelte</h2>
			<h3>Designed using IBM Carbon Design, with little bit of magic</h3>
			<h4>
			  Eiusmod mollit eiusmod nisi amet proident enim Lorem. Ea non eiusmod
			  aliqua tempor consequat sit non elit vite and svelte.
			</h4>
		  </Tile>
		</Column>
		<Column md sm={breakpoints.sm}>
		  <Tile class="qs--tile">
			<h2 class="tile--title">Quick summariz<b>ation</b></h2>
			<h4>
			  Eiusmod mollit eiusmod nisi amet proident enim Lorem. Ea non eiusmod
			  aliqua tempor consequat sit non elit Summarization.
			</h4>
		  </Tile>
		</Column>
		<Column md sm={breakpoints.sm}>
		  <Tile class="qs--tile"
			><h2 class="tile--title">With text fragment<b>ation</b></h2>
			<h4>
			  Eiusmod cillum consectetur in reprehenderit laborum aliqua est sunt
			  commodo elit est veniam tempor veniam. Occaecat pariatur culpa velit
			  proident commodo ex sunt nulla deserunt et fragmentation.
			</h4></Tile
		  >
		</Column>
		<Column md sm={breakpoints.sm}>
		  <Tile class="qs--tile"
			><h2 class="tile--title">Copy & paste OR use article URL</h2>
			<h4>
			  Ut excepteur incididunt eiusmod est. Veniam sit veniam do sit
			  reprehenderit ea nisi elit sint nostrud lo URL.
			</h4></Tile
		  >
		</Column>
	  </Row>
	</Grid>
	<Grid padding class="qs--grid">
	  <Row>
		<Column md sm={breakpoints.sm} class="qs--imagePromo-wrapper">
		  <img
			class="qs--imagePromo"
			alt="A side by side view of summary to article, allowing you to click on a highlighted part of the summary and the model will attempt to map it to the best match within the original article."
			src="../../../assets/demo2.png"
		  />
		</Column>
		<Column md={1} sm={breakpoints.sm} class="qs--line-wrapper">
		  <hr class="qs--line" />
		</Column>
		<Column md sm={breakpoints.sm} class="qs--imagePromo-wrapper">
		  <img
			class="qs--imagePromo browser"
			alt="QuickSum lets you share links to fragments of the original artical"
			src="../../../assets/demo1.png"
		  />
		</Column>
	  </Row>
	</Grid>


	<footer>

	  (c) 2021{currentYear === 2021 ? "" : " - " + currentYear} -
	  <a class="qs--link" href="https://yonah.ml/">Yonah Aviv</a>
	</footer>
  </div>

  <style>
	:global(.qs--grid) {
	  margin-bottom: 2rem;
	}
	:global(.qs--line-wrapper) {
	  height: 100px;
	}
	:global(.qs--imagePromo-wrapper) {
	  text-align: center;
	}
	:global(.qs--tile) {
	  height: 100%;
	}
	.qs--imagePromo {
	  max-width: 100%;
	  vertical-align: center;
	  height: 100%;
	  animation: pulseBorder 3s ease-in-out infinite alternate;
	  -webkit-filter: drop-shadow(1px 1px 0 var(--cds-interactive-01))
		drop-shadow(-1px -1px 0 var(--cds-interactive-01));
	  filter: drop-shadow(1px 1px 0 var(--cds-interactive-01))
		drop-shadow(-1px -1px 0 var(--cds-interactive-01));
	}
	.qs--imagePromo.browser {
	  animation: pulseBorder 3s ease-in-out infinite alternate-reverse;
	}
	.qs--line {
	  position: relative;
	  width: 1px;
	  height: 100%;
	  top: 50%;
	  border-color: var(--cds-interactive-01);
	  animation: pulse 2s ease-in-out infinite alternate;
	}
	.qs--link {
	  color: var(--cds-interactive-01);
	  text-decoration: none;
	}
	.main {
	  margin-top: 0rem;
	}
	.sub-title {
	  flex-direction: column;
	  display: flex;
	  margin-top: 1rem;
	}
	.tile--title {
	  margin-bottom: 1rem;
	}
	footer {
	  font-weight: bold;
	  text-align: center;
	  padding: 0 2rem 2rem;
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
	/* md */
	@media only screen and (min-width: 673px) {
	  :global(.qs--grid) {
		margin-bottom: 5rem;
	  }
	  :global(.qs--line-wrapper) {
		height: 509px;
	  }
	  .subTitle {
		flex-direction: row;
		justify-content: center;
	  }
	  .qs--line {
		position: relative;
		top: 50%;
		height: 1px;
		animation: grow 2s ease-in-out infinite alternate;
	  }
	  @keyframes grow {
		0% {
		  width: 100%;
		}
		100% {
		  width: 10%;
		}
	  }
	}
  </style>
