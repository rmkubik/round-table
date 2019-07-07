import React from "react";
import Card from "../layout/Card";

const ChoiceCard = ({ name, requirements, effects }) => {
  return (
    <Card>
      <h3>{name}</h3>
      <h4>Requirements</h4>
      <ul>
        {requirements.map(({ attribute, value }) => (
          <>
            <li>{`${attribute} ${value}`}</li>
          </>
        ))}
      </ul>
      <h4>Effects</h4>
      <ul>
        {effects.map(({ attribute, value }) => (
          <>
            <li>{`${attribute} ${value}`}</li>
          </>
        ))}
      </ul>
    </Card>
  );
};

export default ChoiceCard;
