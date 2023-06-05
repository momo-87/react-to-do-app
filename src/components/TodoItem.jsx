import PropTypes from 'prop-types';
import styles from "@/styles/TodoItem.module.css";
import { useState } from 'react';

const TodoItem = ({ itemProp, setTodos, delTodo, setUpdate }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const [editing, setEditing] = useState(false);
  const handleEditing = () => (setEditing(!editing));
  let viewMode = {};
  let editMode = {};
  if(editing) {
    viewMode.display ='none';
  } else {
    editMode.display = 'none';
  }

  const handleChange = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    }))
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  }

    return (
      <li className={styles.item}>
        <div className={styles.content}>
          <input 
            type="checkbox" 
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          <button onClick={handleEditing}>Edit</button>
          <button onClick={() => delTodo(itemProp.id)}>
            Delete
          </button>
          <span style={itemProp.completed ? completedStyle : null}>
            {itemProp.title}
          </span>
        </div>
        <input
          type="text"
          value={itemProp.title}
          className={styles.textInput}
          style={editMode}
          onChange={(e) => setUpdate(e.target.value, itemProp.id)}
          onKeyDown={handleUpdatedDone}
        />
      </li>
    );
  };
  export default TodoItem;

  TodoItem.propTypes = {
    itemProp: PropTypes.object,
    setTodos: PropTypes.func,
    delTodo: PropTypes.func,
    setUpdate: PropTypes.func,
  }