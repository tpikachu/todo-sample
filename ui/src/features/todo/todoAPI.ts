import { TODO } from "@/@types/model";
const endPoint = process.env["REACT_APP_BACKEND_URL"] + "/todos";

// NOTE: Create handler

export function createTodo(description: string) {
  const body = { description };
  return new Promise<void>((resolve, reject) => {
    fetch(endPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
}

// NOTE: Read handler

export function fetchTodos() {
  return new Promise<Array<TODO>>((resolve, reject) => {
    fetch(endPoint)
      .then((data) => data.json())
      .then((todos) => resolve(todos))
      .catch((err) => reject(err));
  });
}

// NOTE: Update handler
export function editTodo(todo: TODO) {
  return new Promise<void>((resolve, reject) => {
    fetch(endPoint + `/${todo.todo_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: todo.description }),
    })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
}

// NOTE: Delete handler

export function deleteTodo(todo_id: number) {
  return new Promise<void>((resolve, reject) => {
    fetch(endPoint + `/${todo_id}`, {
      method: "DELETE",
    })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
}
