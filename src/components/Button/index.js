import React from "react";

const Button = ({ type, label, onClick, onSubmit }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className="w-full py-3 mt-10 bg-gray-800 rounded-sm
  font-medium text-white uppercase
  focus:outline-none hover:bg-gray-700 hover:shadow-none"
    >
      {label}
    </button>
  );
};

export default Button;
