import { FC } from "react";

type ResultItemCloseProps = {
  onClick: () => void;
};

const ResultItemClose: FC<ResultItemCloseProps> = ({ onClick }) => (
  <button
    className="text-2xl p-2 h-full w-full text-white rounded-s-sm bg-red-400 hover:bg-red-500"
    type="button"
    onClick={onClick}
  >
    <div className="hover:animate-pulse">X</div>
  </button>
);

export { ResultItemClose };
