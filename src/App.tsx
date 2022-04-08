import React, { useState } from "react";
import { TODO } from "../model";
import "./App.css";
import Cards from "./components/Cards";
import InputField from "./components/InputField";
// import ReactHowler from "react-howler";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodolist] = useState<TODO[]>([]);

  const handleKey = (e: any) => {
    if (todo && e.key === "Enter") {
      // console.log(e);

      //   e.preventDefault();
      setTodo(todo);
      setTodolist([{ id: Date.now(), isDone: false, todo }, ...todoList]);
      setTodo("");
    }
  };

  const handleTask = (e: any) => {
    e.preventDefault();
    if (todo) {
      // if (e.key === "Enter") {
      // }
      setTodo(todo);
      setTodolist([{ id: Date.now(), isDone: false, todo }, ...todoList]);
      setTodo("");
    }
    // // console.log(todo);
  };

  return (
    <div className="App">
      <InputField
        handleKey={handleKey}
        todo={todo}
        setTodo={setTodo}
        handleTask={handleTask}
      />
      {/* {console.log(todoList)} */}
      <Cards todoList={todoList} setTodoList={setTodolist} />
      {/* <ReactHowler
        preload
        src="https://gaana.com/playlist/prabhayprabha-ngbzy-audiofiles"
        playing={true}
      /> */}
    </div>
  );
};

export default App;
