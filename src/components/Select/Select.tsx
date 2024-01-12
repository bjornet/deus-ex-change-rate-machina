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
    <div className="block w-full pr-2 border rounded-md border-gray-300 bg-white text-slate-600">
      <select
        className="w-full h-10 p-2 rounded-md outline-none"
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
    </div>
  </label>
);

export { Select };
