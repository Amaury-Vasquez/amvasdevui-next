"use client";
import clsx from "clsx";
import {
  BookOpen,
  Box,
  FolderGit2,
  Menu,
  Paintbrush,
  Puzzle,
} from "lucide-react";
import { useToggle } from "usehooks-ts";
import Link from "@/components/Link";
import { GITHUB_URL, NPM_URL, PORTFOLIO_URL } from "@/constants/links";
import useComponents from "@/queries/useComponents";
import { getComponentName } from "@/utils/format";
import NavMenu from "./NavMenu";

const DOCS = [
  { name: "Install", href: "/docs/install" },
  { name: "Getting Started", href: "/docs/getting-started" },
  { name: "Theming", href: "/docs/theming" },
  { name: "Utilities", href: "/docs/utilities" },
];

const Sidebar = () => {
  const [isOpen, toggle] = useToggle(false);
  const { components } = useComponents();

  return (
    <div
      className={clsx(
        "flex flex-col h-fit fixed sm:max-w-80 z-30 lg:shadow-md lg:border-r lg:border-solid lg:border-base-content lg:border-opacity-10",
        {
          "w-full shadow-md bg-base-200 border-r border-solid border-base-content border-opacity-10":
            isOpen,
        }
      )}
    >
      <div
        className={clsx(
          "w-full flex items-center sm:h-[72px] justify-between px-4 py-3",
          {}
        )}
      >
        <Link
          href="/"
          variant="ghost"
          className={clsx({ "hidden lg:flex lg:w-full": !isOpen })}
        >
          <Paintbrush size={20} />
          AmvasdevUI
        </Link>
        <button
          className="p-2 lg:hidden btn-ghost rounded-full hover:shadow-lg"
          onClick={toggle}
        >
          <Menu size={24} />
        </button>
      </div>
      <div
        className={clsx(
          "h-svh flex flex-col px-2 shrink-0 sm:w-80 max-w-full overflow-y-auto",
          { "hidden lg:flex": !isOpen }
        )}
      >
        <NavMenu
          opener={{ Icon: BookOpen, text: "docs" }}
          options={DOCS}
          initialOpen
        />
        <NavMenu
          opener={{ Icon: Puzzle, text: "components" }}
          options={components.map(({ name }) => ({
            name: getComponentName(name),
            href: `/components/${name.toLowerCase()}`,
          }))}
        />
        <div className="flex flex-col">
          <Link
            variant="ghost"
            href={GITHUB_URL}
            className="!justify-start"
            target="_blank"
          >
            <FolderGit2 size={16} /> Github
          </Link>
          <Link
            variant="ghost"
            href={NPM_URL}
            className="!justify-start"
            target="_blank"
          >
            <Box size={16} />
            Npm
          </Link>
        </div>
        <div className="flex h-full">
          <Link
            href={PORTFOLIO_URL}
            className="text-sm w-full text-base-content no-underline"
            target="_blank"
          >
            @amvasdev
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
