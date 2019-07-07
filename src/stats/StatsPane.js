import React from "react";
import styled from "styled-components";
import Pane from "../layout/Pane";
import Card from "../layout/Card";
import PersonCard from "../council/PersonCard";

const StatsPane = ({ spriteSheet, state, dispatch }) => {
  return (
    <Pane>
      <h2>Your Highness</h2>

      <PersonCard spriteSheet={spriteSheet} {...state.you} />

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
      <img src="https://via.placeholder.com/150" />
      <table>
        <tbody>
          <tr>
            <td>Population</td>
            <td>{state.population}</td>
          </tr>
          <tr>
            <td>Might</td>
            <td>{state.might}</td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>{state.gold}</td>
          </tr>
          <tr>
            <td>Honor</td>
            <td>{state.honor}</td>
          </tr>
        </tbody>
      </table>
    </Pane>
  );
};

export default StatsPane;
