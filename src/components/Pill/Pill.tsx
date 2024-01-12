import { FC } from "react";
import { bgColorClasses, textColorClasses } from "./config";

type PillProps = {
  value: string;
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
};

const defaultBgColorClass = bgColorClasses.blue;
const defaultTextColorClass = textColorClasses.blue;

const Pill: FC<PillProps> = ({ value, color = "blue" }) => {
  const bgColorClass = bgColorClasses[color] || defaultBgColorClass;
  const textColorClass = textColorClasses[color] || defaultTextColorClass;

  return (
    <span className={`${bgColorClass} ${textColorClass} px-2 py-1 rounded-md`}>
      {value}
    </span>
  );
};

export { Pill };
