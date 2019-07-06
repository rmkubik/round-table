import React from "react";
import ReactDOM from "react-dom";
import CouncilPane from "./council/CouncilPane";
import StatsPane from "./stats/StatsPane";
import Main from "./layout/Main";
import RightColumn from "./layout/RightColumn";
import EventsPane from "./events/EventsPane";
import sheet from "../assets/images/round-table.png";
import SpriteSheet from "./spritesheet/spritesheet";

const spriteSheet = new SpriteSheet({
  sheet,
  width: 8,
  height: 8,
  tileWidth: 16,
  tileHeight: 16
});

const App = () => {
  return (
    <div>
      <h1>Round Table</h1>
      <Main>
        <StatsPane spriteSheet={spriteSheet} />
        <RightColumn>
          <CouncilPane spriteSheet={spriteSheet} />
          <EventsPane />
        </RightColumn>
      </Main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
