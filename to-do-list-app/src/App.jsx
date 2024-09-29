import React, { useState } from "react";
import "./App.css";

function App() {

  const [tasks, setTasks] = useState([
    { task: "Buy Groceries", dueDate: "October 5", priority: "Medium", status: "Pending" },
    { task: "Pay Utility Bills", dueDate: "October 10", priority: "High", status: "In Progress" },
    { task: "Book Doctor Appointment", dueDate: "October 15", priority: "Medium", status: "Completed" },
    { task: "Exercise (Gym)", dueDate: "October 20", priority: "Low", status: "In Progress" },
    { task: "Call Mom", dueDate: "October 22", priority: "High", status: "Pending" },
    { task: "Clean the House", dueDate: "October 24", priority: "Low", status: "In Progress" },
    { task: "Plan Weekend Trip", dueDate: "October 26", priority: "Medium", status: "Pending" },
    { task: "Read 50 Pages of Book", dueDate: "October 30", priority: "Low", status: "In Progress" }
  ]);

 
  const [showForm, setShowForm] = useState(false);

 
  const [newTask, setNewTask] = useState({
    task: "",
    dueDate: "",
    priority: "Medium",
    status: "Pending"
  });

  const [filter, setFilter] = useState('All Tasks');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

 
  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]); 
    setShowForm(false); 
    setNewTask({ task: "", dueDate: "", priority: "Medium", status: "Pending" }); 
  };

  const filterTasks = () => {
    switch (filter) {
      case 'High Priority':
        return tasks.filter(task => task.priority === 'High');
      case 'Medium Priority':
        return tasks.filter(task => task.priority === 'Medium');
      case 'Low Priority':
        return tasks.filter(task => task.priority === 'Low');
      case 'Completed':
        return tasks.filter(task => task.status === 'Completed');
      case 'Pending':
        return tasks.filter(task => task.status === 'Pending');
      default:
        return tasks; 
    }
  };

  const filteredTasks = filterTasks(); 

  const handleDelete = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };


  const handleEdit = (index) => {
    const taskToEdit = tasks[index];
    setNewTask(taskToEdit);
    setEditIndex(index);
    setShowForm(true); 
  };


  return (
    <div className="App">
      <div className="header">
        <h1 id="site-title">To Do List With Prioritization</h1>
        <button id="add-btn" onClick={() => setShowForm(!showForm)}>Add Task</button>
      </div>


      {showForm && (
        <form className="task-form" onSubmit={handleAddTask}>
          <input
            type="text"
            name="task"
            placeholder="Task Name"
            value={newTask.task}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="dueDate"
            placeholder="Due Date"
            value={newTask.dueDate}
            onChange={handleInputChange}
            required
          />
          <select
            name="priority"
            value={newTask.priority}
            onChange={handleInputChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <select
            name="status"
            value={newTask.status}
            onChange={handleInputChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      )}


      <div className="dropdown">
        <input
          type="text"
          placeholder="Search.."
          id="myInput"
          onKeyUp={() => console.log("Filter function to be implemented")}
        />
        <p className="filter">Filter By:</p>
        <ul className="filter-list">
          <li>
            <button onClick={() => setFilter('All Tasks')}>All Tasks</button>
          </li>
          <li>
            <button onClick={() => setFilter('High Priority')}>High Priority</button>
          </li>
          <li>
            <button onClick={() => setFilter('Medium Priority')}>Medium Priority</button>
          </li>
          <li>
            <button onClick={() => setFilter('Low Priority')}>Low Priority</button>
          </li>
          <li>
            <button onClick={() => setFilter('Completed')}>Completed</button>
          </li>
          <li>
            <button onClick={() => setFilter('Pending')}>Pending</button>
          </li>
        </ul>
      </div>
    
      <div className="table-container">
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
            {filteredTasks.map((task, index) => (
              <tr key={index}>
                <td>{task.task}</td>
                <td>{task.dueDate}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="footer">
        <p>© 2024 Simun. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
