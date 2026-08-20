export type SpaceImage = {
  id: string;
  src: string;
  alt: string;
};

export const SPACE_PRIMARY_IMAGE: SpaceImage = {
  id: "cabina-1",
  src: "/images/instalaciones02.jpg",
  alt: "Cabina de tratamiento de Brisa de Mar Cunit",
};

export const SPACE_SECONDARY_IMAGE: SpaceImage = {
  id: "cabina-2",
  src: "/images/instalaciones01.jpg",
  alt: "Cabina de tratamiento con ambiente cálido y privado",
};

export const SPACE_GALLERY: SpaceImage[] = [
  {
    id: "zona-pies",
    src: "/images/instalaciones03.jpg",
    alt: "Zona de tratamientos de pies de Brisa de Mar Cunit",
  },
  {
    id: "pasillo",
    src: "/images/instalaciones04.jpg",
    alt: "Pasillo de acceso a las cabinas",
  },
  {
    id: "exterior",
    src: "/images/instalaciones05.jpg",
    alt: "Exterior de Brisa de Mar Cunit",
  },
];

export type SpaceFacility = {
  title: string;
  description: string;
};

export const SPACE_FACILITIES: SpaceFacility[] = [
  {
    title: "Dos cabinas independientes",
    description:
      "Dos espacios preparados para adaptar cada tratamiento a tus necesidades, manteniendo un ambiente tranquilo y privado.",
  },
  {
    title: "Una cabina con ducha",
    description:
      "Una de nuestras cabinas cuenta con ducha, para que puedas refrescarte y continuar con tu día cómodamente después del tratamiento.",
  },
];
