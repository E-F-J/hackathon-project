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
    margin,
    fontSize
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
         margin,
         fontSize
      }}
    >
    {children}
    </button>
  );
}

export default Button;