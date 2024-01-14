import { ChangeEventHandler, FC } from "react";

type SelectProps = {
  id: string;
  label: string;
  options: string[];
  selectedValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

const Select: FC<SelectProps> = ({
  id,
  label,
  options,
  selectedValue,
  onChange,
}) => (
  <label className="block mb-2 font-bold" htmlFor={id}>
    {label}
    <div className="relative">
      <select
        className="custom-select w-full h-10 p-2 rounded-md border border-gray-300 bg-white text-slate-600 outline-slate-400 appearance-none"
        id={id}
        onChange={onChange}
        value={selectedValue}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="caret" />
    </div>
  </label>
);

export { Select };
