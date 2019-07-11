import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import WebFont from "webfontloader";

import CouncilPane from "./council/CouncilPane";
import StatsPane from "./stats/StatsPane";
import Main from "./layout/Main";
import RightColumn from "./layout/RightColumn";
import EventsPane from "./events/EventsPane";
import sheet from "../assets/images/round-table.png";
import SpriteSheet from "./spritesheet/spritesheet";
import { AppStateProvider } from "./state";

WebFont.load({
  google: {
    families: ["Press Start 2P"]
  }
});

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Press Start 2P', sans-serif;
    margin: 0;
  }

  h2 {
    font-size: 2vh;
  }

  h3 {
    font-size: 1.8vh;
  }

  h4 {
    font-size: 1.6vh;
  }

  table, p, li {
    font-size: 1.4vh;
  }
`;

const theme = {
  palette: {
    white: "#ffffff",
    gray1: "#b4b4b4",
    gray2: "#858585",
    gray3: "#5d5d5d",
    gray4: "#3d3d3d",
    gray5: "#272727",
    gray6: "#1b1b1b",
    black: "#131313",
    slate1: "#c7cfdd",
    slate2: "#92a1b9",
    slate3: "#657392",
    slate4: "#424c6e",
    slate5: "#2a2f4e",
    red1: "#ea323c",
    red2: "#c42430",
    red3: "#891e2b",
    red4: "#571c27",
    green1: "green"
  }
};

const spriteSheet = new SpriteSheet({
  sheet,
  width: 8,
  height: 8,
  tileWidth: 16,
  tileHeight: 16
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStateProvider>
        <Main>
          <GlobalStyles />
          <StatsPane spriteSheet={spriteSheet} />
          <RightColumn>
            <CouncilPane spriteSheet={spriteSheet} />
            <EventsPane />
          </RightColumn>
        </Main>
      </AppStateProvider>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
