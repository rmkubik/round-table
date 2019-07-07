import React from "react";
import Card from "../layout/Card";

const ChoiceCard = () => {
  return (
    <Card>
      <h3>Recruit It</h3>
      <img src="https://via.placeholder.com/150" />
      <h4>Requirements</h4>
      <ul>
        <li>10 Diplomacy</li>
        <li>50 Gold</li>
      </ul>
      <h4>Effects</h4>
      <ul>
        <li>-50 Gold</li>
      </ul>
    </Card>
  );
};

export default ChoiceCard;
