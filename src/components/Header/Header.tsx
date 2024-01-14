import { FC } from "react";

type HeaderProps = {
  title: string;
  tag: string;
};

const Header: FC<HeaderProps> = ({ title, tag }) => (
  <header className="bg-slate-900 px-8 py-4 shadow-inner grid gap-4 grid-cols-[auto_1fr] items-center md:grid-cols-[auto_1fr_auto]">
    <img src="/logo.jpeg" alt="logo" className="w-16 rounded-full" />
    <div>
      <h1 className="text-yellow-300 text-xl font-bold">{title}</h1>
      <small className="text-yellow-100">{tag}</small>
    </div>

    {/**
     * @note This is psuedo code. It's here to demonstrate how we could change the main date;
     * - if a user do, we will ask for rates on /historical istead of /latest
     * - storage and in memory cache should note have to change to much
     */}
    <input
      id="amount"
      className="block w-fit p-2 border border-gray-300 rounded-md text-slate-600 text-sm col-span-2 md:col-span-1"
      placeholder="Date e.g. 2017-06-13"
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
      onChange={() => {}}
      value={new Date().toISOString().split("T")[0]}
    />
  </header>
);

export { Header };
