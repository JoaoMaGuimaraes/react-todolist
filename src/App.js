import React, { useState } from "react";

// Components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDo from "./components/ToDo";
import Input from "./components/Input";
import "./App.css"
// import todo_db from "./data.json";


export default function App() {
  let todos = [{
    id: 0,
    todo: 'Dinner with friends'
  },
    {
      id: 1,
      todo: 'Exercise'
    },
  ];
    
const [todo, setTodo] = useState(todos);

const addTodo = (value) => {
  const newValue = {
    todo: value,
    // use another id generator - eg: uidv4() used before 
    id: (Math.random())
  };

  setTodo((prev) => [...prev, newValue]);
};
  const deleteTodo = (itemId) => {
    setTodo((prev) => [...prev.filter((item, index) => item.id !== itemId)]);
  };

  return (
    <div className="container">
      {/* HEADER */}
      <Header/>
      {/* Todo */}
      <section className="todo">
        {/* Todo input */}
        <Input onClick={addTodo} />
        {/* Todo list */}
        <ToDoList>
          {todo.map((singleTodo, id) => {
            return (
              <ToDo todo={singleTodo.todo} key={singleTodo.id}>
                <button onClick={() => deleteTodo(singleTodo.id)}>Delete</button>
              </ToDo>
            );
          })}
        </ToDoList>
      </section>
    </div>
  );
}
