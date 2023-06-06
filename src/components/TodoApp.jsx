import Header from "@/components/Header";
import TodoLogic from "@/components/TodoLogic";
import Navbar from "@/components/Navbar";

import '@/styles/app.css';
import { useEffect } from "react";

const TodoApp = () => {

  useEffect(() => {
    document.title = 'Todo Tutorial';
  }, [])
    return (
      <div className="wrapper">
        <div className="todos">
          <Navbar />
          <Header />
          <TodoLogic />
        </div>
      </div>

    );
  };
  export default TodoApp;