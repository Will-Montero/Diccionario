import "@/styles/globals.css"; // Importa los estilos globales de CSS para la aplicación
import { useState, useEffect } from 'react'; // Importa los hooks de React para manejar el estado y efectos secundarios
import { ThemeProvider } from '../context/TemaContext'; // Importa el proveedor de contexto para el tema
import { AppProps } from 'next/app'; // Importa el tipo AppProps de Next.js para tipar las props de la aplicación

const MyApp = ({ Component, pageProps }: AppProps) => { // Define el componente funcional MyApp que recibe Component y pageProps como props
  const [font, setFont] = useState('sans-serif'); // Estado local para la fuente, inicializado en 'sans-serif'
  const [theme, setTheme] = useState('light'); // Estado local para el tema, inicializado en 'light'

  useEffect(() => { // Hook de efecto que se ejecuta cuando font o theme cambian
    document.body.style.fontFamily = font; // Aplica la fuente seleccionada al cuerpo del documento
    document.body.className = theme; // Aplica el tema seleccionado al cuerpo del documento
  }, [font, theme]); // Dependencias del efecto: font y theme

  return (
    <ThemeProvider> {/* Proveedor de contexto para el tema */}
      <Component {...pageProps} setFont={setFont} font={font} theme={theme} setTheme={setTheme} /> {/* Renderiza el componente principal con las props necesarias */}
    </ThemeProvider>
  );
};

export default MyApp; // Exporta el componente MyApp como el componente predeterminado
