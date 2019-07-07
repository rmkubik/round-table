import React, { Fragment } from "react";
import Card from "../layout/Card";
import { useAppStateContext } from "../state";

const ChoiceCard = ({ name, requirements, effects, index }) => {
  const { actions } = useAppStateContext();

  return (
    <Card onClick={() => actions.chooseEvent({ index })}>
      <h3>{name}</h3>
      <h4>Requirements</h4>
      <ul>
        {requirements.map(({ attribute, value }) => (
          <Fragment key={attribute}>
            <li>{`${attribute} ${value}`}</li>
          </Fragment>
        ))}
      </ul>
      <h4>Effects</h4>
      <ul>
        {effects.map(({ attribute, value }) => (
          <Fragment key={attribute}>
            <li>{`${attribute} ${value}`}</li>
          </Fragment>
        ))}
      </ul>
    </Card>
  );
};

export default ChoiceCard;
