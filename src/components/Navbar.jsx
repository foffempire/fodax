import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "../data/company.js";
import Button from "./Button.jsx";
import logo from "../assets/logo.png"

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

function navClass({ isActive }) {
  return `text-sm font-bold transition hover:text-red-600 ${
    isActive ? "text-red-600" : "text-slate-700"
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2" to="/">
          <img src={logo} alt="" width={150} />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink className={navClass} key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* <div className="hidden lg:block">
          <Button to="/contact" className="px-4 py-2.5" showIcon={false}>
            Request Quote
          </Button>
        </div> */}

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-950 transition hover:border-red-200 hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 lg:hidden"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  className={({ isActive }) =>
                    `rounded-md px-3 py-3 text-base font-bold ${
                      isActive ? "bg-red-50 text-red-700" : "text-slate-800 hover:bg-slate-50"
                    }`
                  }
                  key={link.to}
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              ))}
              {/* <Button to="/contact" className="mt-2 w-full" showIcon={false}>
                Request Quote
              </Button> */}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
