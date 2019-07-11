import events from "../events/list";
import generatePerson from "../council/generatePerson";
import merge from "lodash/merge";

const removeIndex = (array, index) => [
  ...array.slice(0, index),
  ...array.slice(index + 1)
];

const modifyIndex = (array, index, modifications) => [
  ...array.slice(0, index),
  merge(array[index], modifications),
  ...array.slice(index + 1)
];

function reducer(state, action) {
  switch (action.type) {
    case "adjustStat":
      return {
        ...state,
        realm: {
          ...state.realm,
          [action.attribute]: state.realm[action.attribute] + action.value
        }
      };

    case "modifyCouncilMember":
      return {
        ...state,
        council: modifyIndex(state.council, action.index, action.modifications)
      };

    case "fireCouncilMember":
      return {
        ...state,
        council: removeIndex(state.council, action.index)
      };

    case "addCouncilMember":
      return {
        ...state,
        council: state.council.concat(generatePerson())
      };

    case "setNewEvent":
      return {
        ...state,
        event: events[action.key]
      };
    default:
      throw new Error();
  }
}

export default reducer;
