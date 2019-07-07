import React from "react";
import styled from "styled-components";
import ChoiceCard from "./ChoiceCard";
import Pane from "../layout/Pane";
import { useAppStateContext } from "../state";

const Row = styled.div`
  display: flex;

  > * {
    margin: 20px;
  }
`;

const EventsPane = () => {
  const { state } = useAppStateContext();
  const { event } = state;

  return (
    <Pane>
      <h2>{event.name}</h2>
      <Row>
        {event.choices.map((choice, index) => (
          <ChoiceCard key={index} index={index} {...choice} />
        ))}
      </Row>
    </Pane>
  );
};

export default EventsPane;
