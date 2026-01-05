import { Link } from "react-router-dom";
import seguridadArenas from "/logoarenas.jpg";

export const Header = () => {
  return (
    <header className="w-full h-16 flex justify-between items-center px-4 bg-stone-800 text-white">
      <Link to="/">
        <img src={seguridadArenas} alt="Seguridad Arenas" className="w-16" />
      </Link>
      <nav>
        <ul className="flex gap-2">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};
