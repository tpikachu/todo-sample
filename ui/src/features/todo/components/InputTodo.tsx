import React, { useState } from "react";
import classNames from "classnames";
import { createAsync } from "../todoSlice";
import { useAppDispatch } from "../../../app/hooks";

const InputTodo = () => {
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState("");

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createAsync(description));
    (window as any).location = "/";
  };

  return (
    <>
      <h1 className="text-center mt-5">To Do Lists</h1>
      <form className="d-flex mt-5" onSubmit={handleSubmitForm}>
        <input
          aria-label="todo-description-input"
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          aria-label="todo-add-button"
          className={classNames("btn btn-success", {
            disabled: !description.length,
          })}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default InputTodo;
