import names from "../../assets/people/names.yaml";
import familyNames from "../../assets/people/familyNames.yaml";
import { between, pickRandom } from "../utils";

function generatePerson() {
  return {
    name: pickRandom(names),
    familyName: pickRandom(familyNames),
    stats: {
      economics: between(1, 10),
      diplomacy: between(1, 10),
      military: between(1, 10),
      loyalty: between(40, 60)
    },
    face: {
      row: between(0, 2),
      col: between(0, 3)
    }
  };
}

export default generatePerson;
