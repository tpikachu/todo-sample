import { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function Todo() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default Todo;
