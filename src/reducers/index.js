import { combineReducers } from "redux";
import { SET_VISIBILITY_FILTER, VisbilityFilters } from "../actions/tasks";
import tasks from './tasks';

// eslint-disable-next-line no-unused-vars
const {SHOW_ALL, SHOW_ACTIVE} = VisbilityFilters;

function VisbilityFilter(state = SHOW_ALL, action) {
    
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

const tasksApp = combineReducers({
    VisbilityFilter,
    tasks,
})

export default tasksApp;
