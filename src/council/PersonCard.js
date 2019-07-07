import React from "react";
import styled from "styled-components";

import Card from "../layout/Card";

const PersonCard = ({ spriteSheet, name, familyName, stats, face }) => {
  return (
    <Card>
      <h3>{`${name} ${familyName}`}</h3>
      {spriteSheet.get(face.row, face.col, 6, "gray1")}
      <h4>Stats</h4>
      <table>
        <tbody>
          <tr>
            <td>Economics</td>
            <td>{stats.economics}</td>
          </tr>
          <tr>
            <td>Military</td>
            <td>{stats.military}</td>
          </tr>
          <tr>
            <td>Diplomacy</td>
            <td>{stats.diplomacy}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};

export default PersonCard;
