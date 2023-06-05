import TodoItems from "@/components/TodoItem";
const TodoList = ({ todosProps }) => {
    return(
        <ul>
            {todosProps.map((todo) => (
                <TodoItems key={todo.id} itemProp={todo} />
            ))}
        </ul>
    )
}
export default TodoList;