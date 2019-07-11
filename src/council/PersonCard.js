import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import startCase from "lodash/startCase";
import { TweenMax } from "gsap";

import { getHighestStat } from "./loyalty";
import Card from "../layout/Card";
import { isPositive, usePrevious } from "../utils";

const StatRow = styled.tr`
  color: ${props => (props.highest ? props.theme.palette.green1 : "inherit")};
`;

const Stat = ({ person, stat }) => {
  const { stats } = person;

  let statRowRef = useRef(null);
  const prevLoyalty = usePrevious(stats.loyalty);

  useEffect(() => {
    if (stat === "loyalty") {
      TweenMax.to(statRowRef, 0.1, {
        scale: 1.05,
        color: "red",
        repeat: 1,
        ease: "Power1",
        yoyo: true
      });

      const color = isPositive(stats.loyalty - prevLoyalty) ? "green" : "red";

      TweenMax.to(statRowRef, 0.1, {
        color,
        ease: "Power1",
        onComplete: () => {
          TweenMax.to(statRowRef, 1, {
            color: "black",
            ease: "Power1"
          });
        }
      });
    }
  }, [stats.loyalty]);

  return (
    <StatRow
      highest={getHighestStat(person) === stat}
      ref={element => {
        statRowRef = element;
      }}
    >
      <td>{startCase(stat)}</td>
      <td>{stats[stat]}</td>
    </StatRow>
  );
};

const PersonCard = ({ spriteSheet, person }) => {
  const { name, familyName, face } = person;

  return (
    <Card>
      <h3>{`${name} ${familyName}`}</h3>
      {spriteSheet.get(face.row, face.col, 6, "gray1")}
      <h4>Stats</h4>
      <table>
        <tbody>
          <Stat person={person} stat="economics" />
          <Stat person={person} stat="military" />
          <Stat person={person} stat="diplomacy" />
          <Stat person={person} stat="loyalty" />
        </tbody>
      </table>
    </Card>
  );
};

export default PersonCard;
