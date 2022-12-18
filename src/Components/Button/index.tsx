import React from "react";
import "./style.css"

interface ButtonProps{
  content:string
}

const Button = (props:ButtonProps) => {
  return (
    <button className="button">
      <span>{props.content}</span>
    </button>
  );
};

export default Button;
