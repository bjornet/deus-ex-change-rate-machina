import { FC } from "react";

type HeaderProps = {
  title: string;
  tag: string;
};

const Header: FC<HeaderProps> = ({ title, tag }) => (
  <header className="bg-slate-900 px-8 py-4 shadow-inner">
    <h1 className="text-yellow-300 text-xl font-bold">{title}</h1>
    <small className="text-yellow-100">{tag}</small>
  </header>
);

export { Header };
