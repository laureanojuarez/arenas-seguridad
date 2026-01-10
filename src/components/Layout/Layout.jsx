import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Header/Header";
import { useEffect } from "react";
import { WhatsAppContact } from "../WhatsAppContact";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 font-montserrat">
      <Header />
      <main>
        <Outlet />
        <WhatsAppContact /> 
      </main>
    </div>
  );
}

export default Layout;
