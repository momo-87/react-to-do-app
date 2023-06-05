import PropTypes from 'prop-types';
import TodoItems from "@/components/TodoItem";
const TodoList = ({ todosProps, setTodos }) => {
    return(
        <ul>
            {todosProps.map((todo) => (
                <TodoItems key={todo.id} itemProp={todo} setTodos={setTodos} />
            ))}
        </ul>
    )
}
export default TodoList;

TodoList.propTypes = {
    todosProps: PropTypes.array,
    setTodos: PropTypes.func,
}