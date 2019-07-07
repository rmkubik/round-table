import { selectCurrentChoices, selectTotalStats } from "./selectors";

const pickNewEvent = (dispatch, state) => ({ key }) => {
  dispatch({
    type: "setNewEvent",
    key
  });
};

const addCouncilMember = (dispatch, state) => () => {
  dispatch({
    type: "addCouncilMember"
  });
};

const fireCouncilMember = (dispatch, state) => ({ index }) => {
  dispatch({
    type: "fireCouncilMember",
    index
  });
};

const chooseEvent = (dispatch, state) => ({ index }) => {
  const choices = selectCurrentChoices(state);
  const { requirements, effects } = choices[index];

  const statTotals = selectTotalStats(state);
  const { realm } = state;
  const attributes = {
    ...statTotals,
    ...realm
  };
  const areAllRequirementsMet = requirements.every(
    requirement => attributes[requirement.attribute] >= requirement.value
  );

  if (areAllRequirementsMet) {
    effects.forEach(effect => {
      dispatch({
        type: "adjustStat",
        attribute: effect.attribute,
        value: effect.value
      });
    });
  }
};

const adjustStat = (dispatch, state) => ({ attribute, value }) => {
  dispatch({
    type: "adjustStat",
    attribute,
    value
  });
};

export default {
  chooseEvent,
  adjustStat,
  fireCouncilMember,
  addCouncilMember
};
