import { useRef } from "react";

const Input = ({ onClick }) => {
  const inputElement = useRef(null);

  const handleClick = (value) => {
    onClick(value);
  };

  return (
    <div className="todo__input">
      <input
        ref={inputElement}
        type="text"
        placeholder="Add new task..."
      />
      <button onClick={() => handleClick(inputElement.current.value)}>
        Submit
      </button>
    </div>
  );
};

export default Input;