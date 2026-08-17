import { openingstijden, dagnamen } from "@/content/bedrijf";

export type OpenStatus = {
  open: boolean;
  tekst: string;
};

function minuten(tijd: string) {
  const [u, m] = tijd.split(":").map(Number);
  return u * 60 + m;
}

/** Rekent op basis van de klok van de bezoeker uit of de winkel nu open is. */
export function berekenStatus(nu: Date): OpenStatus {
  const dag = nu.getDay();
  const nuMin = nu.getHours() * 60 + nu.getMinutes();
  const vandaag = openingstijden[dag];

  if (vandaag && nuMin >= minuten(vandaag.open) && nuMin < minuten(vandaag.dicht)) {
    return { open: true, tekst: `Nu open — tot ${vandaag.dicht}` };
  }

  // Zoek het eerstvolgende moment dat de winkel opengaat.
  for (let i = 0; i < 8; i++) {
    const d = (dag + i) % 7;
    const tijden = openingstijden[d];
    if (!tijden) continue;
    if (i === 0 && nuMin >= minuten(tijden.open)) continue;
    const wanneer =
      i === 0 ? "vandaag" : i === 1 ? "morgen" : dagnamen[d];
    return {
      open: false,
      tekst: `Nu gesloten — weer open ${wanneer} om ${tijden.open}`,
    };
  }

  return { open: false, tekst: "Nu gesloten" };
}
