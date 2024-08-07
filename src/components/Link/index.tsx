import { ButtonSize, ButtonVariant, getButtonClasses } from "amvasdev-ui";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import clsx from "clsx";

interface LinkProps extends NextLinkProps {
  className?: string;
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  outlined?: boolean;
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
