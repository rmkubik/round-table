import styled from "styled-components";

const Card = styled.div`
  border: black solid 1px;
  border-radius: 4px;
  padding: 25px;
  background-color: ${props => props.theme.palette.slate1};

  h3 {
    margin-top: 0;
    margin-bottom: 8px;
  }

  h4 {
    margin-top: 16px;
    margin-bottom: 4px;
  }
`;

export default Card;
