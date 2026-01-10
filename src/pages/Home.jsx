import { WhyChooseUs } from "../components/WhyChooseUs";
import { ContactUs } from "../components/ContactUs";

export const Home = () => {
  return (
    <main className="bg-stone-900 min-h-screen">
      {/* Hero Section */}
      <div className="bg-stone-900 pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-b from-stone-800/50 to-stone-900 pointer-events-none"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-montserrat tracking-widest text-white mb-6">
            ARENAS <span className="text-yellow-500">SEGURIDAD</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-400 font-light tracking-wide max-w-3xl mx-auto">
            PROTECCIÓN PROFESIONAL • VIGILANCIA INTELIGENTE • CONFIANZA ABSOLUTA
          </p>
        </div>
      </div>
      
      <WhyChooseUs />
      <ContactUs />
    </main>
  );
};
