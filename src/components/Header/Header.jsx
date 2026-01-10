import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import seguridadArenas from "/logoarenas.jpg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Contacto", path: "/contacto" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-stone-900/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={seguridadArenas} 
            alt="Seguridad Arenas" 
            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-transparent group-hover:border-yellow-500 transition-colors duration-300 object-cover" 
          />
          <div className="hidden sm:block">
            <span className="block text-white font-montserrat font-bold tracking-widest text-lg leading-none">ARENAS</span>
            <span className="block text-yellow-500 font-montserrat font-bold tracking-widest text-sm leading-none">SEGURIDAD</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path} 
                  className={`uppercase tracking-widest text-sm font-semibold transition-colors duration-300 relative py-2 ${
                    isActive(link.path) ? "text-yellow-500" : "text-stone-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform transition-transform duration-300 origin-left ${isActive(link.path) ? "scale-x-100" : "scale-x-0"}`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-stone-900/95 backdrop-blur-md border-t border-stone-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col items-center py-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`uppercase tracking-widest text-sm font-bold ${
                  isActive(link.path) ? "text-yellow-500" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
