import { useState } from "react";

export const TodoAdder = ({ addTodo }) => {
  const [val, setVal] = useState("");

  return (
    <div className="todoadder">
      <input
        placeholder="Enter todo item here.."
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            addTodo(val?.trim?.());
            return setVal("");
          }
        }}
        onChange={(e) => {
          setVal((v) => e.target.value);
        }}
        value={val}
      />
    </div>
  );
};
