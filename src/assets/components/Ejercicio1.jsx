import PropTypes from "prop-types";
import { useState } from "react";

const Ejercicio1 = ({ message }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleClick = () => {
    setNewMessage("(from changed state)");
  };

  return (
    <div>
      <h1>
        Hello {message} {newMessage}!! 😎
      </h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

Ejercicio1.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Ejercicio1;
