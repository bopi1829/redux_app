import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import tasksApp from './reducers'
import { addTask, delTask, setVisibilityFilter, VisbilityFilters } from './actions/tasks';

const store = createStore(tasksApp)
console.log("Initial state redux : ", store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTask("Ma première tache"))
store.dispatch(addTask("Allez faire des courses"))
store.dispatch(addTask("Allez se baigner"))

store.dispatch(delTask(0))
store.dispatch(delTask(1))

store.dispatch(setVisibilityFilter(VisbilityFilters.SHOW_ALL))
store.dispatch(setVisibilityFilter(VisbilityFilters.SHOW_DELETED))

unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
