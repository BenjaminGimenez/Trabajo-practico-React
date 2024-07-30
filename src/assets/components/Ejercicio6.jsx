import { useState, useRef} from "react";

const ColorForm = () => {
  const [color, setColor] = useState(() => {
    // Recuperar el color del localStorage
    return localStorage.getItem('favoriteColor') || '';
  });

  const inputRef = useRef();

  const handleSaveColor = () => {
    const newColor = inputRef.current.value;
    if (newColor.trim()) {
      setColor(newColor);
      localStorage.setItem('favoriteColor', newColor);

      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleSaveColor(); }}>
        <label htmlFor="colorInput">Ingresa el nombre de color que desees</label>
        <input type="text" id="colorInput" ref={inputRef} placeholder="e.g. #ff0000 or red" />
        <button type="submit">Guardar color</button>
      </form>
      <label htmlFor="colorPicker">Selecciona tu color</label>
      <input 
        type="color" 
        id="colorPicker" 
        value={color} 
        onChange={(e) => {
          const newColor = e.target.value;
          setColor(newColor);
          localStorage.setItem('favoriteColor', newColor);
        }} 
      />
      {color && (
        <div>
          <p>Tu color es:<span style={{ color: color }}>{color}</span></p>
          <div style={{ 
            width: '200px', 
            height: '200px', 
            backgroundColor: color, 
            border: '1px solid #000'
          }}></div>
        </div>
      )}
    </div>
  );
};

export default ColorForm;
