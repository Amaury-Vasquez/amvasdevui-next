"use client";
import clsx from "clsx";
import {
  BookOpen,
  Box,
  FolderGit2,
  Menu,
  Paintbrush,
  Puzzle,
  X,
} from "lucide-react";
import { useState, useRef } from "react";
import { useMediaQuery, useOnClickOutside } from "usehooks-ts";
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
  const [isOpen, setIsOpen] = useState(false);
  const [willClose, setWillClose] = useState(false);
  const { components } = useComponents();
  const ref = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery("(min-width: 1280px)");

  const open = () => setIsOpen(true);
  const close = () => {
    setWillClose(true);
    setTimeout(() => {
      setIsOpen(false);
      setWillClose(false);
    }, 190);
  };

  useOnClickOutside(ref, () => {
    if (!matches) close();
  });

  return (
    <div
      className={clsx("z-50 transition-colors", {
        "max-xl:bg-black max-xl:h-svh max-xl:w-screen max-xl:fixed max-xl:bg-opacity-30":
          isOpen,
        "bg-opacity-0 transition-opacity": willClose,
      })}
    >
      <div
        className={clsx(
          "flex flex-col origin-left h-fit fixed sm:max-w-80 xl:shadow-md xl:border-r xl:border-solid xl:border-base-content xl:border-opacity-10",
          {
            "w-full animate-appear-from-left shadow-md bg-base-200 border-r border-solid border-base-content border-opacity-10":
              isOpen,
            "animate-disappear-to-left": isOpen && willClose,
          }
        )}
        ref={ref}
      >
        <div className="w-full flex items-center sm:h-[72px] justify-between px-4 py-3">
          <Link
            href="/"
            variant="ghost"
            className={clsx({ "hidden xl:flex xl:w-full": !isOpen })}
          >
            <Paintbrush size={20} />
            AmvasdevUI
          </Link>
          <button
            className="p-2 xl:hidden btn-ghost rounded-full hover:shadow-lg"
            onClick={isOpen ? close : open}
            disabled={willClose}
            key={`${isOpen}-${willClose}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div
          className={clsx(
            "h-svh flex flex-col px-2 shrink-0 sm:w-80 max-w-full overflow-y-auto",
            { "hidden xl:flex": !isOpen }
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
    </div>
  );
};

export default Sidebar;
