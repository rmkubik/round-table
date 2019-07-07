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

const CouncilPane = () => {
  return (
    <Pane>
      <h2>A Dragon Approaches</h2>
      <Row>
        <ChoiceCard />
        <ChoiceCard />
        <ChoiceCard />
      </Row>
    </Pane>
  );
};

export default CouncilPane;
