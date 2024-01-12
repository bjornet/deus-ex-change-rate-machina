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
    <select
      className="block w-full p-2 border border-gray-300 rounded-md text-slate-600"
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
  </label>
);

export { Select };
