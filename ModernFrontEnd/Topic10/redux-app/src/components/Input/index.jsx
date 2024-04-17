import React, { useId } from "react";

function Input({ label, ...props }) {
  const id = useId();

  return (
    <div className="mt-4">
      {label && (
        <label htmlFor={id} className="text-base mb-1 text-gray-600">
          {label}
        </label>
      )}
      <input
        id={id}
        className="px-2 mb-1 py-1.5 w-full focus:outline-green-800 placeholder:text-gray-400 rounded-lg border border-gray-400 text-base text-gray-900"
        {...props}
      />
    </div>
  );
}

export default Input;
