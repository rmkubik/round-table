import React from "react";
import styled from "styled-components";
import ChoiceCard from "./ChoiceCard";

const Row = styled.div`
  display: flex;

  > * {
    margin: 20px;
  }
`;

const CouncilPane = () => {
  return (
    <section>
      <h2>A Dragon Approaches</h2>
      <Row>
        <ChoiceCard />
        <ChoiceCard />
        <ChoiceCard />
      </Row>
    </section>
  );
};

export default CouncilPane;
