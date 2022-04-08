import React from "react";
import { TODO } from "../../model";
import ".././App.css";

interface Props {
  todoList: TODO[];
  setTodoList: React.Dispatch<React.SetStateAction<TODO[]>>;
}

const Cards: React.FC<Props> = ({ todoList, setTodoList }) => {
  const deletee = (id: any) => {
    // todoList.forEach((element) => {
    //   if (element.id === id) {
    setTodoList(todoList.filter((ele) => ele.id !== id));
    // console.log(rafter);
    // return rafter;
    //   }
    // });
  };

  return (
    <div className="todo-container">
      {todoList.map(
        (item) => (
          <div className="todo-card">
            <h1 onClick={() => deletee(item.id)}>{item.todo}</h1>
          </div>
        )
        // console.log(item)
      )}
    </div>
  );
};

export default Cards;
