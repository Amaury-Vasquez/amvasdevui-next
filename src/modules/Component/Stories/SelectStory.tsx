import { Select } from "amvasdev-ui";
import { useState } from "react";

const OPTIONS = ["Option 1", "Option 2", "Option 3"];

const SelectStory = () => {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

  return (
    <div className="flex flex-1 items-center justify-center flex-wrap gap-4">
      <div className="w-80">
        <Select
          id="example"
          label="Example Select"
          options={OPTIONS}
          onChange={setSelectedOption}
          value={selectedOption}
          optionsClassName="z-50"
        />
      </div>
    </div>
  );
};

export default SelectStory;
