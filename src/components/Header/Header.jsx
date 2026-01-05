export const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-center">
      <img src={seguridadArenas} alt="Seguridad Arenas" className="w-32" />
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};
