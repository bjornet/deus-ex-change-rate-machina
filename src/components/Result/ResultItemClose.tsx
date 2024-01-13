import { FC } from "react";

type ResultItemCloseProps = {
  onClick: () => void;
};

const ResultItemClose: FC<ResultItemCloseProps> = ({ onClick }) => (
  <button
    className="text-2xl p-2 text-white rounded-s-sm absolute left-0 top-0 h-full w-16 align-middle bg-red-400 hover:bg-red-500"
    type="button"
    onClick={onClick}
  >
    <div className="hover:animate-pulse">X</div>
  </button>
);

export { ResultItemClose };
