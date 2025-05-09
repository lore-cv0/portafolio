import React, { useRef } from 'react';
import Perfil from './assets/yo.jpg';
import css from './assets/css.jpg';
import html from './assets/html.webp';
import javas from './assets/js.jpg';
import react from './assets/react.png';
import juego from './assets/juego.jpg';
import SENA from './assets/SENA.png';

function App() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Flechas de navegación */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-50 bg-white/80 hover:bg-white text-black rounded-full p-5 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50 bg-pink/80 hover:bg-pink text-black rounded-full p-5 shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory h-full scroll-smooth">
        {/* INICIO */}
        <section className="flex-shrink-0 w-screen h-full bg-gradient-to-br from-pink-100 to-blue-200 snap-start flex flex-col items-center justify-center text-center p-6">
          <img
            src={Perfil}
            className="w-50 h-50 rounded-full border-4 border-purple-400 mb-4"
            alt="perfil"
          />
          <h1 className="text-4xl font-bold text-pink-600">Lorena Causaya Villegas</h1>
          <p className="font-[Open_Sans] text-2xl font-bold mt-5">Aprendiz SENA</p>
          <p className="font-serif text-xl max-w-4xl mx-auto text-center mt-6">
            Soy aprendiz del programa Tecnólogo en Análisis y Desarrollo de Sistemas de Información del Centro Agroempresarial y de Desarrollo Pecuario del Huila,
            una institución comprometida con la formación integral para el trabajo y el desarrollo regional. Tengo 18 años y actualmente me encuentro en proceso de formación técnica y
            tecnológica, adquiriendo conocimientos en programación, análisis de datos, desarrollo de software, bases de datos y metodologías ágiles.
          </p>
        </section>

        {/* HABILIDADES */}
        <section className="flex-shrink-0 w-screen h-full bg-pink-100 snap-start flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-4xl font-bold text-pink-700 mb-8">HABILIDADES</h2>
          <p className="font-serif text-xl max-w-4xl mx-auto text-center mt-6 mb-6">
            A lo largo de mi formación como desarrolladora de software, he adquirido un conjunto de habilidades técnicas y prácticas. Algunas de las competencias que he desarrollado incluyen:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 shadow-4xl">
            {[{ src: css, label: "CSS" }, 
            { src: html, label: "HTML" }, 
            { src: javas, label: "JavaScript" },
             { src: react, label: "React" }]
              .map((skill, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <div className="w-80 h-40 bg-white rounded-3xl shadow-lg flex items-center justify-center p-3 hover:scale-105 transition">
                    <img
                      src={skill.src}
                      alt={skill.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-800">{skill.label}</p>
                </div>
              ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="flex-shrink-0 w-screen h-full bg-blue-200 snap-start flex items-center justify-center">
  <div className="py-14 px-6 w-full max-w-6xl">
    <h2 className="text-3xl font-semibold mb-10 text-center text-pink-600">PROYECTOS</h2>
    <div className="flex justify-center gap-10 flex-wrap">
      
      <div className="bg-white rounded-xl shadow-xl p-6 w-72 hover:scale-105 transition-transform duration-300">
        <div className="h-32 w-full flex items-center justify-center mb-4">
          <img
            src={juego}
            alt="juego"
            className="w-24 h-24 object-contain rounded-lg shadow-md"
          />
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800">juegos</h3>
        <p className="text-sm text-center text-gray-600 mt-2 mb-4">
        Desarrollo de un juego educativo con JavaScript.
        </p>
        <a
          href="https://github.com/lore-cv0/juegos-javascript.git"
          className="block text-center text-pink-500 font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en GitHub
        </a>
      </div>
    
      <div className="bg-white rounded-xl shadow-xl p-6 w-72 hover:scale-105 transition-transform duration-300">
        <div className="h-32 w-full flex items-center justify-center mb-4">
          <img
            src={SENA}
            alt="SENA"
            className="w-24 h-24 object-contain rounded-lg shadow-md"
          />
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800">actividad</h3>
        <p className="text-sm text-center text-gray-600 mt-2 mb-4">
        Plataforma desarrollada durante el proceso formativo en el SENA.
        </p>
        <a
          href="https://github.com/lore-cv0/Act-javascript.git"
          className="block text-center text-pink-500 font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en GitHub
        </a>
      </div>

    </div>
  </div>
</section>
        {/* FOOTER */}
        <section className="flex-shrink-0 w-screen h-full bg-gray-800 text-white snap-start flex flex-col items-center justify-center text-center p-6">
          <p className="text-lg text-gray-100 mb-2">Lorena Causaya Villegas</p>
          <p className="text-gray-300 mb-2">Email: causayavillegas4321@gmail.com</p>
          <p className="text-gray-300 mb-2">WhatsApp: +57 3212922553</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/lore-cv0/portafolio.git" className="text-gray-300 hover:text-gray-500">GitHub</a>
            <a href="https://www.linkedin.com/feed/" className="text-gray-300 hover:text-gray-500">LinkedIn</a>
            <a href="https://twitter.com/yourtwitter" className="text-gray-300 hover:text-gray-500">Twitter</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
