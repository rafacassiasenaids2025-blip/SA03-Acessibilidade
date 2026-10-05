import React, { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

const FILTROS = [
  { rotulo: "Todas", valor: "todas" },
  { rotulo: "Pendentes", valor: "pendentes" },
  { rotulo: "Concluídas", valor: "concluidas" },
];

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [mostrarRelogio, setMostrarRelogio] = useState(true);
  const [anuncio, setAnuncio] = useState("");

  function adicionarTarefa(novaTarefa) {
    const item = { ...novaTarefa, id: Date.now(), concluida: false };
    setTarefas((atual) => [...atual, item]);
    setAnuncio(`Tarefa "${novaTarefa.titulo}" adicionada.`);
  }

  function alternarConcluida(id) {
    const tarefa = tarefas.find((t) => t.id === id);
    if (!tarefa) return;
    const vaiConcluir = !tarefa.concluida;
    const status = vaiConcluir ? "concluída" : "pendente";

    setTarefas((atual) =>
      atual.map((t) => (t.id === id ? { ...t, concluida: vaiConcluir } : t))
    );
    setAnuncio(`Tarefa "${tarefa.titulo}" marcada como ${status}.`);
  }

  function removerTarefa(id) {
    const tarefa = tarefas.find((t) => t.id === id);
    if (!tarefa) return;

    setTarefas((atual) => atual.filter((t) => t.id !== id));
    setAnuncio(`Tarefa "${tarefa.titulo}" removida.`);
  }

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === "pendentes") return !t.concluida;
    if (filtro === "concluidas") return t.concluida;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Skip link para navegação por teclado */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      <Header
        mostrarRelogio={mostrarRelogio}
        setMostrarRelogio={setMostrarRelogio}
      />

      {/* Região acessível para leitores de tela */}
      <div aria-live="polite" role="status" className="sr-only">
        {anuncio}
      </div>

      <main id="conteudo" className="max-w-4xl mx-auto px-6 py-10">
        <TaskForm onAdicionar={adicionarTarefa} />

        <div className="flex justify-between items-center mb-6">
          <div role="group" aria-label="Filtrar tarefas" className="flex gap-2">
            {FILTROS.map((opcao) => (
              <button
                key={opcao.valor}
                onClick={() => setFiltro(opcao.valor)}
                aria-pressed={filtro === opcao.valor}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  filtro === opcao.valor
                    ? "bg-emerald-700 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-200"
                }`}
              >
                {opcao.rotulo}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {tarefasFiltradas.map((tarefa) => (
            <TaskCard
              key={tarefa.id}
              {...tarefa}
              onToggle={() => alternarConcluida(tarefa.id)}
              onRemover={() => removerTarefa(tarefa.id)}
            />
          ))}
        </div>
      </main>

      <footer className="text-center text-xs text-slate-600 py-6">
        DevLife Dashboard - SA03 Front-end SENAI
      </footer>
    </div>
  );
}

export default App;