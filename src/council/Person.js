import React from "react";
import styled from "styled-components";

const ChoiceCard = () => {
  return (
    <div>
      <h3>David</h3>
      <img src="https://via.placeholder.com/150" />
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
    </div>
  );
};

export default ChoiceCard;
