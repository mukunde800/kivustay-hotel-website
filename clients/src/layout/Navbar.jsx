import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil" },
  {
    to: "/chambres",
    label: "Chambres",
    children: [
      { to: "/chambres/standard", label: "Standard" },
      { to: "/chambres/deluxe", label: "Deluxe" },
      { to: "/chambres/suite-junior", label: "Suite Junior" },
      { to: "/chambres/suite-presidentielle", label: "Suite Présidentielle" },
    ],
  },
  { to: "/restaurant", label: "Restaurant" },
  { to: "/spa", label: "Spa" },
  { to: "/activites", label: "Activités" },
  { to: "/galerie", label: "Galerie" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className={`font-display text-2xl font-bold transition ${
            solid ? "text-kivu-700" : "text-white"
          }`}
        >
          Kivu<span className="text-sand-300">Stay</span>
        </Link>

        <ul
          className={`hidden lg:flex gap-8 text-sm font-medium transition ${
            solid ? "text-gray-700" : "text-white"
          }`}
        >
          {links.map((l) => (
            <li key={l.to} className="relative group">
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `hover:text-kivu-400 transition ${isActive ? "text-kivu-400" : ""}`
                }
              >
                {l.label}
              </NavLink>
              {l.children && (
                <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition text-gray-700">
                  {l.children.map((c) => (
                    <li key={c.to}>
                      <Link
                        to={c.to}
                        className="block px-4 py-2 text-sm rounded hover:bg-kivu-50 hover:text-kivu-700"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/reservation"
          className="hidden lg:inline-block bg-kivu-600 hover:bg-kivu-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
        >
          Réserver
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden text-2xl ${solid ? "text-kivu-700" : "text-white"}`}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden bg-white border-t px-6 py-4 space-y-2">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-gray-700 py-2 font-medium"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/reservation"
              onClick={() => setOpen(false)}
              className="block bg-kivu-600 text-white text-center py-2.5 rounded-full font-semibold mt-2"
            >
              Réserver
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}