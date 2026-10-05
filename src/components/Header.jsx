import React from "react";
import Relogio from "./Relogio";

function Header({ mostrarRelogio, setMostrarRelogio }) {
  return (
    <header className="bg-slate-800 text-white p-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">DevLife Dashboard</h1>
      <div className="flex items-center gap-4">
        {mostrarRelogio && (
          <span aria-hidden="true">
            <Relogio />
          </span>
        )}
        <button
          onClick={() => setMostrarRelogio(!mostrarRelogio)}
          aria-pressed={mostrarRelogio}
          className="text-xs border border-slate-600 hover:border-emerald-400 px-3 py-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
        >
          {mostrarRelogio ? "Esconder relógio" : "Mostrar relógio"}
        </button>
      </div>
    </header>
  );
}

export default Header;