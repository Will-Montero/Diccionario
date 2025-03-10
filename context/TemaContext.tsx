import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define la estructura del contexto de tema
interface ThemeContextType {
  theme: string;  // El tema actual, que puede ser 'light' o 'dark'
  toggleTheme: () => void;  // Función para alternar entre temas
}

// Crea un contexto de React para el tema
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Proveedor de Tema que envuelve la aplicación y proporciona el contexto del tema
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado local para manejar el tema actual
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Función para alternar entre el tema claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Proveedor de contexto que proporciona el tema y la función toggleTheme a los componentes hijos
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Aplica la clase del tema al contenedor principal */}
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del tema
export const useTheme = (): ThemeContextType => {
  // Usa el contexto del tema
  const context = useContext(ThemeContext);
  // Lanza un error si useTheme se usa fuera de un ThemeProvider
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  // Retorna el contexto del tema
  return context;
};
