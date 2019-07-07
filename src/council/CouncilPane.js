import React from "react";
import styled from "styled-components";
import PersonCard from "./PersonCard";
import Pane from "../layout/Pane";

const Row = styled.div`
  display: flex;

  > * {
    margin: 20px;
  }
`;

const CouncilPane = ({ spriteSheet }) => {
  return (
    <Pane>
      <h2>Council</h2>
      <Row>
        <PersonCard spriteSheet={spriteSheet} />
        <PersonCard spriteSheet={spriteSheet} />
        <PersonCard spriteSheet={spriteSheet} />
      </Row>
    </Pane>
  );
};

export default CouncilPane;
