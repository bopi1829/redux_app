import React from "react";
import Task from './task'

const TaskList = ({ tasks, onTasksclick }) => (
    <ul>
        {tasks.map((task, index) => ( 
            <Task key = { index } {...task } onClick = {() => onTasksclick(index)} 
            />
        ))
        }
    </ul>
)

export default TaskList;
