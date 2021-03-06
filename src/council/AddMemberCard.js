import React from "react";
import styled from "styled-components";

import Card from "../layout/Card";
import { useAppStateContext } from "../state";

const PlusIcon = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const AddMemberCard = () => {
  const { actions } = useAppStateContext();

  return (
    <div>
      <Card hover={true} onClick={() => actions.addCouncilMember()}>
        <PlusIcon>+</PlusIcon>
      </Card>
      <p>-100 gold</p>
    </div>
  );
};

export default AddMemberCard;
