import { Button, useClosableContainer } from "amvasdev-ui";
import { ChevronDown, LucideProps } from "lucide-react";
import { FC, useState, useRef } from "react";
import Link from "../Link";
import clsx from "clsx";

interface NavOpener {
  Icon: FC<LucideProps>;
  text: string;
}

interface NavMenuOption {
  name: string;
  href: string;
}

interface NavMenuProps {
  opener: NavOpener;
  options: NavMenuOption[];
  initialOpen?: boolean;
}

const NavMenu = ({
  opener: { Icon, text },
  options,
  initialOpen = false,
}: NavMenuProps) => {
  const ref = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(initialOpen);
  const close = () => setIsOpen(false);
  const { isClosing, handleClose } = useClosableContainer(ref, close, {
    closeOnClickOutside: false,
    closeTimeout: 180,
  });
  const handleClick = () => {
    if (isOpen) handleClose();
    else setIsOpen(true);
  };

  return (
    <div className="w-full flex flex-col">
      <Button
        variant="ghost"
        onClick={handleClick}
        className="w-full justify-between"
      >
        <span className="flex items-center gap-2 capitalize">
          <Icon size={16} /> {text}
        </span>
        <ChevronDown
          size={20}
          className={clsx("transition-transform", {
            "rotate-180": isOpen,
            "rotate-0": isClosing,
          })}
        />
      </Button>
      {isOpen ? (
        <ul
          className={clsx(
            "w-full flex flex-col ui-animate-scale-down origin-top-left border-l border-solid border-base-content border-opacity-30",
            {
              "ui-animate-scale-up": isClosing,
            }
          )}
          ref={ref}
        >
          {options.map(({ name, href }) => (
            <li key={name}>
              <Link
                className="w-full !justify-start flex"
                variant="ghost"
                href={href}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default NavMenu;
