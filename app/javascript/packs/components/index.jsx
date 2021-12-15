import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoItem from "./TodoItem";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [hideCompletedTodoItems, setHideCompletedTodoItems] = useState(false);

  useEffect(() => {
    const getTodoItems = () => {
      axios
        .get("/api/v1/todo_items")
        .then((response) => setTodoItems(response.data))
        .catch(console.log);
    };

    getTodoItems();
  }, []);

  const addNewItem = (newItem) => setTodoItems([newItem, ...todoItems]);
  const removeItem = (id) =>
    setTodoItems([...todoItems].filter((ele) => ele.id != id));
  const toggleCompletedTodoItems = () =>
    setHideCompletedTodoItems((prev) => !prev);

  return (
    <>
      <TodoForm createTodoItem={addNewItem} />
      <TodoItems
        toggleCompletedTodoItems={toggleCompletedTodoItems}
        hideCompletedTodoItems={hideCompletedTodoItems}
      >
        {todoItems.length > 0 &&
          todoItems.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              getTodoItems={removeItem}
              hideCompletedTodoItems={hideCompletedTodoItems}
            />
          ))}
      </TodoItems>
    </>
  );
};

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("todo-app");
  app && ReactDOM.render(<App />, app);
});
