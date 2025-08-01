export interface Profesionales {
  id: number;
  precio:string;
  nombre: string;
  especialidad: string;
  imagen: string;
  descripcion: string;
}

export const profesionales: Profesionales[] = [
  {
    id: 1,
    precio:"25.000",
    nombre: "Dra. Valentina Ríos",
    especialidad: "Psicólogo",
    imagen: "/images/doctores/valentina.png",
    descripcion: "Especialista en terapia cognitivo-conductual, cálida y cercana. Le gusta usar colores suaves y fondos naturales."
  },
  {
    id: 2,
    precio:"25.000",
    nombre: "Dr. Mateo Fernández",
    especialidad: "Psicólogo",
    imagen: "/images/doctores/mateo.png",
    descripcion: "Experto en mindfulness y manejo del estrés. Ideal un estilo minimalista y relajante, con tonos azules."
  },
  {
    id: 3,
    precio:"25.000",
    nombre: "Dra. Camila Ortiz",
    especialidad: "Psicólogo",
    imagen: "/images/doctores/camila.png",
    descripcion: "Enfoque en psicología infantil y familiar. Imagen amable, colores pastel y elementos lúdicos."
  },
  {
    id: 4,
    precio:"25.000",
    nombre: "Dr. Alejandro Silva",
    especialidad: "Psicólogo",
    imagen: "/images/doctores/alejandro.png",
    descripcion: "Especialista en terapia de pareja. Estilo elegante, con tonos cálidos y luz natural."
  },
  {
    id: 5,
    precio:"55.000",
    nombre: "Dra. Isabel Herrera",
    especialidad: "Psiquiatra",
    imagen: "/images/doctores/dra-isabel.png",
    descripcion: "Enfocada en ansiedad y depresión, estilo profesional y tranquilo, con fondos neutros y expresión serena."
  },
  {
    id: 6,
    precio:"55.000",
    nombre: "Dr. Sebastián Morales",
    especialidad: "Psiquiatra",
    imagen: "/images/doctores/dr-sebastian.png",
    descripcion: "Psicología clínica y neuropsicología. Apariencia intelectual, gafas, fondo con libros o estudio."
  },
  {
    id: 7,
    precio:"25.000",
    nombre: "Dra. Natalia Gómez",
    especialidad: "Psicólogo",
    imagen: "/images/doctores/natalia.png",
    descripcion: "Terapia humanista y apoyo emocional. Estilo cálido, sonrisa amable, colores tierra y texturas suaves."
  },
  {
    id: 8,
    precio:"25.000",
    nombre: "Dr. Rodrigo Castillo",
    especialidad: "Psicólogo",
    imagen: "/images/doctores/rodrigo.png",
    descripcion: "Especialista en adicciones y rehabilitación. Imagen firme y empática, fondo urbano o dinámico."
  },
  {
    id: 9,
    precio:"25.000",
    nombre: "Dra. Laura Méndez",
    especialidad: "Psiquiatra",
    imagen: "/images/doctores/laura.png",
    descripcion: "Psiquiatra con enfoque en salud mental integral. Estilo profesional, fondo blanco o consultorio, bata médica."
  },
  {
    id: 10,
    precio:"25.000",
    nombre: "Dr. Carlos Jiménez",
    especialidad: "Psiquiatra",
    imagen: "/images/doctores/carlos.png",
    descripcion: "Especialista en trastornos del estado de ánimo. Imagen seria, fondo neutro, tonos fríos y expresión confiable."
  }
];
