import React from "react";
import PropTypes from "prop-types";

import axios from "axios";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.titleRef.current.value);
    axios
      .post("/api/v1/todo_items", {
        todo_item: {
          title: this.titleRef.current.value,
          complete: false,
        },
      })
      .then((response) => {
        console.log({
          title: this.titleRef.current.value,
          complete: false,
        });
        const todoItem = response.data;
        this.props.createTodoItem(todoItem);
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="my-3">
        <div className="form-group row">
          <div className="form-group col-md-8">
            <input
              type="text"
              name="title"
              ref={this.titleRef}
              required
              className="form-control"
              id="title"
              placeholder="Write your todo item here..."
            />
          </div>
          <div className="form-group col-md-4">
            <button className="btn btn-outline-success btn-block">
              Add To Do Item
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default TodoForm;

TodoForm.propTypes = {
  createTodoItem: PropTypes.func.isRequired,
};