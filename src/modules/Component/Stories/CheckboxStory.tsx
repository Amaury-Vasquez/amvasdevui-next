import { Checkbox } from "amvasdev-ui";

const CHECKBOX_VARIANTS = [
  "primary",
  "secondary",
  "accent",
  "success",
  "warning",
  "info",
  "error",
  "base",
];

const CheckboxStory = () => {
  return (
    <div className="flex flex-1 items-center justify-center flex-wrap gap-4">
      {CHECKBOX_VARIANTS.map((variant) => (
        <Checkbox
          key={variant}
          // @ts-ignore
          variant={variant}
          label={variant}
          defaultChecked
        />
      ))}
    </div>
  );
};

export default CheckboxStory;
