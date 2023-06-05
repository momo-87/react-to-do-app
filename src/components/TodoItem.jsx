import PropTypes from 'prop-types';
import styles from "@/styles/TodoItem.module.css";

const TodoItem = ({ itemProp, setTodos, delTodo }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
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
    return (
      <li className={styles.item}>
        <div className={styles.content}>
          <input 
            type="checkbox" 
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          <button onClick={() => delTodo(itemProp.id)}>
            Delete
          </button>
          <span style={itemProp.completed ? completedStyle : null}>
            {itemProp.title}
          </span>
          
        </div>
      </li>
    );
  };
  export default TodoItem;

  TodoItem.propTypes = {
    itemProp: PropTypes.object,
    setTodos: PropTypes.func,
    delTodo: PropTypes.func,
  }