"use client";
import React from "react";
import ComponentCard from "@/components/common/ComponentCard";
import Image from "next/image";
import Button from "../button/Button";
import { CalendarClock } from "lucide-react";
import { Star } from "lucide-react";


interface Doctor {
  id: number;
  precio:string;
  nombre: string;
  especialidad: string;
  imagen: string;
  descripcion: string;
}

interface DetalleDoctorProps {
  doctor: Doctor;
  onVolver: () => void;
}

export default function DetalleDoctor({ doctor }: DetalleDoctorProps) {
  return (
    <ComponentCard title="">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-6">
        <div>
          {doctor.imagen ? (
            <Image
              src={doctor.imagen}
              alt={doctor.nombre}
              width={400}
              height={300}
              className="mb-4 rounded-lg"
            />
          ) : (
            <div className="mb-4 rounded-lg bg-gray-200 w-full h-72 flex items-center justify-center">
              <p>Imagen no disponible</p>
            </div>
          )}
        </div>
        <div>
          
          <div className="grid grid-cols-1 gap-2 grid-cols-12">
            {/* Nombre y precio en una fila (8 + 4) */}
            <h3 className="col-span-8 text-lg font-semibold text-gray-800 dark:text-white/90">
              {doctor.nombre}
            </h3>
            <p className="col-span-4 text-right text-gray-700 font-medium">
              $ {doctor.precio}
            </p>

            {/* Especialidad ocupa toda la fila */}
            <p className="col-span-12 mt-1 font-normal text-gray-500 text-theme-sm dark:text-gray-400">
            {doctor.especialidad}
            </p>

            {/* Horarios (6 columnas) */}
            <div className="col-span-6 flex items-center justify-start gap-2">
              {/* Icono de hora */}
              <CalendarClock size={14}/>
              <div>
                <p className="text-sm font-medium">Lun - Vie: 9am - 6pm</p>
              </div>
            </div>

            {/* Rating (6 columnas) */}
            <div className="col-span-6 flex items-center justify-end gap-2">
              {/* Icono de estrellas */}
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <p className="text-sm font-medium">4.5 / 5</p>
            </div>
          </div>

          <p className="mt-2 text-gray-500 dark:text-gray-400 text-theme-md">
            {doctor.descripcion}
          </p>
          <Button startIcon={<CalendarClock/>} className="mt-6 text-blue-600 ">
            Agendar hora
          </Button>
        </div>
      </div>
    </ComponentCard>
  );
}
