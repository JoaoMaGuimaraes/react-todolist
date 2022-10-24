import React from "react";

const ToDoList = ({ todos, children }) => {
  return (
    <ul className="todo__list">
      <React.Fragment>{children}</React.Fragment>
    </ul>
  );
};

export default ToDoList;
