import { useRef } from "react";
import { useState } from "react"

const Ejercicio2 = () => {

    const [list, setList] = useState([]);

    const inputRef = useRef();

    const handlNewTodo = () =>{
        const newList = inputRef.current.value
        if(newList.trim()){
            const nuevoArreglo = [...list, newList]
            setList(nuevoArreglo)

            inputRef.current.value = '';
        }
    }

  return (
    <section>
        <fieldset>
            <label htmlFor="">New homework </label>
            <input type="text" ref={inputRef}/>
            <button onClick={handlNewTodo}>load task</button>
        </fieldset>
        <ul>
            {
                list.map((list, index)=>{
                    return <li key={index}>{list}</li>
                })
            }
        </ul>
    </section>
  )
}
export default Ejercicio2