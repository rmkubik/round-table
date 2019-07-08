import React from "react";
import styled from "styled-components";
import ChoiceCard from "./ChoiceCard";
import Pane from "../layout/Pane";
import Row from "../layout/Row";
import { useAppStateContext } from "../state";

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
