"use client";
import React, { useState } from "react";
import PageBreadCrumb from "@/components/common/PageBreadCrumb";
import ListaDoctores from "@/components/ui/doctores/ListaDoctores";
import DetalleDoctor from "@/components/ui/doctores/DetalleDoctor";

export default function Doctores() {
  const [doctorSeleccionadoId, setDoctorSeleccionadoId] = useState<number | null>(null);

  const handleSelectDoctor = (id: number) => {
    setDoctorSeleccionadoId(id);
  };

  const handleVolver = () => {
    setDoctorSeleccionadoId(null);
  };

  return (
    <div>
      <PageBreadCrumb
        pageTitle="Doctores"
        onVolver={doctorSeleccionadoId ? handleVolver : undefined}
      />

      {!doctorSeleccionadoId ? (
        <ListaDoctores onSelectDoctor={handleSelectDoctor} />
      ) : (
        <DetalleDoctor
          doctorId={doctorSeleccionadoId}
          onVolver={handleVolver}
        />
      )}
    </div>
  );
}
