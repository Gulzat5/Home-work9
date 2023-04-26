import React from "react";
import "./Input.css";
export const Input = (props) => {
  return (
    <div>
      <label className="label" htmlFor={props.id}>
        {props.children}
      </label>
      <input
        className="input"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
