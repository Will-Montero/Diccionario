
// Define las propiedades que el componente SearchIcon espera recibir
interface PlayIconoProps {
  width?: number; // Ancho del icono (opcional)
  height?: number; // Alto del icono (opcional)
  className?: string; // Clases adicionales para el icono (opcional)
}

// Componente funcional que renderiza el icono de búsqueda
const PlayIcono: React.FC<PlayIconoProps> = ({
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`icon icon-tabler icons-tabler-filled icon-tabler-player-play ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
    </svg>
  );
};

export default PlayIcono;
