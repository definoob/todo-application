import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import _ from "lodash";
import setAxiosHeaders from "./AxiosHeader";
import CheckMark from "./CheckMark";

const TodoItem = ({ todoItem, getTodoItems }) => {
  const [title, setTitle] = useState(todoItem.title);
  const [complete, setComplete] = useState(todoItem.complete);

  useEffect(() => {
    onUpdate(title, complete);
  }, [complete]);

  const onTextChange = (e) => {
    setTitle(e.target.value);
    debounceLoadData(e.target.value);
  };

  const onCheckClick = () => setComplete((prev) => !prev);

  const debounceLoadData = useCallback(
    _.debounce((newTitle) => onUpdate(newTitle, complete), 1000),
    []
  );

  const onUpdate = (newTitle, newBool) => {
    setAxiosHeaders();
    axios
      .put(`/api/v1/todo_items/${todoItem.id}`, {
        todo_item: {
          title: newTitle,
          complete: newBool,
        },
      })
      .catch(console.log);
  };

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
          value={title}
          onChange={onTextChange}
          disabled={complete}
          className="form-control"
        />
      </td>
      <td className="text-right">
        <div className="form-check form-check-inline" onClick={onCheckClick}>
          <input
            type="checkbox"
            checked={complete}
            className="form-check-input"
            readOnly
          />
          <label className="form-check-label">Complete?</label>
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
