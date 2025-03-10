import React from 'react';

// Define las propiedades que el componente SearchIcon espera recibir
interface LupaIconoProps {
  width?: number;  // Ancho del icono (opcional)
  height?: number;  // Alto del icono (opcional)
  className?: string;  // Clases adicionales para el icono (opcional)
}

// Componente funcional que renderiza el icono de búsqueda
const LupaIcono: React.FC<LupaIconoProps> = ({ width = 24, height = 24, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-tabler icon-tabler-search ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 21l-6 -6" />
    </svg>
  );
};

export default LupaIcono;
