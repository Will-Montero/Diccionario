import React from 'react';
import LibroIcono from '@/ui/LibroIcono';  // Importa un componente de icono personalizado
import TemaToggle from '@/ui/TemaToogle';

// Define las propiedades que el componente Configuracion espera recibir
interface ConfiguracionProps {
  font: string;  // Fuente actual seleccionada
  setFont: (font: string) => void;  // Función para cambiar la fuente
}
interface ConfiguracionProps {
  font: string;
  setFont: (font: string) => void;
  theme: string;  // Añade la propiedad theme
  setTheme: (theme: string) => void;  // Añade la propiedad setTheme
}
// Componente funcional que permite configurar la fuente y el tema de la aplicación
const Configuracion: React.FC<ConfiguracionProps> = ({ font, setFont }) => {


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
            <option value="sans-serif">Sans-Serif</option>  {/* Opción de fuente Sans-Serif */}
            <option value="serif">Serif</option>  {/* Opción de fuente Serif */}
            <option value="monospace">Monospace</option>  {/* Opción de fuente Monospace */}
          </select>
        </label>
        <span>|</span>  {/* Separador visual entre los selectores */}
       <label className='pl-3'>
       <TemaToggle/>
       </label>
      </main>
    </div>
  );
};

export default Configuracion;  // Exporta el componente para usarlo en otros archivos
