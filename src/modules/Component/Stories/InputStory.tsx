import { Input, PasswordInput } from "amvasdev-ui";

const InputStory = () => {
  return (
    <div className="flex flex-1 items-center justify- flex-wrap gap-4">
      <div className="w-80">
        <Input
          id="example"
          placeholder="Type something..."
          label="Example text Input"
          autoComplete="off"
        />
      </div>
      <div className="w-80">
        <PasswordInput
          id="example-password"
          placeholder="*******"
          label="Password Input"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default InputStory;
