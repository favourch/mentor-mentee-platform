import React from "react";
import "./input.css";

const Input = ({ type, name, value, onChange }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        ></input>
    );
};

export default Input;
