import { FC, PropsWithChildren } from "react";

type PillProps = PropsWithChildren<{
  color:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";
}>;

const Pill: FC<PillProps> = ({ children, color = "blue" }) => (
  <span className={`p-2 bg-${color}-400`}>{children}</span>
);

export { Pill };
