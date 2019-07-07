import React from "react";
import styled from "styled-components";
import PersonCard from "./PersonCard";
import Pane from "../layout/Pane";
import { useAppStateContext } from "../state";

const Row = styled.div`
  display: flex;

  > * {
    margin: 20px;
  }
`;

const CouncilPane = ({ spriteSheet }) => {
  const { state } = useAppStateContext();
  const { council } = state;

  return (
    <Pane>
      <h2>Council</h2>
      <Row>
        {council.map(person => (
          <PersonCard key={person.name} spriteSheet={spriteSheet} {...person} />
        ))}
      </Row>
    </Pane>
  );
};

export default CouncilPane;
