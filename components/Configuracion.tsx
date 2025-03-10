import React from 'react';
import LibroIcono from '@/ui/LibroIcono';  // Importa un componente de icono personalizado
import TemaToggle from '../ui/TemaToogle';  // Importa el componente de alternancia de tema
import styles from '../styles/configuracion.module.css';

// Define las propiedades que el componente Configuracion espera recibir
interface ConfiguracionProps {
  font: string;  // Fuente actual seleccionada
  setFont: (font: string) => void;  // Función para cambiar la fuente
  theme: 'light' | 'dark';  // Tema actual seleccionado, puede ser 'light' o 'dark'
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;  // Función para cambiar el tema
}

// Componente funcional que permite configurar la fuente y el tema de la aplicación
const Configuracion: React.FC<ConfiguracionProps> = ({ font, setFont, theme, setTheme }) => {

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="mt-2 mb-8 flex justify-between">  {/* Contenedor principal con espaciado vertical y alineación de elementos */}
      <LibroIcono />  {/* Renderiza el icono personalizado */}
      <main className='flex items-center'>
        <label>
          <select
            value={font}  // Valor actual de la fuente
            onChange={(e) => setFont(e.target.value)}  // Maneja el cambio de fuente
            className="mr-5 focus:outline-none"  // Estilos de Tailwind para el selector de fuente
          >
            <option className={theme === "dark" ? styles["option-dark"] : styles.option} value="sans-serif">Sans-Serif</option>  {/* Opción de fuente Sans-Serif */}
            <option className={theme === "dark" ? styles["option-dark"] : styles.option} value="serif">Serif</option>  {/* Opción de fuente Serif */}
            <option className={theme === "dark" ? styles["option-dark"] : styles.option} value="monospace">Monospace</option>  {/* Opción de fuente Monospace */}
          </select>
        </label>
        <span>|</span>  {/* Separador visual entre los selectores */}
        <label className='pl-3'>
          <TemaToggle theme={theme} toggleTheme={toggleTheme} />
        </label>
      </main>
    </div>
  );
};

export default Configuracion;  // Exporta el componente para usarlo en otros archivos
