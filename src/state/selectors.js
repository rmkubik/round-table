const selectCurrentChoices = state => state.event.choices;

const sumStat = (array, property) =>
  array.reduce((total, obj) => total + obj.stats[property], 0);

const selectTotalStats = state => ({
  economics: sumStat(state.council.concat(state.you), "economics"),
  diplomacy: sumStat(state.council.concat(state.you), "diplomacy"),
  military: sumStat(state.council.concat(state.you), "military")
});

export { selectCurrentChoices, selectTotalStats };
