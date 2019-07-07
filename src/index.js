import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import CouncilPane from "./council/CouncilPane";
import StatsPane from "./stats/StatsPane";
import Main from "./layout/Main";
import RightColumn from "./layout/RightColumn";
import EventsPane from "./events/EventsPane";
import sheet from "../assets/images/round-table.png";
import SpriteSheet from "./spritesheet/spritesheet";

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
    slate5: "#2a2f4e"
  }
};

const spriteSheet = new SpriteSheet({
  sheet,
  width: 8,
  height: 8,
  tileWidth: 16,
  tileHeight: 16
});

const initialState = {
  gold: 0,
  population: 100,
  honor: 0,
  might: 20,
  council: [
    {
      name: "Richard",
      familyName: "Lovelace",
      stats: {
        economics: 3,
        diplomacy: 3,
        military: 2
      },
      face: {
        row: 0,
        col: 1
      }
    },
    {
      name: "Elton",
      familyName: "Vaporweave",
      stats: {
        economics: 4,
        diplomacy: 3,
        military: 5
      },
      face: {
        row: 2,
        col: 0
      }
    },
    {
      name: "David",
      familyName: "Wintertoes",
      stats: {
        economics: 2,
        diplomacy: 7,
        military: 1
      },
      face: {
        row: 2,
        col: 2
      }
    }
  ],
  you: {
    name: "Dianne",
    familyName: "Wintertoes",
    stats: {
      economics: 6,
      diplomacy: 3,
      military: 2
    },
    face: {
      row: 1,
      col: 2
    }
  },
  event: {
    name: "A Dragon Approaches",
    choices: [
      {
        name: "Recruit It",
        requirements: [
          {
            attribute: "gold",
            value: 50
          },
          {
            attribute: "diplomacy",
            value: 15
          }
        ],
        effects: [
          {
            attribute: "gold",
            value: -50
          },
          {
            attribute: "might",
            value: 100
          }
        ]
      }
    ]
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { [action.target]: state[action.target] + action.value };
    case "decrement":
      return { [action.target]: state[action.target] - action.value };
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <StatsPane
          spriteSheet={spriteSheet}
          state={state}
          dispatch={dispatch}
        />
        <RightColumn>
          <CouncilPane spriteSheet={spriteSheet} council={state.council} />
          <EventsPane event={state.event} />
        </RightColumn>
      </Main>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
