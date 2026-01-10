
export const ContactUs = () => {
  return (
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat tracking-wide">
            CONTÁCTENOS
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-stone-400 max-w-2xl mx-auto text-lg">
            Estamos listos para proteger lo que más importa. Solicite su cotización hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-stone-900 p-4 rounded-lg border border-stone-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Llámenos</h3>
                <p className="text-stone-400 mb-1">+54 341 1234-5678</p>
                <p className="text-stone-500 text-sm">Disponibles 24/7 para emergencias</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-stone-900 p-4 rounded-lg border border-stone-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Envíenos un Email</h3>
                <p className="text-stone-400 mb-1">contacto@arenasseguridad.com</p>
                <p className="text-stone-500 text-sm">Respondemos en menos de 24 horas</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-stone-900 p-4 rounded-lg border border-stone-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Visítenos</h3>
                <p className="text-stone-400 mb-1">Dr. Cue 800</p>
                <p className="text-stone-500 text-sm"> Rosario, Santa Fe, Argentina</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-900 p-8 rounded-2xl shadow-xl border border-stone-800">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-colors"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-colors"
                  placeholder="juan@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-2">Mensaje</label>
                <textarea 
                  rows="4"
                  className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-colors resize-none"
                  placeholder="¿En qué podemos ayudarle?"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-stone-900 font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-yellow-500/20"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
