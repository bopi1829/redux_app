import { combineReducers } from "redux";
import { SET_VISIBILITY_FILTER, VisbilityFilters } from "../actions/tasks";
import tasks from './tasks';

const {SHOW_ALL} = VisbilityFilters;
function VisbilityFilter(state = SHOW_ALL, action) {
    switch(action, type) {
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