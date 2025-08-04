// components/AppointmentCard.tsx
import React from "react";

export default function AppointmentCard() {
  return (
    <div className="mx-auto max-w-md space-y-6 rounded-md border border-blue-500 bg-white p-4 shadow-sm">
      <h2 className="text-center text-lg font-semibold">Próximas citas</h2>

      {/* Próxima cita */}
      <div className="flex items-center justify-between rounded-md border bg-gray-50 p-3">
        <div className="w-16 text-center">
          <p className="text-xs font-semibold">Enero</p>
          <p className="text-2xl font-bold">21</p>
          <p className="text-xs">a las 14:30 hrs.</p>
        </div>
        <div className="flex-1 px-4">
          <p className="text-sm font-semibold">Dra. Celeste Diaz</p>
          <p className="text-xs text-gray-500">Psicólogo</p>
        </div>
        <div className="flex flex-col items-end">
          <select className="mb-1 border-none bg-transparent p-0 text-xs text-gray-700">
            <option>Confirmado</option>
            <option>Cancelado</option>
          </select>
          <button className="rounded bg-black px-2 py-1 text-xs text-white">
            Reagendar
          </button>
        </div>
      </div>

      {/* Citas pasadas */}
      <div>
        <p className="mb-3 font-semibold">Citas Pasadas</p>

        {/* Cita 1 */}
        <div className="mb-3 flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold">Dra. Celeste Diaz</p>
            <p className="text-xs text-gray-500">Psicólogo</p>
            <p className="mt-1 text-xs text-gray-500">Enero 15, 2025</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">$25.000</p>
            <div className="mt-1 flex gap-2">
              <button className="rounded bg-gray-400 px-2 py-1 text-xs text-white">
                Ver Agenda
              </button>
              <button className="rounded bg-black px-2 py-1 text-xs text-white">
                Boleta
              </button>
            </div>
          </div>
        </div>

        {/* Cita 2 */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold">Dr. Bernardo Rodriguez</p>
            <p className="text-xs text-gray-500">Psiquiatra</p>
            <p className="mt-1 text-xs text-gray-500">Dic 08, 2024</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">$50.000</p>
            <div className="mt-1 flex gap-2">
              <button className="rounded bg-gray-400 px-2 py-1 text-xs text-white">
                Ver Agenda
              </button>
              <button className="rounded bg-black px-2 py-1 text-xs text-white">
                Boleta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
