export type Treatment = {
  id: string;
  title: string;
  description: string;
  label: string;
  image: string;
  imageAlt: string;
};

export const TREATMENTS: Treatment[] = [
  {
    id: "masajes",
    title: "Masajes",
    description:
      "Masajes relajantes y descontracturantes adaptados a cada persona, para liberar tensiones y recuperar el bienestar.",
    label: "Relax & bienestar",
    image: "/images/masajes.jpg",
    imageAlt: "Masaje relajante en Brisa de Mar",
  },
  {
    id: "faciales",
    title: "Tratamientos faciales",
    description:
      "Limpieza, hidratación y técnicas avanzadas adaptadas a tu piel, para devolverle luminosidad y equilibrio.",
    label: "Piel & luminosidad",
    image: "/images/faciales.jpg",
    imageAlt: "Tratamiento facial en Brisa de Mar",
  },
  {
    id: "corporales",
    title: "Tratamientos corporales",
    description:
      "Técnicas manuales y aparatología combinadas para cuidar, tonificar y mejorar el aspecto de la piel.",
    label: "Cuerpo & bienestar",
    image: "/images/corporales.jpg",
    imageAlt: "Tratamiento corporal en Brisa de Mar",
  },
  {
    id: "maquillaje",
    title: "Maquillaje profesional",
    description:
      "Desde un acabado natural hasta un look de fiesta o novia, pensado para acompañarte en tus momentos especiales.",
    label: "Eventos & ocasiones",
    image: "/images/profesional.jpg",
    imageAlt: "Maquillaje profesional en Brisa de Mar",
  },
  {
    id: "lifting",
    title: "Lifting & tinte de pestañas",
    description:
      "Curva, define y aporta intensidad a tu mirada de forma natural, sin necesidad de maquillaje diario.",
    label: "Mirada",
    image: "/images/lifting.jpg",
    imageAlt: "Lifting de pestañas en Brisa de Mar",
  },
  {
    id: "pies",
    title: "Cuidado de pies",
    description:
      "Un ritual esencial que combina estética y bienestar para mantener tus pies suaves, hidratados y saludables.",
    label: "Cuidado & bienestar",
    image: "/images/pies.jpg",
    imageAlt: "Cuidado de pies en Brisa de Mar",
  },
];
