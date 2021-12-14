import React from "react";

const TodoItems = ({ children }) => (
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
);

export default TodoItems;
