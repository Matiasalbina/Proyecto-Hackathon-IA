import React from 'react'

export default function CitaCreada() {
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 rounded-2xl bg-white max-w-3xl mx-auto">
      {/* Imagen */}
      <div className="flex justify-center">
        <img
          src="/check-cita.svg" // Asegúrate de tener esta imagen en la carpeta public
          alt="Cita creada con éxito"
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Texto */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-green-600">¡Se ha creado su cita!</h2>
        <p className="text-gray-700">Su cita ha sido creada con éxito.</p>
      </div>
    </div>
  )
}
