"use client";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "../button/Button";
import Image from "next/image";
import { profesionales } from "@/data/profesionales";
import React, { useState, useMemo } from "react";

interface ListaDoctoresProps {
  onSelectDoctor: (doctorId: number) => void;
}
export default function ListaDoctores({ onSelectDoctor }: ListaDoctoresProps) {
  const [filtro, setFiltro] = useState<string>("Todos");

  const especialidades = useMemo(() => {
    const unicas = new Set(profesionales.map((d) => d.especialidad));
    return ["Todos", ...Array.from(unicas)];
  }, []);

  const doctoresFiltrados = useMemo(() => {
    if (filtro === "Todos") return profesionales;
    return profesionales.filter((d) => d.especialidad === filtro);
  }, [filtro]);

return (
    <>
      {/* Filtros */}
    <div className="flex flex-wrap justify-end">
        <div className="inline-flex flex-wrap items-center  gap-2 mb-6 rounded-lg bg-gray-100 p-1 dark:bg-gray-900">
        {especialidades.map((esp) => (
          <button
            key={esp}
            onClick={() => setFiltro(esp)}
            className={`px-3 py-2 font-medium rounded-md text-sm shadow-sm transition-all ${
              filtro === esp
                ? "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {esp}
          </button>
        ))}
      </div>
    </div>

      {/* Lista de doctores */}
      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-4">
        {doctoresFiltrados.map((doctor) => (
          <div key={doctor.id} className="space-y-5 sm:space-y-6">
            <div className="flex justify-start">
              <ComponentCard title={doctor.nombre} className="text-center w-full">
                <div className="w-full">
                  {doctor.imagen ? (
                    <Image
                      src={doctor.imagen}
                      alt={doctor.nombre}
                      width={0}
                      height={0}
                      sizes="90vw"
                      className="w-full h-auto rounded-lg"
                    />
                  ) : (
                    <div className="mb-4 rounded-lg bg-gray-200 w-full h-48 flex items-center justify-center">
                      <p>Imagen no disponible</p>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                  {doctor.especialidad}
                </p>
                <div className="flex justify-center">
                  <Button onClick={() => onSelectDoctor(doctor.id)}>Ver detalle</Button>
                </div>
              </ComponentCard>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
