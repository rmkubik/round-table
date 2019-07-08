import React from "react";
import styled from "styled-components";
import PersonCard from "./PersonCard";
import AddMemberCard from "./AddMemberCard";
import Pane from "../layout/Pane";
import Row from "../layout/Row";
import { useAppStateContext } from "../state";

const FireButton = styled.button`
  color: ${props => props.theme.palette.slate1};
  background-color: ${props => props.theme.palette.red1};
  border-color: ${props => props.theme.palette.red3};
  border-width: 4px;
  border-radius: 2px;
  width: 100%;
  margin-top: 8px;
  padding: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 3px ${props => props.theme.palette.black};
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const CouncilPane = ({ spriteSheet }) => {
  const { state, actions } = useAppStateContext();
  const { council } = state;

  return (
    <Pane>
      <h2>Council</h2>
      <Row>
        {council.map((person, index) => (
          <div key={index}>
            <PersonCard spriteSheet={spriteSheet} {...person} />
            <FireButton onClick={() => actions.fireCouncilMember({ index })}>
              Fire
            </FireButton>
          </div>
        ))}
        <AddMemberCard />
      </Row>
    </Pane>
  );
};

export default CouncilPane;
