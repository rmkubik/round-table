import React from "react";
import styled from "styled-components";
import Pane from "../layout/Pane";
import Card from "../layout/Card";

const StatsPane = ({ spriteSheet }) => {
  return (
    <Pane>
      <h2>Your Highness</h2>
      <Card>
        <h3>You</h3>
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
      </Card>
      <h3>The Realm</h3>
      <img src="https://via.placeholder.com/150" />
      <table>
        <tbody>
          <tr>
            <td>Population</td>
            <td>600</td>
          </tr>
          <tr>
            <td>Soldiers</td>
            <td>120</td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>85</td>
          </tr>
        </tbody>
      </table>
    </Pane>
  );
};

export default StatsPane;
