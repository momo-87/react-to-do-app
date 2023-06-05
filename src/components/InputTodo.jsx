import { useState } from "react";
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
const [title, setTitle] = useState('');

const handleChange = (e) => {
  setTitle(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  addTodoItem(title);
  setTitle('');
}

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Add Todo..." 
          onChange={handleChange} 
          value={title} 
        />
        <button>Submit</button>
    </form>
    );
  };
  export default InputTodo;
  
  InputTodo.propTypes = {
    addTodoItem: PropTypes.func,
  }
