"use client";
import { Input } from "amvasdev-ui";
import { Search } from "lucide-react";
import Link from "next/link";
import { FormEvent, useCallback, useMemo, useState } from "react";
import useComponents from "@/queries/useComponents";
import clsx from "clsx";

const Searchbar = () => {
  const { components } = useComponents();
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  }, []);
  const matchedComponents = useMemo(
    () =>
      components
        .filter(
          ({ name, description, props }) =>
            name.toLowerCase().includes(search.toLowerCase()) ||
            description.toLowerCase().includes(search.toLowerCase()) ||
            Object.keys(props).some((prop) =>
              prop.toLowerCase().includes(search.toLowerCase())
            )
        )
        .slice(0, 5),
    [components, search]
  );

  return (
    <div className="relative w-full max-w-full">
      <Input
        id="search-component"
        placeholder="Search components..."
        variant="ghost"
        leftIcon={<Search size={16} />}
        value={search}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && !!search && matchedComponents.length > 0 ? (
        <div className="absolute shadow-md bg-base-100 rounded-xl flex flex-col w-full max-w-full">
          {matchedComponents.map(({ name, description }, idx) => (
            <Link
              href={`/components/${name.toLowerCase()}`}
              key={name}
              className={clsx(
                "px-4 btn-ghost py-3 flex flex-col gap-1 w-full transition-colors",
                {
                  "rounded-t-xl": idx === 0,
                  "rounded-b-xl": idx === matchedComponents.length - 1,
                }
              )}
            >
              <h3 className="font-semibold">{name}</h3>
              <p className="truncate text-sm">{description}</p>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
