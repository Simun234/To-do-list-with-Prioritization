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
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>TASK</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Buy Groceries</td>
              <td>October 5</td>
              <td>Medium</td>
              <td>Pending</td>
              <td>
                <button>Edit/Delete</button>
              </td>
            </tr>
            <tr>
              <td>Pay Utility Bills</td>
              <td>October 10</td>
              <td>High</td>
              <td>In Progress</td>
              <td>
                <button>Edit/Delete</button>
              </td>
            </tr>
            <tr>
              <td>Book Doctor Appointment</td>
              <td>October 15</td>
              <td>Medium</td>
              <td>Completed</td>
              <td>
                <button>Edit/Delete</button>
              </td>
            </tr>
            <tr>
              <td>Exercise (Gym)</td>
              <td>October 20</td>
              <td>Low</td>
              <td>In Progress</td>
              <td>
                <button>Edit/Delete</button>
              </td>
            </tr>
            <tr>
              <td>Call Mom</td>
              <td>October 22</td>
              <td>High</td>
              <td>Pending</td>
              <td>
                <button>Edit/Delete</button>
              </td>
            </tr>
            <tr>
              <td>Clean the House</td>
              <td>October 24</td>
              <td>Low</td>
              <td>In Progress</td>
              <td>
                <button>Edit/Delete</button>
              </td>
            </tr>
            <tr>
              <td>Plan Weekend Trip</td>
              <td>October 26</td>
              <td>Medium</td>
              <td>Pending</td>
              <td>
                <button>Edit/Delete</button>
              </td>
            </tr>
            <tr>
              <td>Read 50 Pages of Book</td>
              <td>October 30</td>
              <td>Low</td>
              <td>In Progress</td>
              <td>
                <button>Edit/Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;
