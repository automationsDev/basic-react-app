export const TodosList = ({ todos, forEach }) => {
  const itemsJsx = todos.map((todo, index) => forEach(todo, index));
  return (
    <div className="todolist">
      <p className="info-text">
        {todos.length ? "Your todos" : "No todos yet, add one.."}
      </p>
      {itemsJsx}
    </div>
  );
};
