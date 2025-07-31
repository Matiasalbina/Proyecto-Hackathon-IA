// /data/ejercicios.ts

export interface Ejercicio {
  id: number;
  titulo: string;
  imagen: string;
  contenido: string;
}

export const ejercicios: Ejercicio[] = [
  {
    id: 1,
    titulo: "Respiración profunda",
    imagen: "/images/ejercicios/respiracion.jpg",
    contenido: "Este ejercicio te ayuda a calmar tu sistema nervioso respirando profundamente por la nariz y exhalando lentamente por la boca.",
  },
  {
    id: 2,
    titulo: "Escaneo corporal",
    imagen: "/images/ejercicios/escaneo.jpg",
    contenido: "Revisa mentalmente cada parte de tu cuerpo y suelta la tensión acumulada en hombros, mandíbula, y espalda.",
  },
  {
    id: 3,
    titulo: "Visualización guiada",
    imagen: "/images/ejercicios/visualizacion.jpg",
    contenido: "Imagina un lugar seguro y tranquilo. Escucha sonidos relajantes y déjate llevar por esa sensación de calma.",
  },
];
