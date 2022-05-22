import React from "react";
import './Button.css';
import { useState } from 'react';

export const ToggleButton = ({
    children,
    type,
    id
}) => {
    return (
        <button
        className={`btn--primary`}
        id = {id}
        onClick={() => useState("Next")("newText")}
        type={type}>
            {children}
        </button>
    )
}