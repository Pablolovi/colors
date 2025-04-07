import React, { useState } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [value, setValue] = useState("");  // Valor del input
  const [hasTried, setHasTried] = useState(false);  // Estado para saber si el usuario ha intentado escribir algo

  const handleInputChange = (event) => {
    setValue(event.target.value.toLowerCase());  // Establecer el valor del input
    setHasTried(true);  // Marcar que el usuario ha intentado escribir algo
  };

  // Verifica si el color existe en la lista y cambia el mensaje
  const isColorValid = colors.includes(value);

  return (
    <div className="form-container">
      <input 
        type="text" 
        value={value} 
        onChange={handleInputChange} 
        placeholder="Escribe un color" 
        className="color-input"
      />
      
      <div className="box-container">
        {colors.map((color) => (
          <BoxColor key={color} color={color} value={value} />
        ))}
      </div>

      {/* Mostrar el mensaje solo si el usuario ha probado algo */}
      {hasTried && (
        <div className="result-message">
          {isColorValid ? `¡El color ${value} es correcto!` : "No soy el color"}
        </div>
      )}
    </div>
  );
}

export default MyForm;
