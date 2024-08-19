import { Dropdown } from "amvasdev-ui";
import Link from "next/link";

const DropdownStory = () => {
  return (
    <div className="flex flex-1 items-center justify-center flex-wrap gap-4">
      <Dropdown triggerElement="Button">
        <div className="flex min-w-80 flex-col p-4">
          <span>You can include any kind of content here</span>
        </div>
      </Dropdown>
    </div>
  );
};

export default DropdownStory;
