import { ChangeEventHandler, FC } from "react";

type InputProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = "",
}) => (
  <label className="block mb-2 font-bold" htmlFor={id}>
    {label}
    <input
      className="block w-full p-2 border border-gray-300 rounded-md text-slate-600 outline-slate-400"
      id={id}
      type="text"
      value={value || ""}
      placeholder={placeholder}
      onChange={onChange}
    />
  </label>
);

export { Input };
