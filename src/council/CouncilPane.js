import React from "react";
import styled from "styled-components";
import Person from "./Person";

const Row = styled.div`
  display: flex;

  > * {
    margin: 20px;
  }
`;

const CouncilPane = () => {
  return (
    <section>
      <h2>Council</h2>
      <Row>
        <Person />
        <Person />
        <Person />
      </Row>
    </section>
  );
};

export default CouncilPane;
