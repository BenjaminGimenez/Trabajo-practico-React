import { useRef, useState, useEffect } from "react";

const Ejercicio2 = () => {
  const [list, setList] = useState(() => {
    

    const datosLS = localStorage.getItem('todoList');
    return datosLS ? JSON.parse(datosLS) : [];
  });

  const inputRef = useRef();

  const handleNewTodo = () => {
    const newList = inputRef.current.value;
    if (newList.trim()) {
      const nuevoArreglo = [...list, newList];
      setList(nuevoArreglo);

      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    //Guardar tareas en el localStorage cada vez que la lista cambie
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list]);

  return (
    <section>
      <fieldset>
        <label htmlFor="">New homework </label>
        <input type="text" ref={inputRef} />
        <button onClick={handleNewTodo}>load task</button>
      </fieldset>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Ejercicio2;
