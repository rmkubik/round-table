import React from "react";
import styled from "styled-components";

import Card from "../layout/Card";

const PersonCard = ({ spriteSheet }) => {
  return (
    <Card>
      <h3>David</h3>
      {spriteSheet.get(2, 2, 6, "gray1")}
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
  );
};

export default PersonCard;
