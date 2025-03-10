import { useState } from 'react'; // Importa el hook useState de React para manejar el estado local
import Buscador from '../components/Buscador'; // Importa el componente Buscador
import PalabraResultado, { PalabraResultadoProps } from '../components/PalabraResultado'; // Importa el componente PalabraResultado y su tipo de props
import Configuracion from '../components/Configuracion'; // Importa el componente Configuracion
import Historial from '../components/Historial'; // Importa el componente Historial
import Footer from '@/components/Footer';

interface CustomError extends Error { // Define una interfaz para un error personalizado
  message: string; // Propiedad message de tipo string
}

interface HomeProps { // Define una interfaz para las props del componente Home
  font: string; // Propiedad font de tipo string
  setFont: (font: string) => void; // Propiedad setFont de tipo función que toma un string y no retorna nada
  theme: string; // Propiedad theme de tipo string
  setTheme: (theme: string) => void; // Propiedad setTheme de tipo función que toma un string y no retorna nada
}

const Home: React.FC<HomeProps> = ({ font, setFont, theme, setTheme }) => { // Define el componente funcional Home que recibe las props definidas en HomeProps
  const [wordData, setWordData] = useState<PalabraResultadoProps | null>(null); // Estado local para los datos de la palabra, inicializado en null
  const [history, setHistory] = useState<{ word: string; date: string }[]>([]); // Estado local para el historial de búsquedas, inicializado como un array vacío
  const [error, setError] = useState<string | null>(null); // Estado local para el mensaje de error, inicializado en null
  const [notFound, setNotFound] = useState<boolean>(false); // Estado local para indicar si la palabra no fue encontrada, inicializado en false

  const URL: string = "https://api.dictionaryapi.dev/api/v2/entries/en/"

  const handleSearch = async (query: string) => { // Define una función asíncrona para manejar la búsqueda de palabras
    try {
      const response = await fetch(`${URL}${query}`); // Realiza una solicitud fetch a la API de diccionario
      if (!response.ok) { // Verifica si la respuesta no es exitosa
        setNotFound(true); // Establece el estado de no encontrado en true
        setError(null); // Limpia cualquier error anterior
        setWordData(null); // Limpia los datos de la palabra
        return; // Termina la función
      }
      const data = await response.json(); // Parsea la respuesta como JSON
      setWordData(data[0]); // Establece los datos de la palabra
      setError(null); // Limpia cualquier error anterior
      setNotFound(false); // Asegura que el estado de no encontrado esté desactivado

      // Añade la búsqueda al historial
      setHistory([
        { word: query, date: new Date().toLocaleString() }, // Añade la palabra y la fecha al historial
        ...history, // Mantiene el historial existente
      ]);
    } catch (error) { // Maneja cualquier error que ocurra durante la búsqueda
      console.error('Error al buscar la palabra:', error); // Loguea el error en la consola
      const errorMessage = (error as CustomError).message || 'Error Desconocido'; // Obtiene el mensaje de error o establece un mensaje predeterminado
      setError(errorMessage); // Establece el mensaje de error
      setWordData(null); // Limpia los datos de la palabra
      setNotFound(false); // Asegura que el estado de no encontrado esté desactivado
    }
  };

  return (
    <section className="container mx-auto p-4 space-y-4 w-full md:w-full lg:w-1/2 h-full"> {/* Contenedor principal con clases de Tailwind para estilos */}
      <Configuracion font={font} setFont={setFont} theme={theme} setTheme={setTheme} /> {/* Componente de configuración */}
      <Buscador onSearch={handleSearch} /> {/* Componente de búsqueda */}
      {error && <p className="text-red-500">{error}</p>} {/* Muestra el mensaje de error si existe */}
      {notFound && <p className="text-red-500">No se encontró la palabra...</p>} {/* Muestra el mensaje de no encontrado si la palabra no fue encontrada */}
      {wordData && !error && !notFound && <PalabraResultado {...wordData} />} {/* Muestra los resultados si hay datos y no hay error */}
      <Historial history={history} /> {/* Componente de historial */}
    <Footer/>
    </section>
  );
};

export default Home; // Exporta el componente Home como el componente predeterminado
