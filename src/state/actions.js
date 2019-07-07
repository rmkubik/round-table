import { selectCurrentChoices } from "./selectors";

const chooseEvent = (dispatch, state) => ({ index }) => {
  const choices = selectCurrentChoices(state);
  const { requirements, effects } = choices[index];

  effects.forEach(effect => {
    dispatch({
      type: "adjustStat",
      attribute: effect.attribute,
      value: effect.value
    });
  });
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
  adjustStat
};
