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
    default:
      throw new Error();
  }
}

export default reducer;
