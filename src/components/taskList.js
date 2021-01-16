import React from "react";
import PropTypes from 'prop-types';
import Task from './task'

const TaskList = ({ tasks, onTasksclick }) => (
    <ul>
        {tasks.map((task, index) => (
            <Task key = { index } {...task } onClick = {() => onTasksclick(index)} />
        ))
        }
    </ul>
)

// eslint-disable-next-line react/no-typos
TaskList.PropTypes = {
    tasks: PropTypes.array.isRequired,
    onTasksclick: PropTypes.func.isRequired,
}

export default TaskList;
