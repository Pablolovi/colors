// BoxColor.jsx
import React from "react";

function BoxColor({ color, value }) {
  const isColorMatch = value === color; // Verifica si el valor coincide con el color
  return (
    <div
      className={`box ${color}`}
      style={{ 
        backgroundColor: isColorMatch ? color : 'transparent',
        borderColor: color,
        color: isColorMatch ? 'black' : color
      }} // Cambia el color de fondo y el color del texto según la coincidencia
    >
       {isColorMatch ? `Soy ${color}` : `No soy ${color}`}  {/* Texto dentro del cuadro */}
    </div>
  );
}

export default BoxColor;