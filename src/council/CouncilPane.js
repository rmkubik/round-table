import React from "react";
import styled from "styled-components";
import PersonCard from "./PersonCard";
import AddMemberCard from "./AddMemberCard";
import Pane from "../layout/Pane";
import { useAppStateContext } from "../state";

const Row = styled.div`
  display: flex;

  > * {
    margin: 20px;
  }
`;

const FireButton = styled.button`
  color: ${props => props.theme.palette.white};
  background-color: ${props => props.theme.palette.red1};
  border-radius: 2px;
  width: 100%;
  margin-top: 8px;
  padding: 4px;

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
