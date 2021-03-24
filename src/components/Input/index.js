import React from "react";

const Input = ({
  id,
  type,
  name,
  placeholder,
  required,
  label,
  min,
  value,
  onChange,
  max,
  autoFocus = false,
  disabled,
}) => {
  return (
    <div className="my-4">
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-gray-600 uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        autoFocus={autoFocus}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
        required={required ? true : false}
      />
    </div>
  );
};

export default Input;
