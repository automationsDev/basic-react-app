import { useReducer } from "react";
import { TodoAdder } from "../todos/TodoAdder";
import { TodoItem } from "../todos/TodoItem";
import "../todos/todos.css";
import { TodosList } from "../todos/TodosList";

const App = () => {
  const todosReducer = (state, action) => {
    if (action.type === "add") {
      return [...state, action.payload];
    }

    if (action.type === "delete") {
      const filtered = state.filter((v, i) => i !== action.payload);
      return [...filtered];
    }
    return state;
  };
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <main>
      <TodoAdder
        addTodo={(todo) => {
          dispatch({
            type: "add",
            payload: todo,
          });
        }}
      />
      <TodosList
        todos={todos}
        forEach={(todo, i) => (
          <TodoItem
            todo={todo}
            key={todo + i}
            onDelete={() =>
              dispatch({
                type: "delete",
                payload: i,
              })
            }
          />
        )}
      ></TodosList>
    </main>
  );
};

export default App;
