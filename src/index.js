import React from "react";
import ReactDOM from "react-dom";
import CouncilPane from "./council/CouncilPane";
import StatsPane from "./stats/StatsPane";
import Main from "./layout/Main";
import RightColumn from "./layout/RightColumn";
import EventsPane from "./events/EventsPane";

const App = () => {
  return (
    <div>
      <h1>Round Table</h1>
      <Main>
        <StatsPane />
        <RightColumn>
          <CouncilPane />
          <EventsPane />
        </RightColumn>
      </Main>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
