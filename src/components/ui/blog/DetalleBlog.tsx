import React from "react";
import ComponentCard from "@/components/common/ComponentCard";

interface Ejercicio {
  id: number;
  titulo: string;
  imagen: string;
  contenido: string;
}

interface DetalleBlogProps {
  ejercicio: Ejercicio;
  onVolver: () => void;
}

export default function DetalleBlog({ ejercicio, onVolver }: DetalleBlogProps) {
  return (
    <>
    <ComponentCard title={ejercicio.titulo}>
        <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
        <div className="p-6">
        <button onClick={onVolver} className="mb-4 text-blue-600 underline">
            ← Volver
        </button>
        <img
            src={ejercicio.imagen}
            alt={ejercicio.titulo}
            className="mb-4 rounded-lg"
        />
        <p>{ejercicio.contenido}</p>
        </div>
        </div>
    </ComponentCard>
    </>
  );
}
