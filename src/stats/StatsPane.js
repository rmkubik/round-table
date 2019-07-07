import React from "react";
import styled from "styled-components";
import Pane from "../layout/Pane";

const StatsPane = ({ spriteSheet }) => {
  return (
    <Pane>
      <h2>You</h2>
      {spriteSheet.get(1, 1, 8)}
      <h3>Stats</h3>
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
