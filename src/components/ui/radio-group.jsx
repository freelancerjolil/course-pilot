export function RadioGroup({ children, ...props }) {
  return (
    <div {...props} className="flex flex-col space-y-2">
      {children}
    </div>
  );
}

export function RadioGroupItem({ value, name, checked, onChange, label }) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 rounded-full border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
}
