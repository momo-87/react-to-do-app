import { useState } from "react";
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('')
    } else {
      setMessage('Please add Item')
    }

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Add Todo..." 
          onChange={handleChange} 
          value={title} 
        />
        <button>Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};
export default InputTodo;

InputTodo.propTypes = {
  addTodoItem: PropTypes.func,
}
