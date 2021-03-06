import React from "react";

const Link = ({ active, children, onClick }) => (
    <button 
        onClick = { onClick }
        disabled = { active }
        style = {{ marginLeft: '5px' }}
        >
        { children }
    </button>
)

export default Link;
