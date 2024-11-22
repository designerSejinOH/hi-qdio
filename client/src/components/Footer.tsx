import classNames from "classnames";

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  id: string;
  ref?: React.RefObject<HTMLDivElement>;
}

export const Footer = ({
  children,
  className,
  id,
  ref,
}: Readonly<SectionProps>) => {
  return (
    <div
      className={classNames(
        "w-full min-h-svh h-fit snap-start -z-10",
        className
      )}
      id={id}
      ref={ref}
    >
      {children}
    </div>
  );
};
