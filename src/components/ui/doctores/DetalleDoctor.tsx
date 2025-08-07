import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchDoctores } from "@/redux/slices/DoctoresSlices";
import Image from "next/image";
import Button from "../button/Button";
import { CalendarClock, Star } from "lucide-react";
import { Modal } from "../modal";
import HorariosDisponibles from "@/components/ui/doctores/HorariosDisponibles";
import { useModal } from "@/hooks/useModal";
import CitaCreada from "./CitaCreada";

interface DetalleDoctorProps {
  doctorId: number;          // Recibimos solo el id del doctor
  onVolver: () => void;
}

export default function DetalleDoctor({ doctorId, onVolver }: DetalleDoctorProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, openModal, closeModal: closeModalFromHook } = useModal();

  const [horaSeleccionada, setHoraSeleccionada] = React.useState<string | null>(null);
  const [horaConfirmada, setHoraConfirmada] = React.useState(true);

  // Obtener lista doctores y estado
  const { lista: doctores, loading, error } = useSelector((state: RootState) => state.doctores);

  // Buscar doctor seleccionado
  const doctor = React.useMemo(() => doctores.find((d) => d.id === doctorId), [doctores, doctorId]);

  // Si la lista está vacía, hacer fetch
  useEffect(() => {
    if (!doctores.length) {
      dispatch(fetchDoctores());
    }
  }, [dispatch, doctores.length]);

  if (loading) return <p>Cargando doctor...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
  if (!doctor) return <p>Doctor no encontrado</p>;

  const handleSeleccionHora = (hora: string) => {
    setHoraSeleccionada(hora);
  };

  const handleSave = () => {
    setHoraConfirmada(false);
    console.log("Hora seleccionada:", horaSeleccionada);
  };

  const closeModal = () => {
    setHoraConfirmada(true);
    closeModalFromHook();
  };

  // Rango de próximos días (3 días)
  const today = new Date();
  const end = new Date();
  end.setDate(today.getDate() + 3);
  const rango = {
    start: today.toISOString().slice(0, 10),
    end: end.toISOString().slice(0, 10),
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
     
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div>
          {doctor.imagen_url ? (
            <Image
              src={doctor.imagen_url}
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
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">{doctor.nombre}</h3>
          <p className="text-right text-gray-700 font-medium">
            {new Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
              minimumFractionDigits: 0
            }).format(Number(doctor.precio_consulta))}
          </p>
          <p className="mt-1 font-normal text-gray-500 dark:text-gray-400">{doctor.profesion}</p>

          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CalendarClock size={14} /> Lun - Vie: 9am - 6pm
            </div>
            <div className="flex items-center gap-2">
              <Star size={14} className="text-yellow-500 fill-yellow-500" /> 4.5 / 5
            </div>
          </div>

          <p className="mt-4 text-gray-600">{doctor.descripcion}</p>

          <Button
            startIcon={<CalendarClock />}
            onClick={() => {
              setHoraConfirmada(true);
              openModal();
            }}
            className="mt-6 text-blue-600"
          >
            Agendar hora
          </Button>

          <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4 flex justify-center">
            {horaConfirmada ? (
              <div className="p-4 lg:p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Selecciona un horario disponible</h4>
                <HorariosDisponibles rango={rango} onSeleccionar={handleSeleccionHora} />

                <div className="flex justify-end gap-3 mt-6">
                  <Button size="sm" variant="outline" onClick={closeModal}>
                    Cancelar
                  </Button>
                  <Button size="sm" onClick={handleSave} disabled={!horaSeleccionada}>
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
    </div>
  );
}
