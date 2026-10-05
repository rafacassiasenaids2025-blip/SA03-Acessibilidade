import React, { useState } from "react";

function TaskForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Estudos");
  const [prioridade, setPrioridade] = useState("media");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    onAdicionar({ titulo, categoria, prioridade });
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-end mb-8">
      <div className="flex-1 min-w-[200px]">
        <label
          htmlFor="campo-titulo"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Nova tarefa
        </label>
        <input
          id="campo-titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="O que precisa ser feito?"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-800"
        />
      </div>

      <div>
        <label
          htmlFor="campo-categoria"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Categoria
        </label>
        <select
          id="campo-categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-800 cursor-pointer"
        >
          <option>Estudos</option>
          <option>Projeto</option>
          <option>Saúde</option>
          <option>Pessoal</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="campo-prioridade"
          className="block text-sm font-semibold text-slate-600 mb-1"
        >
          Prioridade
        </label>
        <select
          id="campo-prioridade"
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-slate-800 cursor-pointer"
        >
          <option value="alta">alta</option>
          <option value="media">media</option>
          <option value="baixa">baixa</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 cursor-pointer"
      >
        + Adicionar
      </button>
    </form>
  );
}

export default TaskForm;