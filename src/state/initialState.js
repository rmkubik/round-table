import events from "../events/list";
import generatePerson from "../council/generatePerson";
import { between } from "../utils";

const initialState = {
  realm: {
    gold: between(100, 300),
    population: between(100, 1000),
    honor: 0,
    might: between(50, 200)
  },
  council: [generatePerson(), generatePerson(), generatePerson()],
  you: generatePerson(),
  event: events.dragon
};

export default initialState;
