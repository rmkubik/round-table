const selectCurrentChoices = state => state.event.choices;

const sumStat = (array, property) =>
  array.reduce((total, obj) => total + obj.stats[property], 0);

const selectTotalStats = state => ({
  economics: sumStat(state.council.concat(state.you), "economics"),
  diplomacy: sumStat(state.council.concat(state.you), "diplomacy"),
  military: sumStat(state.council.concat(state.you), "military")
});

const selectAllAttributes = state => {
  const statTotals = selectTotalStats(state);
  const { realm } = state;
  return {
    ...statTotals,
    ...realm
  };
};

export { selectCurrentChoices, selectTotalStats, selectAllAttributes };
