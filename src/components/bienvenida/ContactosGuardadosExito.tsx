"use client";
import React from "react";
import Button from "../ui/button/Button";

interface ContactosGuardadosExito {
  onStart?: () => void;
}

const ContactosGuardadosExito : React.FC<ContactosGuardadosExito> = ({
  onStart,
}) => {
  return (
    <div className="max-w-md p-6 bg-success-50 rounded">
      <h2 className="text-xl font-bold mb-4">¡Contactos guardados correctamente!</h2>
      <p>Ahora puedes comenzar a usar la aplicación.</p>
      <div className="py-4">
        <Button onClick={onStart}>Iniciar</Button>
      </div>
    </div>
  );
};

export default ContactosGuardadosExito;
