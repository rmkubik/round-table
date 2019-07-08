import React from "react";
import styled from "styled-components";

const Main = styled.main`
  /* display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px; */
  display: flex;
  height: 100vh;
  overflow: scroll;
  padding: 10px;
  background-color: ${props => props.theme.palette.slate2};

  h2 {
    margin-top: 0;
  }
`;

export default Main;
