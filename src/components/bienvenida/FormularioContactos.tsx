"use client";
import React from "react";

interface Props {
  onGuardar?: () => void;
}

const FormularioContactos: React.FC<Props> = ({ onGuardar }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (onGuardar) onGuardar();
      }}
      className="max-w-md mx-auto p-4 space-y-4"
    >
      <label className="block">
        <span className="text-sm">Contactos de emergencia</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <p className="font-semibold pt-2">Contacto 1</p>
      <label className="block">
        <span className="text-sm">Nombre</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <label className="block">
        <span className="text-sm">Teléfono</span>
        <input
          type="tel"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <label className="block">
        <span className="text-sm">Relación</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <p className="font-semibold pt-2">Contacto 2</p>
      <label className="block">
        <span className="text-sm">Nombre</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <label className="block">
        <span className="text-sm">Teléfono</span>
        <input
          type="tel"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <label className="block">
        <span className="text-sm">Relación</span>
        <input
          type="text"
          className="mt-1 w-full p-2 rounded bg-gray-100"
          disabled
        />
      </label>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded font-semibold"
      >
        Guardar
      </button>
    </form>
  );
};

export default FormularioContactos;
