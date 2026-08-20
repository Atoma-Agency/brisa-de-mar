const WHATSAPP_NUMBER = "34633926007";
const WHATSAPP_MESSAGE = "Hola, me gustaría reservar una cita.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/Brisa-de-Mar-Cunit-659683954477650/",
  instagram: "https://www.instagram.com/brisademarcunit/",
};

export const CONTACT_DETAILS = {
  address: "Av. de les Sorres nº 27 local 5, Cunit",
  phoneDisplay: "633 926 007",
  phoneHref: "tel:+34633926007",
  email: "info@brisademarcunit.com",
};
