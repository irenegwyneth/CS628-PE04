import React from 'react';
import './styles.css';

function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button onClick={onDelete} className="delete-button">Delete</button>
    </li>
  );
}

export default TodoItem;
