import Header from "@/components/Header";
import TodoLogic from "@/components/TodoLogic";

import '@/styles/app.css';

const TodoApp = () => {
    return (
      <div className="wrapper">
        <div className="todos">
          <Header />
          <TodoLogic />
        </div>
      </div>

    );
  };
  export default TodoApp;