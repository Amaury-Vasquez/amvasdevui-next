"use client";
import useComponentByName from "@/queries/useComponentByName";
import { getComponentName } from "@/utils/format";
import { StoryMap } from "./Stories";
import UnknownUsage from "./UnknownUsage";

interface ComponentProps {
  componentName: string;
}

const Component = ({ componentName }: ComponentProps) => {
  const { component, isLoading } = useComponentByName(componentName);

  if (isLoading || !component) return <div>Loading...</div>;

  const { name, description, props } = component;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{getComponentName(name)}</h1>
        <p className="font-medium">{description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Usage</h2>
        {StoryMap[componentName] ?? <UnknownUsage />}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Props</h2>
        <div className="flex flex-col gap-4">
          {Object.keys(props).map((propName) => {
            const {
              description,
              required,
              type,
              default: defaultValue,
            } = props[propName];
            return (
              <div key={propName} className="flex gap-2">
                <h3 className="text-lg font-bold">{propName}</h3>
                <p>{description}</p>
                <p>{required ? "Required" : "Optional"}</p>
                <p>{type}</p>
                <p>{defaultValue}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Component;
