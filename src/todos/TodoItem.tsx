export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todoitem">
      <p>{todo}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};
