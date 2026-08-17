/**
 * Alle bedrijfsgegevens op één plek.
 * Wijzig je hier een adres of een openingstijd, dan werkt dat overal door.
 */

export const bedrijf = {
  naam: "Boerderij Onder de Eik",
  plaats: "Bocholtz",
  streek: "Zuid-Limburg",
  telefoon: "06 40 72 67 56",
  telefoonLink: "tel:+31640726756",
  email: "info@onderdeeikbocholtz.nl",
  emailLink: "mailto:info@onderdeeikbocholtz.nl",
} as const;

export const winkelAdres = {
  label: "Boerderijwinkel",
  straat: "Groeneweg 7",
  postcode: "6351 JG",
  plaats: "Bocholtz",
  routeUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Groeneweg+7%2C+6351+JG+Bocholtz",
} as const;

export const zorgAdres = {
  label: "Zorgboerderij",
  straat: "Groeneweg 5a",
  postcode: "6351 JG",
  plaats: "Bocholtz",
  routeUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Groeneweg+5a%2C+6351+JG+Bocholtz",
} as const;

/** 0 = zondag, 1 = maandag, ... 6 = zaterdag. null = gesloten. */
export type Dagtijd = { open: string; dicht: string } | null;

export const openingstijden: readonly Dagtijd[] = [
  null, // zondag
  null, // maandag
  null, // dinsdag
  null, // woensdag
  { open: "10:00", dicht: "18:00" }, // donderdag
  { open: "10:00", dicht: "18:00" }, // vrijdag
  { open: "10:00", dicht: "17:00" }, // zaterdag
];

export const dagnamen = [
  "zondag",
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
] as const;

/** Weergave in de footer en op de contactpagina, van maandag naar zondag. */
export const openingstijdenRegels = [
  { dagen: "maandag t/m woensdag", tijd: "gesloten", open: false },
  { dagen: "donderdag", tijd: "10:00 – 18:00", open: true },
  { dagen: "vrijdag", tijd: "10:00 – 18:00", open: true },
  { dagen: "zaterdag", tijd: "10:00 – 17:00", open: true },
  { dagen: "zondag", tijd: "gesloten", open: false },
] as const;

export const navigatie = [
  { naam: "Home", to: "/" },
  { naam: "Boerderijwinkel", to: "/boerderijwinkel" },
  { naam: "Zorgboerderij", to: "/zorgboerderij" },
  { naam: "Dieren", to: "/dieren" },
  { naam: "Over ons", to: "/over-ons" },
  { naam: "Contact & route", to: "/contact" },
] as const;
