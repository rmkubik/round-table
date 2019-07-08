import events from "../events/list";
import generatePerson from "../council/generatePerson";

const initialState = {
  realm: {
    gold: 0,
    population: 100,
    honor: 0,
    might: 20
  },
  council: [generatePerson(), generatePerson(), generatePerson()],
  you: generatePerson(),
  event: events.dragon
};

export default initialState;
