import { ChangeEventHandler } from "@node_modules/@types/react";

type InputProps = {
  name: string;
  title: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({
  name,
  title,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div className="mb-2 flex items-center">
      <label className="mr-3 flex-1">{title}</label>
      <input
        name={name}
        id={name}
        placeholder={placeholder}
        className="bg-slate-800 p-2 rounded"
        onChange={onChange}
      />
    </div>
  );
}
