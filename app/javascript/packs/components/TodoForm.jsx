import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import setAxiosHeaders from "./AxiosHeader";

const TodoForm = ({ createTodoItem }) => {
  const [title, setTitle] = useState("");

  const create = () => {
    setAxiosHeaders();
    axios
      .post("/api/v1/todo_items", {
        todo_item: {
          title: title,
          complete: false,
        },
      })
      .then((response) => createTodoItem(response.data))
      .catch(console.log);

    setTitle("");
  };

  return (
    <div className="my-3">
      <div className="form-group row">
        <div className="form-group col-md-8">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Write your todo item here..."
            required
          />
        </div>
        <div className="form-group col-md-4">
          <button
            className="btn btn-outline-success btn-block"
            onClick={create}
          >
            Add To Do Item
          </button>
        </div>
      </div>
    </div>
  );
};

TodoForm.propTypes = {
  createTodoItem: PropTypes.func.isRequired,
};

export default TodoForm;
