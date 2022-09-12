import { Fragment, useState } from "react";
import { TODO } from "@/@types/model";
import { useAppDispatch } from "../../../app/hooks";
import { editAsync } from "../todoSlice";

const EditTodo = ({ todo }: { todo: TODO }) => {
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newTodo: TODO = { todo_id: todo.todo_id, description: description };
    dispatch(editAsync(newTodo));
    (window as any).location = "/";
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal fade" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                  handleUpdate(e)
                }
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
