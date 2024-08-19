import { RadioGroup, RadioOption } from "amvasdev-ui";
import { useState } from "react";

const OPTIONS: RadioOption[] = [
  {
    label: "Option 1",
    id: "option-1",
    name: "option1",
  },
  {
    label: "Option 2",
    id: "option-2",
    name: "option2",
  },
  {
    label: "Option 3",
    id: "option-3",
    name: "option3",
  },
  {
    label: "Option 4",
    id: "option-4",
    name: "option4",
  },
];

const RadioGroupStory = () => {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

  return (
    <RadioGroup
      id="radio-group"
      variant="primary"
      options={OPTIONS}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
};

export default RadioGroupStory;
