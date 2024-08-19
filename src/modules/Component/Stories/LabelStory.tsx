import { Label } from "amvasdev-ui";

const LabelStory = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold">Label to add to a custom Input</span>
      <div className="mx-auto flex flex-col w-80 items-center">
        <Label htmlFor="input">Label for unstyled input</Label>
        <input id="input" type="checkbox" />
      </div>
    </div>
  );
};

export default LabelStory;
