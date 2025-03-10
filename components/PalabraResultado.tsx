import PlayIcono from "@/ui/PlayIcono";
import styles from "../styles/palabraResultado.module.css";
import { useTheme } from "@/context/TemaContext";
import React from "react";
// Define la estructura de una definición
interface Definition {
  definition: string; // Texto de la definición
  example?: string; // Ejemplo opcional
  synonyms: string[]; // Arreglo de sinónimos
  antonyms: string[]; // Arreglo de antónimos
}

// Define la estructura de un significado, que incluye la parte del discurso y un array de definiciones
interface Meaning {
  partOfSpeech: string; // Parte del discurso (e.g., "noun", "verb")
  definitions: Definition[]; // Array de definiciones
  synonyms?: string[]; // Sinónimos opcionales
  antonyms?: string[]; // Antónimos opcionales
}

// Define la estructura de una transcripción fonética
interface Phonetic {
  text: string; // Texto fonético
  audio?: string; // URL del audio (opcional)
}

// Define las propiedades que el componente PalabraResultado espera recibir
export interface PalabraResultadoProps {
  word: string; // Palabra buscada
  phonetic: string; // Primera transcripción fonética de la palabra
  phonetics: Phonetic[]; // Arreglo de transcripciones fonéticas
  meanings: Meaning[]; // Arreglo de significados de la palabra
}

// Componente funcional que muestra los resultados de una palabra buscada
const PalabraResultado: React.FC<PalabraResultadoProps> = ({
  word,
  phonetic,
  phonetics,
  meanings,
}) => {
  // Encuentra la URL del audio en el arreglo de transcripciones fonéticas
  const audioSrc = phonetics.find((ph) => ph.audio)?.audio;

  // Referencia al elemento de audio
  const audioRef = React.useRef<HTMLAudioElement>(null);

  // Función para reproducir el audio
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  };

  const { theme } = useTheme(); // Obtiene el tema actual del contexto

  return (
    <div className="p-1">
      <section className="flex justify-between items-center">

        <main>
           {/* Muestra la palabra buscada */}
          <h2 className="text-5xl pb-2 font-bold">{word}</h2>



          {/* Muestra la transcripción fonética */}
          <p className="italic text-2xl text-violet-500">{phonetic}</p>
        </main>


          {/* Botón personalizado para reproducir el audio */}
        {audioSrc && (
          <button
            onClick={playAudio}
            className="bg-violet-500 text-white px-4 py-4 rounded-full"
          >
            <PlayIcono />
          </button>
        )}
         {/* Elemento de audio oculto */}
        <audio ref={audioRef} src={audioSrc} style={{ display: "none" }} />
  </section>


      <div>
       {/* Mapea los significados de la palabra*/}
        {meanings.map((meaning, index) => (
          <div key={index} className="mb-1">
            <main className="flex">
              <h3 className={theme === "dark" ? styles["h3-dark"] : styles.h3}>
                {meaning.partOfSpeech}{" "}
              </h3>
              <hr />
            </main>
            <h5 className={theme === "dark" ? styles["h5-dark"] : styles.h5}>
              Meaning
            </h5>

            {/** Mapea las definiciones dentro de cada significado */}
            {meaning.definitions.map((def, defIndex) => (
              <div key={defIndex} className="mb-1">
                <main className="flex pl-3">
                  <span>
                    •
                  </span>
                    {/* Muestra la definición */}
                  <h6 className={theme === "dark" ? styles["h6-dark"] : styles.h6}>{def.definition}</h6>
                </main>

                {/*muestra el ejemplo*/}
                {def.example && (
                  <main className="flex mt-3 mb-3">
                    <p
                      className={theme === "dark" ? styles["p-dark"] : styles.p}
                    >
                    
                    </p>
                    <span
                      className={
                        theme === "dark" ? styles["span-example-dark"] : styles['span-example']
                      }
                    >
                     {def.example}
                    </span>
                  </main>
                )}


                {/* Muestra el sinónimo si está disponible */}
                {def.synonyms.length > 0 && (
                  <main className="flex mt-3 mb-3">
                    <p
                      className={theme === "dark" ? styles["p-dark"] : styles.p}
                    >
                     Synonyms
                    </p>
                    <span
                      className={
                        theme === "dark" ? styles["span-dark"] : styles.span
                      }
                    >
                      {def.synonyms.join(", ")}
                    </span>
                  </main>
                )}
            

                {/* Muestra los antónimos si están disponibles*/}
                {def.antonyms.length > 0 && (
                  <main className="flex mt-3 mb-3">
                    <p
                      className={theme === "dark" ? styles["p-dark"] : styles.p}
                    >
                      Antonym
                    </p>
                    <span
                      className={
                        theme === "dark" ? styles["span-dark"] : styles.span
                      }
                    >
                      {def.antonyms.join(", ")}
                    </span>
                  </main>
                )}
              </div>
            ))}



            {/* Muestra los sinónimos del significado */}
            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <main className="flex mt-10">
                <p className={theme === "dark" ? styles["p-dark"] : styles.p}>
                Synonyms
                </p>
                <span
                  className={
                    theme === "dark" ? styles["span-dark"] : styles.span
                  }
                >
                  {meaning.synonyms.join(", ")}
                </span>
              </main>
            )}



             {/* Muestra los antónimos del significado */}
            {meaning.antonyms && meaning.antonyms.length > 0 && (
              <main className="flex">
                <p className={theme === "dark" ? styles["p-dark"] : styles.p}>
                  Antonym
                </p>
                <span
                  className={
                    theme === "dark" ? styles["span-dark"] : styles.span
                  }
                >
                  {meaning.antonyms.join(", ")}
                </span>
              </main>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PalabraResultado;
