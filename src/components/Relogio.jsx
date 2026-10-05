import React, { useState, useEffect } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="font-mono text-sm text-emerald-400">{hora}</span>;
}

export default Relogio;