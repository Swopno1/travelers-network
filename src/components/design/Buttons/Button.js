import React from 'react';

const Button = ({ text, className }) => {
  return (
    <button
      className={`w-36 h-12 font-avenir text-light1 rounded-md ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
