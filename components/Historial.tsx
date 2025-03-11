import React from 'react';
import styles from '../styles/historial.module.css'

interface HistorialProps {
  history: { word: string; date: string }[];  // Historial de búsquedas
}

const Historial: React.FC<HistorialProps> = ({ history }) => {
  return (
    <div className="space-y-2">  {/* // Contenedor con espaciado vertical */}
      <h3 className="font-bold text-xl text-violet-500">Palabras buscadas</h3>
      <ul>
        {history.map((item, index) => (  // Mapea el historial de búsquedas
          <li key={index} className="pb-2 ">
            <span className={styles.span}>• {item.word} </span>
             <span className="text-gray-500">{item.date} </span>{/*  // Muestra la palabra y la fecha de búsqueda */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Historial;
