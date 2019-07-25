import {
  selectCurrentChoices,
  selectAllAttributes,
  selectCouncilMembersWithLoyaltyBelowThreshold
} from "./selectors";
import events from "../events/list";
import { pickRandom, isPositive } from "../utils";
import { isRequirementStatisfied } from "../events/requirements";
import { updateLoyalty } from "../council/loyalty";

const pickNewEvent = (dispatch, state) => ({ key }) => {
  dispatch({
    type: "setNewEvent",
    key
  });
};

const councilMemberHireCost = 100;
const addCouncilMember = (dispatch, state) => () => {
  if (
    isRequirementStatisfied(state, {
      attribute: "gold",
      value: councilMemberHireCost
    })
  ) {
    dispatch({
      type: "adjustStat",
      attribute: "gold",
      value: -councilMemberHireCost
    });
    dispatch({
      type: "addCouncilMember"
    });
  }
};

const fireCouncilMember = (dispatch, state) => ({ index }) => {
  dispatch({
    type: "fireCouncilMember",
    index
  });
};

const executeChoiceEffects = (effects, dispatch) => {
  effects.forEach(effect => {
    dispatch({
      type: "adjustStat",
      attribute: effect.attribute,
      value: effect.value
    });
  });
};

const chooseEvent = (dispatch, state) => ({ index }) => {
  const choices = selectCurrentChoices(state);
  const { requirements, effects } = choices[index];

  const areAllRequirementsMet = requirements.every(requirement =>
    isRequirementStatisfied(state, requirement)
  );

  if (areAllRequirementsMet) {
    executeChoiceEffects(effects, dispatch);

    updateLoyalty(state, choices[index], dispatch);

    if (selectCouncilMembersWithLoyaltyBelowThreshold(state, 15).length > 0) {
      dispatch({
        type: "setNewEvent",
        key: "councilMemberResigned"
      });
    } else {
      dispatch({
        type: "setNewEvent",
        key: pickRandom(Object.keys(events))
      });
    }
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
  addCouncilMember,
  pickNewEvent
};
