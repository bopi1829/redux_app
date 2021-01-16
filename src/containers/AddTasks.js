import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';

let AddTask = ({ dispatch }) => {
    let input
    return (
        <div>
            <form 
                onSubmit = { e => {
                    e.preventDefault()
                    // eslint-disable-next-line no-undef
                    if(!input.value.trim()) {
                        return;
                    }
                    // eslint-disable-next-line no-undef
                    dispatch(addTask(input.value))
                    // eslint-disable-next-line no-undef
                    input.value = '';
                    // DISPATCH ADDTASKS
                }}
                >
                <input
                    ref = { node => {
                        // eslint-disable-next-line no-undef
                        input = node
                    }}
                />
                <button type = "submit" >Add Tasks</button>
            </form>
        </div>
    )
}

AddTask = connect()(AddTask)

export default AddTask;
