const removeIndex = (array, index) => [
  ...array.slice(0, index),
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

    case "fireCouncilMember":
      return {
        ...state,
        council: removeIndex(state.council, action.index)
      };

    case "addCouncilMember":
      return {
        ...state,
        council: state.council.concat(state.council[0])
      };
    default:
      throw new Error();
  }
}

export default reducer;
