import React from "react";
import PropTypes from "prop-types";

const TodoItems = (props) => {
  const { toggleCompletedTodoItems, hideCompletedTodoItems, children } = props;
  return (
    <>
      <hr />
      <button
        className="btn btn-outline-primary btn-block mb-3"
        onClick={toggleCompletedTodoItems}
      >
        {(hideCompletedTodoItems ? "Show" : "Hide") + " Completed Items"}
      </button>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Status</th>
              <th scope="col">Item</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default TodoItems;

TodoItems.propTypes = {
  toggleCompletedTodoItems: PropTypes.func.isRequired,
  hideCompletedTodoItems: PropTypes.bool.isRequired,
};
