import { useState } from 'react';
import TodoItem from './todoitem';
import './styles.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">ToDo List App</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task description"
          className="todo-input"
        />
        <button onClick={addTask} className="add-button">Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
