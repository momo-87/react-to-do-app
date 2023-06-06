import Header from "@/components/Header";
import TodoLogic from "@/components/TodoLogic";
import '@/styles/app.css';

const Home = () => {
    return (
        <div className="todos">
          <Header />
          <TodoLogic />
        </div>
    );
  };
  export default Home;