import { useEffect, Fragment } from "react";
import EditTodo from "./EditTodo";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectTodos, fetchAsync, deleteAsync } from "../todoSlice";

const ListTodos = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  const handleDelete = async (id: number) => {
    dispatch(deleteAsync(id));
  };

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                  <EditTodo todo={todo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.todo_id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
