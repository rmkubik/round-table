import React, { Fragment } from "react";
import Card from "../layout/Card";
import { useAppStateContext } from "../state";
import styled from "styled-components";
import { isRequirementStatisfied } from "./requirements";

const Requirement = styled.li`
  color: ${props => (props.satisfied ? "inherit" : props.theme.palette.red1)};
`;

const ChoiceCard = ({ name, requirements, effects, index }) => {
  const { state, actions } = useAppStateContext();

  return (
    <Card hover={true} onClick={() => actions.chooseEvent({ index })}>
      <h3>{name}</h3>
      <h4>Requirements</h4>
      <ul>
        {requirements.map(({ attribute, value }) => (
          <Fragment key={attribute}>
            <Requirement
              satisfied={isRequirementStatisfied(state, { attribute, value })}
            >{`${attribute} ${value}`}</Requirement>
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
