import PropTypes from 'prop-types';
const TodoItem = ({ itemProp, setTodos, delTodo }) => {
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
      <li>
        <input 
          type="checkbox" 
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={() => delTodo(itemProp.id)}>
          Delete
        </button>
        {itemProp.title}
      </li>
    );
  };
  export default TodoItem;

  TodoItem.propTypes = {
    itemProp: PropTypes.object,
    setTodos: PropTypes.func,
    delTodo: PropTypes.func,
  }