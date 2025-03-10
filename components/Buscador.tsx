import { useState } from 'react';
import LupaIcono from '@/ui/LupaIcono';
import styles from '../styles/buscador.module.css';
import { useTheme } from '../context/TemaContext';

interface BuscadorProps {
  onSearch: (query: string) => void;  // Prop que recibe una función para manejar la búsqueda
}

const Buscador: React.FC<BuscadorProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');  // Estado local para la entrada de búsqueda
  const [error, setError] = useState<string | null>(null);  // Estado para el mensaje de error
  const { theme } = useTheme();  // Obtiene el tema actual del contexto

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // Previene el comportamiento por defecto del formulario
    const trimmedQuery = query.trim();  // Elimina espacios en blanco al inicio y al final

    if (trimmedQuery === '') {
      setError('Por favor, ingresa una palabra.');  // Muestra un mensaje de error si la entrada está vacía
      return;
    }

    // Verifica que la entrada contenga solo letras
    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(trimmedQuery)) {
      setError('La búsqueda solo puede contener letras.');
      return;
    }

    // Transforma la entrada a minúsculas
    const lowerCaseQuery = trimmedQuery.toLowerCase();

    setError(null);  // Limpia el mensaje de error
    onSearch(lowerCaseQuery);  // Llama a la función de búsqueda pasada como prop
  };

  return (
   <section>
     <form onSubmit={handleSubmit} className={theme === 'dark' ? styles['form-dark'] : styles.form}>
      <main className='w-full flex justify-between rounded-md overflow-hidden'>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}  // Actualiza el estado local con la entrada del usuario
          placeholder="Buscar palabra..."
          className="flex-grow font-bold p-2 border-none bg-transparent focus:outline-none"  // Estilos de Tailwind
        />
        <button type="submit" className='mr-2 color-violet-600'>
          <LupaIcono />
        </button>
      </main>
      
    </form>
    {error && <p className="text-red-500 mt-2">{error}</p>} {/* Muestra el mensaje de error si existe */}
   </section>
  );
};

export default Buscador;
