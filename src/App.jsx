import React, { useRef } from 'react';
import Perfil from './assets/yo.jpg';

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
        ◀
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-50 bg-white/80 hover:bg-white text-black rounded-full p-5 shadow-lg"
      >
        ▶
      </button>


      <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory h-full scroll-smooth">
        {/* INICIO */}
        <section className="flex-shrink-0 w-screen h-full bg-gradient-to-br from-blue-100 to-white snap-start flex flex-col items-center justify-center text-center p-6">
          
          <img src={Perfil} 
           className="w-32 h-32 rounded-full border-4 border-blue-300 mb-4" 
          alt="perfil"></img>

          <h1 className="text-4xl font-bold text-blue-800">Juliana Lorena</h1>
          <p className="text-gray-600 mt-2">| Aprendiz SENA |</p>
          <p className='mt-6 max-w-2xl text-center text-gray-600 leading-relaxed'> soy aprendiz de el centro agroempresarial y desarrollo pecuario del huila de le tecnologo 
            analisis y desarrollopecuario del huila </p>
        </section>

        {/* HABILIDADES */}
        <section className="flex-shrink-0 w-screen h-full bg-white snap-start flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Habilidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { src: "/html.png", label: "HTML" },
              { src: "/css.png", label: "CSS" },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={skill.src} alt={skill.label} className="w-12 h-12 mb-2" />
                <p>{skill.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section className="flex-shrink-0 w-screen h-full bg-gradient-to-bl from-purple-100 to-white snap-start flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Proyectos</h2>
          <div className="bg-white shadow-lg rounded-xl p-4 w-72">
            <img src="/proyecto1.jpg" alt="Proyecto 1" className="rounded-lg mb-3 h-40 w-full object-cover" />
            <h3 className="text-lg font-semibold">Gestor de tareas</h3>
            <p className="text-sm text-gray-700">App en React para organizar tareas.</p>
            <a href="https://github.com/tuusuario/proyecto1" target="_blank" className="text-blue-600 text-sm hover:underline">Ver en GitHub</a>
          </div>
        </section>

        {/* CONTACTO */}
        <section className="flex-shrink-0 w-screen h-full bg-gray-900 text-white snap-start flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-3xl font-bold mb-4">Contacto</h2>
          <p>Email: juliana@example.com</p>
          <p>WhatsApp: 1234567890</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">GitHub</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
