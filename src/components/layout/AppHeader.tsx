
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    label: "Mis rutinas",
    href: "/routines",
  },
  {
    label: "Rutinas Clean",
    href: "/routines-clean",
  },
];

export default function AppHeader() {
  const pathname = usePathname();

  // El header solo aparece en las páginas de rutinas.
  if (
    pathname !== "/routines" &&
    pathname !== "/routines-clean"
  ) {
    return null;
  }

  const isActive = (href: string) => pathname === href;

  return (
    <header className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      {/* Menú móvil */}
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div
            tabIndex={0}
            role="button"
            aria-label="Abrir menú de navegación"
            className="btn btn-ghost"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
          >
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    isActive(item.href) ? "menu-active" : ""
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/routines"
          className="btn btn-ghost text-xl"
        >
          Routina
        </Link>
      </div>

      {/* Menú escritorio */}
      <nav
        aria-label="Navegación principal"
        className="navbar-center hidden md:flex"
      >
        <ul className="menu menu-horizontal px-1">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  isActive(item.href) ? "menu-active" : ""
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Acción de usuario */}
      <div className="navbar-end">
        <Link
          href="/login"
          className="btn btn-outline btn-sm"
        >
          Perfil
        </Link>
      </div>
    </header>
  );
}
