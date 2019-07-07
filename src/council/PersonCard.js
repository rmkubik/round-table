import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: black solid 1px;
  border-radius: 4px;
  padding: 10px;
  background-color: ${props => props.theme.palette.slate1};

  h3 {
    margin: 0;
  }

  h4 {
    margin-top: 16px;
    margin-bottom: 4px;
  }
`;

const PersonCard = ({ spriteSheet }) => {
  return (
    <Card>
      <h3>David</h3>
      {spriteSheet.get(2, 2, 6)}
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
