import React from "react";
import styled from "styled-components";
import Pane from "../layout/Pane";
import Card from "../layout/Card";
import PersonCard from "../council/PersonCard";
import { useAppStateContext } from "../state";
import { selectTotalStats } from "../state/selectors";

const StatsPane = ({ spriteSheet }) => {
  const { state } = useAppStateContext();
  const { realm, you, council } = state;
  const totals = selectTotalStats(state);

  return (
    <Pane>
      <h2>Your Highness</h2>

      {/* <PersonCard spriteSheet={spriteSheet} {...you} /> */}

      <Card>
        <h3>{`${you.name} ${you.familyName}`}</h3>
        {spriteSheet.get(you.face.row, you.face.col, 8, "gray1")}
        <h4>Stats</h4>
        <table>
          <tbody>
            <tr>
              <td>Economics</td>
              <td>{you.stats.economics}</td>
              <td>{`(${totals.economics})`}</td>
            </tr>
            <tr>
              <td>Military</td>
              <td>{you.stats.military}</td>
              <td>{`(${totals.military})`}</td>
            </tr>
            <tr>
              <td>Diplomacy</td>
              <td>{you.stats.diplomacy}</td>
              <td>{`(${totals.diplomacy})`}</td>
            </tr>
          </tbody>
        </table>
      </Card>

      {/* <Card>
        <h3
          onClick={() =>
            dispatch({ type: "increment", value: 20, target: "gold" })
          }
        >
          You
        </h3>
        {spriteSheet.get(1, 1, 8, "gray1")}
        <h4>Stats</h4>
        <table>
          <tbody>
            <tr>
              <td>Economics</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Military</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Diplomacy</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
      </Card> */}
      <h3>The Realm</h3>
      {spriteSheet.get(3, 0, 8)}
      <table>
        <tbody>
          <tr>
            <td>Population</td>
            <td>{realm.population}</td>
          </tr>
          <tr>
            <td>Might</td>
            <td>{realm.might}</td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>{realm.gold}</td>
          </tr>
          <tr>
            <td>Honor</td>
            <td>{realm.honor}</td>
          </tr>
        </tbody>
      </table>
    </Pane>
  );
};

export default StatsPane;
