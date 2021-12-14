import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import setAxiosHeaders from "./AxiosHeader";
import CheckMark from "./CheckMark";

const TodoItem = ({ todoItem, getTodoItems }) => {
  const [complete, setComplete] = useState(todoItem.complete);

  const onDestroy = () => {
    setAxiosHeaders();
    const confirmation = confirm("Are you sure?");
    if (!confirmation) return;

    const id = todoItem.id;
    axios
      .delete(`/api/v1/todo_items/${id}`)
      .then(() => getTodoItems(id))
      .catch(console.log);
  };

  return (
    <tr className={complete ? "table-light" : ""}>
      <td>
        <CheckMark complete={complete} />
      </td>
      <td>
        <input
          type="text"
          defaultValue={todoItem.title}
          disabled={complete}
          className="form-control"
          id={`todoItem__title-${todoItem.id}`}
        />
      </td>
      <td className="text-right">
        <div className="form-check form-check-inline">
          <input
            type="boolean"
            defaultChecked={complete}
            type="checkbox"
            className="form-check-input"
            id={`complete-${todoItem.id}`}
          />
          <label
            className="form-check-label"
            htmlFor={`complete-${todoItem.id}`}
          >
            Complete?
          </label>
        </div>
        <button className="btn btn-outline-danger" onClick={onDestroy}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todoItem: PropTypes.object.isRequired,
  getTodoItems: PropTypes.func.isRequired,
};
