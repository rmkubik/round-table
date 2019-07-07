import React from "react";
import styled from "styled-components";
import ChoiceCard from "./ChoiceCard";
import Pane from "../layout/Pane";

const Row = styled.div`
  display: flex;

  > * {
    margin: 20px;
  }
`;

const CouncilPane = ({ event, actions }) => {
  return (
    <Pane>
      <h2>{event.name}</h2>
      <Row>
        {event.choices.map((choice, index) => (
          <ChoiceCard key={index} actions={actions} index={index} {...choice} />
        ))}
      </Row>
    </Pane>
  );
};

export default CouncilPane;
