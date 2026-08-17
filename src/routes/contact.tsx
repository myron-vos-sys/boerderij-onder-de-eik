import { createFileRoute } from "@tanstack/react-router";
import { Kop, Sectie } from "@/components/Bouwstenen";
import { OpenMelding } from "@/components/OpenMelding";
import { contact } from "@/content/paginas";
import {
  bedrijf,
  openingstijdenRegels,
  winkelAdres,
  zorgAdres,
} from "@/content/bedrijf";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & route — Boerderij Onder de Eik, Bocholtz" },
      {
        name: "description",
        content:
          "Adres, openingstijden en route naar de boerderijwinkel en de zorgboerderij aan de Groeneweg in Bocholtz. Bellen of mailen kan altijd.",
      },
      { property: "og:title", content: "Contact & route — Onder de Eik" },
      {
        property: "og:description",
        content:
          "Groeneweg 7 en 5a, 6351 JG Bocholtz. Telefoon 06 40 72 67 56.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPagina,
});

function AdresBlok({
  adres,
  omschrijving,
}: {
  adres: typeof winkelAdres | typeof zorgAdres;
  omschrijving: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-xl">{adres.label}</h2>
      <address className="mt-3 not-italic text-stam-700">
        {adres.straat}
        <br />
        {adres.postcode} {adres.plaats}
      </address>
      <p className="mt-3 text-sm text-stam-600">{omschrijving}</p>
      <a
        href={adres.routeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex w-fit rounded-full bg-diep-700 px-5 py-2.5 pt-2.5 text-sm font-semibold text-creme-100 hover:bg-diep-800"
      >
        Route via Google Maps (nieuw tabblad)
      </a>
    </div>
  );
}

function ContactPagina() {
  return (
    <>
      <section className="bg-creme-200/70 py-14 sm:py-20">
        <div className="wrap">
          <OpenMelding className="mb-6 flex w-fit" />
          <h1 className="max-w-3xl text-4xl sm:text-5xl">{contact.titel}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stam-600">
            {contact.intro}
          </p>
        </div>
      </section>

      <Sectie>
        <div className="grid gap-6 lg:grid-cols-3">
          <AdresBlok
            adres={winkelAdres}
            omschrijving="Hier is de winkel. Parkeren kan gratis voor de deur."
          />
          <AdresBlok
            adres={zorgAdres}
            omschrijving="Hier is de dagbesteding, naast de winkel aan dezelfde weg."
          />
          <div className="rounded-2xl border border-border bg-blad-100 p-6 sm:p-8">
            <h2 className="text-xl">Direct contact</h2>
            <p className="mt-3 text-stam-700">
              Bellen of mailen kan altijd. Een contactformulier hebben we niet.
            </p>
            <a
              href={bedrijf.telefoonLink}
              className="mt-5 block text-2xl font-semibold text-diep-800 underline-offset-4 hover:underline"
            >
              {bedrijf.telefoon}
            </a>
            <a
              href={bedrijf.emailLink}
              className="mt-2 block break-all text-lg font-medium text-diep-800 underline-offset-4 hover:underline"
            >
              {bedrijf.email}
            </a>
          </div>
        </div>
      </Sectie>

      <Sectie toon="creme">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kop bovenkop="Winkel">Openingstijden</Kop>
            <dl className="mt-6 space-y-1.5 text-stam-700">
              {openingstijdenRegels.map((r) => (
                <div
                  key={r.dagen}
                  className="flex justify-between gap-4 border-b border-stam-200 pb-1.5"
                >
                  <dt>{r.dagen}</dt>
                  <dd className={r.open ? "font-medium text-diep-800" : "text-stam-500"}>
                    {r.tijd}
                  </dd>
                </div>
              ))}
            </dl>
            <OpenMelding className="mt-6 flex w-fit" />
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl">Handig om te weten</h2>
            <ul className="mt-4 space-y-3 text-stam-700">
              {contact.handig.map((h) => (
                <li key={h} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blad-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Sectie>
    </>
  );
}
