import classNames from "classnames";

interface ScreenProps {
  children: React.ReactNode;
  className?: string;
}

export const Screen = ({ children, className }: Readonly<ScreenProps>) => {
  return (
    <div
      className={classNames(
        "w-full h-dvh relative snap-y snap-mandatory overflow-y-scroll",
        className
      )}
    >
      {children}
    </div>
  );
};
