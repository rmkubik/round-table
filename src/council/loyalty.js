import { isPositive } from "../utils";

const getHighestStat = person => {
  const { loyalty, ...statsWithoutLoyalty } = person.stats;

  const [highestStat] = Object.entries(statsWithoutLoyalty).reduce(
    (currentHighest, stat) => {
      if (currentHighest[1] > stat[1]) {
        return currentHighest;
      } else {
        return stat;
      }
    }
  );

  return highestStat;
};

console.log(getHighestStat);

const getAttributeOfConcern = person => {
  const highestStat = getHighestStat(person);

  switch (highestStat) {
    case "diplomacy":
      return "population";
    case "economics":
      return "gold";
    case "military":
      return "might";
    default:
      return;
  }
};

const getEffectedAttribute = (decision, effectedAttribute) => {
  return decision.effects.find(
    effect => effect.attribute === effectedAttribute
  );
};

const doesDecisionEffectAttribute = (decision, effectedAttribute) => {
  return getEffectedAttribute(decision, effectedAttribute) !== undefined;
};

const calculateNewLoyalty = (person, decision) => {
  const attributeKey = getAttributeOfConcern(person);
  const { loyalty } = person.stats;

  if (!doesDecisionEffectAttribute(decision, attributeKey)) {
    return loyalty;
  }

  const effectedAttribute = getEffectedAttribute(decision, attributeKey);

  const loyaltyAdjustment = 10;
  if (isPositive(effectedAttribute.value)) {
    return loyalty + loyaltyAdjustment;
  } else {
    return loyalty - loyaltyAdjustment;
  }
};

const updateLoyalty = (state, decision, dispatch) => {
  const { council } = state;

  council.forEach((person, index) => {
    const loyalty = calculateNewLoyalty(person, decision);

    dispatch({
      type: "modifyCouncilMember",
      index,
      modifications: {
        stats: {
          loyalty
        }
      }
    });
  });
};

export { updateLoyalty, getHighestStat };
