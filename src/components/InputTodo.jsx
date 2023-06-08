import { useState } from "react";
import PropTypes from 'prop-types';
import { MdAddCircle } from "react-icons/md";

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
      <form onSubmit={handleSubmit} className="form-container" >
        <input type="text" 
          placeholder="Add Todo..." 
          onChange={handleChange} 
          value={title} 
          className="input-text"
        />
        <button className="input-submit" >
          <MdAddCircle />
        </button>
      </form>
      <span className="submit-warning" >{message}</span>
    </>
  );
};
export default InputTodo;

InputTodo.propTypes = {
  addTodoItem: PropTypes.func,
}