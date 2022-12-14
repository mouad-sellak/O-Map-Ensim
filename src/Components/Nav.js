import React from "react";
import  Toggle from "./Toggle";
export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-600 mb-3">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href=""
            >
              <span className="text-lg" >Ou-Map</span> 
            </a>
            <a className="text-lg font-bold text-white " href="#users" >
              Participans
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>        
          <Toggle />
      </nav>
  );
}