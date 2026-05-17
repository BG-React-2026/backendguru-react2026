import { useAddTodoMutation, useGetTodosQuery } from "../../services/todoApi";

const Todos = () => {
  const { data: todos, isLoading: isTodosLoading } = useGetTodosQuery();
  const [addTodo, { isLoading: isAddTodoLoading }] = useAddTodoMutation();

  if (isTodosLoading || isAddTodoLoading) return <h1>Loading...</h1>;

  return (
    <ul>
      <button
        className="btn btn-primary"
        onClick={() =>
          addTodo({
            title: "Ekmek al",
          })
        }
      >
        TODO Ekle
      </button>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default Todos;
