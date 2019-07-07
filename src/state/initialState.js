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
  event: {
    name: "A Dragon Approaches",
    choices: [
      {
        name: "Recruit It",
        requirements: [
          {
            attribute: "gold",
            value: 50
          },
          {
            attribute: "diplomacy",
            value: 15
          }
        ],
        effects: [
          {
            attribute: "gold",
            value: -50
          },
          {
            attribute: "might",
            value: 100
          }
        ]
      },
      {
        name: "Defeat It",
        requirements: [
          {
            attribute: "military",
            value: 25
          },
          {
            attribute: "might",
            value: 300
          }
        ],
        effects: [
          {
            attribute: "honor",
            value: 10
          },
          {
            attribute: "might",
            value: -100
          }
        ]
      },
      {
        name: "Get Eaten",
        requirements: [],
        effects: [
          {
            attribute: "population",
            value: -100
          }
        ]
      }
    ]
  }
};

export default initialState;
