import React from "react";
import styled from "styled-components";

const Main = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
  box-sizing: content-box;
  padding: 10px;
  background-color: ${props => props.theme.palette.slate2};
`;

export default Main;
