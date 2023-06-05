import InputTodo from "@/components/InputTodo";
import TodoList from "@/components/TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    const [todos, setTodos] = useState([
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ]);

    const delTodo = (id) => {
      setTodos([...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
    };

    const addTodoItem = (title) => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
      }
      setTodos([...todos, newTodo]);
    }

    return (
        <div>
            <InputTodo addTodoItem={addTodoItem} />
            <TodoList todosProps={todos} setTodos={setTodos} delTodo={delTodo} />
        </div>
    );
  };
  export default TodosLogic;