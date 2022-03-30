import React from "react";

const Button = ({ 
    display,
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width,
    margin
  }) => { 
  return (
    <button
      onClick={onClick}
      style={{
         display,
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width,
         margin
      }}
    >
    {children}
    </button>
  );
}

export default Button;