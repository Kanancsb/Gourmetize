import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { NavLinkRenderProps } from "react-router-dom";
import logo from "../assets/imagens/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "hover:text-green-500 dark:hover:text-green-500 transition-colors";
  const linkActive =
    "text-green-600 dark:text-green-400 font-semibold";

  return (
    <nav className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10" />
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
            Gourmetize
          </h1>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-900 dark:text-white text-2xl"
        >
          ☰
        </button>

        {/* LINKS DESKTOP */}
        <ul className="hidden md:flex gap-8 text-slate-700 dark:text-slate-300 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }: NavLinkRenderProps) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Página inicial
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }: NavLinkRenderProps) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contatos"
              className={({ isActive }: NavLinkRenderProps) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Contatos
            </NavLink>
          </li>
        </ul>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <ul className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-4 py-4 space-y-3 text-slate-700 dark:text-slate-300 text-sm">
          <li>
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }: NavLinkRenderProps) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Página inicial
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              onClick={() => setOpen(false)}
              className={({ isActive }: NavLinkRenderProps) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contatos"
              onClick={() => setOpen(false)}
              className={({ isActive }: NavLinkRenderProps) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              Contatos
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}