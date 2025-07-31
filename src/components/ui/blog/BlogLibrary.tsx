"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Button from "../button/Button";
import Image from "next/image";
import { ejercicios } from "@/data/ejercicios";

interface BlogLibraryProps {
  onSelectEjercicio: (ejercicioId: number) => void;
}

export default function BlogLibrary({ onSelectEjercicio }: BlogLibraryProps) {


  return (
    <div>
      <div className="grid grid-cols-1 gap-5 sm:gap-6 xl:grid-cols-2">
        {ejercicios.map((ejercicios) => (
          <div key={ejercicios.id} className="space-y-5 sm:space-y-6">
            <ComponentCard title={ejercicios.titulo}>
              <Image
                width={80}
                height={80}
                src={ejercicios.imagen}
                alt={ejercicios.titulo}
              />
              <p>Contenido breve o resumen...</p>
              <Button onClick={() => onSelectEjercicio(ejercicios.id)}>
                Ir a ejercicio
              </Button>
            </ComponentCard>
          </div>
        ))}
      </div>
    </div>
  );
}

