const chooseEvent = dispatch => (state, action) => {
  dispatch({
    type: "adjustStat",
    attribute: action.attribute,
    value: action.value
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
