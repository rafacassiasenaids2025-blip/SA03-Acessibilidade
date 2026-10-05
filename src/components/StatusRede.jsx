import React, { useEffect, useState } from "react";

function StatusRede() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const atualizarStatus = () => setOnline(navigator.onLine);

    window.addEventListener("online", atualizarStatus);
    window.addEventListener("offline", atualizarStatus);

    return () => {
      window.removeEventListener("online", atualizarStatus);
      window.removeEventListener("offline", atualizarStatus);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border ${
        online
          ? "bg-emerald-100 text-emerald-700 border-emerald-200"
          : "bg-red-100 text-red-700 border-red-200"
      }`}
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          online ? "bg-emerald-500" : "bg-red-500"
        }`}
        aria-hidden="true"
      />
      {online ? "Online" : "Offline"}
    </div>
  );
}

export default StatusRede;
