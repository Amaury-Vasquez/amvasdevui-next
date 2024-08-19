"use client";
import clsx from "clsx";
import useComponentByName from "@/queries/useComponentByName";
import { getComponentName } from "@/utils/format";
import { StoryMap } from "./Stories";
import UnknownUsage from "./UnknownUsage";

const TABLE_HEADERS = [
  "Name",
  "Description",
  "Prop type",
  "Required",
  "Default",
];

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
        <h2 className="text-xl font-bold">Example</h2>
        {StoryMap[componentName] ?? <UnknownUsage />}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Props</h2>
        <div className="overflow-x-auto shadow-lg border border-solid border-base-300 rounded-lg">
          <table className="w-full table table-lg" border={1}>
            <thead>
              <tr>
                {TABLE_HEADERS.map((header, idx) => (
                  <th
                    key={header}
                    className={clsx(
                      "font-bold text-secondary text-sm border-b border-solid border-base-300 text-left",
                      { "border-r": idx !== TABLE_HEADERS.length - 1 }
                    )}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(props).map((propName, idx) => {
                const {
                  description,
                  required,
                  type,
                  default: defaultValue,
                } = props[propName];
                const len = Object.keys(props).length;
                return (
                  <tr key={propName}>
                    <td
                      className={clsx(
                        "font-semibold text-sm border-solid border-base-300 text-left border-r",
                        {
                          "border-b": idx !== len - 1,
                        }
                      )}
                    >
                      {propName}
                    </td>
                    <td
                      className={clsx(
                        "font-normal text-sm border-solid border-base-300 text-left border-r",
                        {
                          "border-b": idx !== len - 1,
                        }
                      )}
                    >
                      {description}
                    </td>
                    <td
                      className={clsx(
                        "font-semibold text-sm border-solid border-base-300 text-left border-r",
                        {
                          "border-b": idx !== len - 1,
                        }
                      )}
                    >
                      {type}
                    </td>
                    <td
                      className={clsx(
                        "font-semibold text-accent text-sm border-solid border-base-300 text-left border-r",
                        {
                          "border-b": idx !== len - 1,
                        }
                      )}
                    >
                      {required ? "true" : "false"}
                    </td>
                    <td
                      className={clsx(
                        "font-semibold text-accent text-sm text-left",
                        {
                          "border-b border-solid border-base-300":
                            idx !== len - 1,
                        }
                      )}
                    >
                      {defaultValue}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Component;
