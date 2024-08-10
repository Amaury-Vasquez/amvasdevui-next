import { ButtonSize, ButtonVariant, getButtonClasses } from "amvasdev-ui";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";

export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

interface LinkProps extends Omit<NextLinkProps, "target"> {
  className?: string;
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  outlined?: boolean;
  // options for anchor target attribute
  target?: LinkTarget;
}

const Link = ({
  children,
  className,
  size,
  variant = "link",
  outlined,
  ...props
}: LinkProps) => {
  return (
    <NextLink
      className={clsx(
        getButtonClasses({
          size,
          variant,
          outlined,
        }),
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
