import { twMerge } from "tailwind-merge";

export function GridContainer({ children, className }) {
  const defaultClass = "w-full mx-auto max-w-grid px-3";
  const combinedClass = twMerge(defaultClass, className);
  return (
    <>
      <div className={combinedClass}>{children}</div>
    </>
  );
}
