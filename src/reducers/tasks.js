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

function tasks(state = [], action) {

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
                    id: 0,
                    text: action.text,
                    deleted: false
                }
            ]
            //
        case DEL_TASK:
            // parcourir le state ([])
            // checher index
            // deleted: true
            state.map((task, index) => {
                if(index === action.index) {
                    task.deleted = true;
                }
                return task;
            })
            //
    }
}