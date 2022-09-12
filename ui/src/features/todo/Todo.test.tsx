import { renderWithProviders } from "../../utils/test-utils";
import { act } from "react-dom/test-utils";
import Todo from "./Todo";
import { createAsync, deleteAsync, editAsync, fetchAsync } from "./todoSlice";
import { TODO } from "@/@types/model";

const waitPromise = (timeout: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), timeout | 2000);
  });
};

describe("Todo CRUD test", () => {
  let render: any = null;
  let todoLength = 0;
  act(() => {
    render = renderWithProviders(<Todo />);
  });

  it("Created TODO", async () => {
    await render.store.dispatch(createAsync("testing todo"));
  });

  it("Fetch todos to check if there is created TODO", async () => {
    // Fetch inital todos from the database
    await render.store.dispatch(fetchAsync());
    todoLength = render.store.getState().todo.todos.length;
    expect(todoLength).toBeGreaterThan(0);
  });

  it("Edit one TODO and check if the todo count is reduced", async () => {
    // NOTE: Update todos[0]
    let todos = render.store.getState().todo.todos;
    const newTodo = {
      todo_id: todos[0].todo_id,
      description: todos[0].description + "_edited",
    };
    render.store.dispatch(editAsync(newTodo));
    await waitPromise(500);
    // NOTE: Fetch all todos to check if there is the updated one
    render.store.dispatch(fetchAsync());
    await waitPromise(500);
    todos = render.store.getState().todo.todos;
    const index = todos.findIndex(
      (todo: TODO) => todo.todo_id === newTodo.todo_id
    );
    expect(todos[index].description).toEqual(newTodo.description);
  });

  it("Remove one TODO and check if the todo count is reduced", async () => {
    // Fetch inital todos from the database
    const todos = render.store.getState().todo.todos;
    render.store.dispatch(deleteAsync(todos[0].todo_id));
    await waitPromise(1000);
    const newLength = render.store.getState().todo.todos.length;
    expect(newLength).toEqual(todoLength - 1);
    todoLength = newLength;
  });
});