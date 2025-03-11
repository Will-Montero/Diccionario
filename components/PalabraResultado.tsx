import PlayIcono from "@/ui/PlayIcono";
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
              <h3 className="text-2xl pt-2 pb-5">
                {meaning.partOfSpeech}{" "}
              </h3>
              <hr />
            </main>
            <h5 className="pb-10 text-gray-500">
              Meaning
            </h5>

            {/** Mapea las definiciones dentro de cada significado */}
            {meaning.definitions.map((def, defIndex) => (
              <div key={defIndex} className="mb-5 mt-5">
                <main className="flex pl-3 ">
                  <span className="text-gray-600">
                    •
                  </span>
                    {/* Muestra la definición */}
                  <h6 className="pl-2 text-gray-700">{def.definition}</h6>
                </main>

                {/*muestra el ejemplo*/}
                {def.example && (
                  <main className="flex mt-3 mb-3 ml-4">
                    <p
                      className=""
                    >
                    
                    </p>
                    <span
                      className="text-gray-500"
                    >
                     {def.example}
                    </span>
                  </main>
                )}


                {/* Muestra el sinónimo si está disponible */}
                {def.synonyms.length > 0 && (
                  <main className="flex mt-3 mb-3">
                    <p
                      className="text-gray-600"
                    >
                     Synonyms
                    </p>
                    <span
                      className="pl-3 text-gray-500"
                    >
                      {def.synonyms.join(", ")}
                    </span>
                  </main>
                )}
            

                {/* Muestra los antónimos si están disponibles*/}
                {def.antonyms.length > 0 && (
                  <main className="flex mt-3 mb-3">
                    <p
                      className=""
                    >
                      Antonym
                    </p>
                    <span
                      className="pl-3"
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
                <p className="text-gray-600">
                Synonyms
                </p>
                <span
                 className="pl-3 text-gray-500"
                >
                  {meaning.synonyms.join(", ")}
                </span>
              </main>
            )}



             {/* Muestra los antónimos del significado */}
            {meaning.antonyms && meaning.antonyms.length > 0 && (
              <main className="flex">
                <p className="text-gray-600">
                  Antonym
                </p>
                <span
                  className="text-gray-700"
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
