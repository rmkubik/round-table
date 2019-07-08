import { selectAllAttributes } from "../state/selectors";

const isRequirementStatisfied = (state, requirement) => {
  const attributes = selectAllAttributes(state);

  return attributes[requirement.attribute] >= requirement.value;
};

export { isRequirementStatisfied };
