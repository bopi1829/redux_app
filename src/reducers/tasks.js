import { ADD_TASK, DEL_TASK } from "../actions/tasks";
/**
 * {
        id: 0,
        text: action.text,
        deleted: false
    }
 * @param {*} state 
 * @param {*} action 
 */

let taksId = 0;

function tasks(state = [], action) {

    // eslint-disable-next-line default-case
    switch(action.type) {
        case ADD_TASK:
           /*state.push(
               {
                   id: tasksId++,
                   text: action.text,
                   deleted: false
               }
           )
            return state;*/
            return [
                ...state,
                {
                    id: taksId++,
                    text: action.text,
                    deleted: false
                }
            ]
            //
        case DEL_TASK:
            // parcourir le state ([])
            // checher index
            // deleted: true
            return state.map((task, index) => {
                if(index === action.index) {
                    task.deleted = !task.deleted;
                }
                return task;
            })
            //
            default:
                return state
    }
}

export default tasks;
