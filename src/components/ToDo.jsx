const ToDo = ({ id, todo, children }) => {
    return (
      <li key={`todo-${id}`}>
        {todo}
        {children}
      </li>
    );
  };
  
  export default ToDo;