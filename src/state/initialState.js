import events from "../events/list";

const initialState = {
  realm: {
    gold: 0,
    population: 100,
    honor: 0,
    might: 20
  },
  council: [
    {
      name: "Richard",
      familyName: "Lovelace",
      stats: {
        economics: 3,
        diplomacy: 3,
        military: 2,
        loyalty: 50
      },
      face: {
        row: 0,
        col: 1
      }
    },
    {
      name: "Elton",
      familyName: "Vaporweave",
      stats: {
        economics: 4,
        diplomacy: 3,
        military: 5,
        loyalty: 50
      },
      face: {
        row: 2,
        col: 0
      }
    },
    {
      name: "David",
      familyName: "Wintertoes",
      stats: {
        economics: 2,
        diplomacy: 7,
        military: 1,
        loyalty: 50
      },
      face: {
        row: 2,
        col: 2
      }
    }
  ],
  you: {
    name: "Dianne",
    familyName: "Wintertoes",
    stats: {
      economics: 6,
      diplomacy: 3,
      military: 2
    },
    face: {
      row: 1,
      col: 2
    }
  },
  event: events.dragon
};

export default initialState;
