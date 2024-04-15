import React from 'react';

const Checkbox = () => {
  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <span className="inline-block w-5 h-5 border-2 border-gray-700 rounded-md peer-checked:bg-primary peer-checked:border-primary">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-gray-700 rounded-sm opacity-0 transition-opacity peer-checked:opacity-100"></span>
      </span>
    </label>
  );
};

export default Checkbox;