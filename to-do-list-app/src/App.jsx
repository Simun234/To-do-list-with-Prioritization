import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 id="site-title">To Do List With Prioritization</h1>
        <button id="add-btn"> Add Task</button>
      </div>
      <div className="dropdown">
        <input
          type="text"
          placeholder="Search.."
          id="myInput"
          onkeyup="filterFunction()"
        />
        <p className="filter">Filter By:</p>
        <ul className="filter-list">
          <li>
            <button onClick="filterTasks('all')">All Tasks</button>
          </li>
          <li>
            <button onClick="filterTasks('high')">High Priority</button>
          </li>
          <li>
            <button onClick="filterTasks('medium')">Medium Priority</button>
          </li>
          <li>
            <button onClick="filterTasks('low')">Low Priority</button>
          </li>
          <li>
            <button onClick="filterTasks('completed')">Completed</button>
          </li>
          <li>
            <button onClick="filterTasks('pending')">Pending</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default App;
