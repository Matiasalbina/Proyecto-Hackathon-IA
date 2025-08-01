"use client";
import React from "react";
import Button from "../ui/button/Button";

const ContactosGuardadosExito = () => {
  return (
    <div className="max-w-md p-6 bg-green-100 rounded">
      <h2 className="text-xl font-bold mb-4">¡Contactos guardados correctamente!</h2>
      <p>Ahora puedes comenzar a usar la aplicación.</p>
      <div className="py-4">
        <Button>Iniciar</Button>
      </div>
    </div>
  );
};

export default ContactosGuardadosExito;
