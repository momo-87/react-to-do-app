import PropTypes from 'prop-types';
import TodoItems from "@/components/TodoItem";
const TodoList = ({ todosProps, setTodos, delTodo, setUpdate }) => {
    return(
        <ul>
            {todosProps.map((todo) => (
                <TodoItems 
                    key={todo.id} 
                    itemProp={todo} 
                    setTodos={setTodos} 
                    delTodo={delTodo}
                    setUpdate={setUpdate}
                />
            ))}
        </ul>
    )
}
export default TodoList;

TodoList.propTypes = {
    todosProps: PropTypes.array,
    setTodos: PropTypes.func,
    delTodo: PropTypes.func,
    addTodoItem: PropTypes.func,
    setUpdate: PropTypes.func,
}