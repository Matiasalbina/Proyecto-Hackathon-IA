// src/components/ui/EmergencyHelp.tsx

import React from "react";

const EmergencyHelp = () => {
  return (
    <div className="p-4">
      <h2 className="mb-2 text-xl font-bold">Mi plan de emergencia</h2>
      <p className="mb-4 text-sm text-gray-600">
        Si estás lidiando con abuso, trauma o crisis, esta plataforma no es
        suficiente. Es importante que hables con una persona sobre lo que estás
        sintiendo...
      </p>

      {/* Red de apoyo */}
      <h3 className="font-semibold">Tu red de apoyo</h3>
      <ul className="mb-4 space-y-2">
        <li className="rounded-md border p-2">📞 Contacto cercano 1</li>
        <li className="rounded-md border p-2">📞 Contacto cercano 2</li>
        <li className="rounded-md border p-2">🏥 Centro de salud mental</li>
      </ul>

      {/* Líneas de emergencia */}
      <h3 className="font-semibold">Líneas de emergencia</h3>
      <ul className="mb-4 space-y-2">
        <li className="rounded-md border p-2">
          📞 Fono Salud Mental (600...){" "}
        </li>
        <li className="rounded-md border p-2">📞 131 Emergencia Médica</li>
        <li className="rounded-md border p-2">📞 Salud Responde</li>
      </ul>

      {/* Ejercicios */}
      <h3 className="font-semibold">Ejercicios</h3>
      <ul className="space-y-2">
        <li className="rounded-md border p-2">
          🧘 Respiración en caso de crisis
        </li>
        <li className="rounded-md border p-2">🧠 Conexión al presente</li>
      </ul>
    </div>
  );
};

export default EmergencyHelp;
