import { Button, ButtonVariant } from "amvasdev-ui";

const VARIANTS = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
  "neutral",
  "accent",
  "ghost",
  "link",
  "base",
];

const ButtonStory = () => {
  return (
    <div className="flex flex-1 items-center justify-center flex-wrap gap-4">
      {VARIANTS.map((variant) => (
        <Button
          key={variant}
          variant={variant as ButtonVariant}
          className="capitalize min-w-40"
        >
          {variant}
        </Button>
      ))}
    </div>
  );
};

export default ButtonStory;
