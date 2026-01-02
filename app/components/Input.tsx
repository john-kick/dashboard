type InputProps = {
  name: string;
  title: string;
  placeholder: string;
};

export default function Input({ name, title, placeholder }: InputProps) {
  return (
    <div className="mb-2 flex items-center">
      <label className="mr-3 flex-1">{title}</label>
      <input
        name={name}
        id={name}
        placeholder={placeholder}
        className="bg-slate-800 p-2 rounded"
      />
    </div>
  );
}
