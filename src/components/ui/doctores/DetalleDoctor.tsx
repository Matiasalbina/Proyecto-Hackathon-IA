'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ComponentCard from '@/components/common/ComponentCard';
import Button from '../button/Button';
import { CalendarClock, Star } from 'lucide-react';
import { Modal } from '../modal';
import HorariosDisponibles from '@/components/ui/doctores/HorariosDisponibles';
import { useModal } from '@/hooks/useModal';
import CitaCreada from './CitaCreada';

interface Doctor {
  id: number;
  precio: string;
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
  const { isOpen, openModal, closeModal: closeModalFromHook  } = useModal();
  const [horaSeleccionada, setHoraSeleccionada] = useState<string | null>(null);
  const [horaConfirmada, setHoraConfirmada] = useState(true);


  const handleSeleccionHora = (hora: string) => {
    setHoraSeleccionada(hora);
  };

  const handleSave = () => {
    setHoraConfirmada(false);
    console.log("Hora seleccionada:", horaSeleccionada);
  };

  const closeModal = () => {
  setHoraConfirmada(true);  // Resetea la vista para que al abrir se muestre el selector
  closeModalFromHook();     // Cierra el modal
};
  

  // Rango de los próximos 7 días
  const today = new Date();
  const end = new Date();
  end.setDate(today.getDate() + 3);
  const rango = {
    start: today.toISOString().slice(0, 10),
    end: end.toISOString().slice(0, 10),
  };

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
          <div className="grid grid-cols-12 gap-2">
            <h3 className="col-span-8 text-lg font-semibold text-gray-800 dark:text-white/90">
              {doctor.nombre}
            </h3>
            <p className="col-span-4 text-right text-gray-700 font-medium">
              $ {doctor.precio}
            </p>

            <p className="col-span-12 mt-1 font-normal text-gray-500 dark:text-gray-400 text-theme-sm">
              {doctor.especialidad}
            </p>

            <div className="col-span-6 flex items-center gap-2">
              <CalendarClock size={14} />
              <p className="text-sm font-medium">Lun - Vie: 9am - 6pm</p>
            </div>

            <div className="col-span-6 flex items-center justify-end gap-2">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <p className="text-sm font-medium">4.5 / 5</p>
            </div>
          </div>

          <p className="mt-2 text-gray-500 dark:text-gray-400 text-theme-md">
            {doctor.descripcion}
          </p>

          <Button startIcon={<CalendarClock />} onClick={() => {
            setHoraConfirmada(true); // Por si acaso, al abrir resetea
            openModal();
          }} className="mt-6 text-blue-600">
            Agendar hora
          </Button>

          <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4 flex justify-center">
            {horaConfirmada ? (
                <div className="p-4 lg:p-6">
              <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                Selecciona un horario disponible
              </h4>
              <HorariosDisponibles rango={rango} onSeleccionar={handleSeleccionHora} />

              <div className="flex justify-end gap-3 mt-6">
                <Button size="sm" variant="outline" onClick={closeModal}>
                  Cancelar
                </Button>
                <Button size="sm" onClick={handleSave}>
                  Confirmar hora
                </Button>
              </div>
            </div>
              ) : (
             <CitaCreada />
            )}
          </Modal>
        </div>
      </div>
    </ComponentCard>
  );
}
