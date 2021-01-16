import React from "react";
import PropTypes from 'prop-types';

const Task = ({ onClick, deleted, text }) => (
    <li onClick = { onClick }
    style = {{
        textDecoration: deleted ? 'line-trough' : 'none'
    }}
    >
        {text }
    </li>
)

// eslint-disable-next-line react/no-typos
Task.PropTypes = {
    onClick: PropTypes.func.isRequired,
    deleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Task;
