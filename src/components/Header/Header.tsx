import { FC } from "react";

type HeaderProps = {
  title: string;
  tag: string;
};

const Header: FC<HeaderProps> = ({ title, tag }) => (
  <header className="bg-slate-900 px-8 py-4 shadow-inner">
    <h1 className="text-yellow-300 text-xl font-bold">{title}</h1>
    <small className="text-yellow-100">{tag}</small>

    {/**
     * @note This is psuedo code. It's here to demonstrate how we could change the main date;
     * - if a user do, we will ask for rates on /historical istead of /latest
     * - storage and in memory cache should note have to change to much
     */}
    <input
      id="amount"
      className="block w-fit p-2 border border-gray-300 rounded-md text-slate-600 absolute top-4 right-4 text-sm"
      placeholder="Date e.g. 2017-06-13"
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
      onChange={() => {}}
      value={new Date().toISOString().split("T")[0]}
    />
  </header>
);

export { Header };
