import React from "react";
import './Button.css'


export const Button = ({
    children,
    type,
    onClick,
    id
}) => {
    return (
        <button
        className={`btn--primary`}
        id = {id}
        onClick={onClick}
        type={type}>
            {children}
        </button>
    )
}
