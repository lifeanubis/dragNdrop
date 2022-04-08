import React from "react";
import ".././App.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleTask: (e: any) => void;
  handleKey: (e: any) => void;
}

const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  handleTask,
  handleKey,
}) => {
  return (
    <div className="container">
      <input
        // inputMode="text"
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKey}
      />

      <button className="go" onClick={handleTask}>
        Submit
      </button>
    </div>
  );
};

export default InputField;
