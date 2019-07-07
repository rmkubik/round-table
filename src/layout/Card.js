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

  ${props => {
    if (props.hover) {
      return `
      cursor: pointer;
      
      &:hover {
        box-shadow: 0 5px 5px ${props.theme.palette.black};
        transform: scale(1.1);
        transition: 0.3s;
      }
      `;
    }
  }}
`;

export default Card;
