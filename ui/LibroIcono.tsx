
// Define las propiedades que el componente SearchIcon espera recibir
interface LibroIconoProps {
  width?: number; // Ancho del icono (opcional)
  height?: number; // Alto del icono (opcional)
  className?: string; // Clases adicionales para el icono (opcional)
}

// Componente funcional que renderiza el icono de búsqueda
const LibroIcono: React.FC<LibroIconoProps> = ({
  width = 35,
  height = 35,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`icon icon-tabler icons-tabler-outline icon-tabler-book-2 ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
      <path d="M19 16h-12a2 2 0 0 0 -2 2" />
      <path d="M9 8h6" />
    </svg>
  );
};

export default LibroIcono;
