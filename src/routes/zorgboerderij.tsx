import { createFileRoute } from "@tanstack/react-router";
import { Kaart, Kop, Sectie } from "@/components/Bouwstenen";
import { OpenMelding } from "@/components/OpenMelding";
import { FotoPlaats, NogAanTeLeveren } from "@/components/Plaatshouders";
import { zorg } from "@/content/paginas";
import { bedrijf, zorgAdres } from "@/content/bedrijf";

export const Route = createFileRoute("/zorgboerderij")({
  head: () => ({
    meta: [
      { title: "Zorgboerderij en dagbesteding in Bocholtz — Onder de Eik" },
      {
        name: "description",
        content:
          "Dagbesteding voor volwassenen met een verstandelijke beperking op een werkende boerderij in Bocholtz. Werken met de dieren, in de moestuin en in de winkel.",
      },
      { property: "og:title", content: "Zorgboerderij Onder de Eik — Bocholtz" },
      {
        property: "og:description",
        content:
          "Dagbesteding met echt werk: dieren verzorgen, moestuin, boerderijwinkel. Kleine groep of individueel.",
      },
      { property: "og:url", content: "/zorgboerderij" },
    ],
    links: [{ rel: "canonical", href: "/zorgboerderij" }],
  }),
  component: ZorgPagina,
});

function ZorgPagina() {
  return (
    <>
      <section className="bg-creme-200/70 py-14 sm:py-20">
        <div className="wrap">
          <OpenMelding className="mb-6 flex w-fit" />
          <h1 className="max-w-3xl text-4xl sm:text-5xl">{zorg.titel}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stam-600">
            {zorg.intro}
          </p>
        </div>
      </section>

      <Sectie>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Kop bovenkop="Waar het om gaat">{zorg.kern.kop}</Kop>
            <p className="mt-5 text-lg leading-relaxed text-stam-600">
              {zorg.kern.tekst}
            </p>
          </div>
          <FotoPlaats
            hoogte="h-72"
            omschrijving="Deelnemer aan het werk: kruiwagen in de moestuin of voeren van de dieren. Herkenbaar, maar met toestemming voor gebruik van de foto."
          />
        </div>
      </Sectie>

      <Sectie toon="creme">
        <Kop bovenkop="Wat ga ik doen">Dit doen we op een dag</Kop>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {zorg.activiteiten.map((a) => (
            <Kaart key={a.titel} titel={a.titel}>
              <p>{a.tekst}</p>
            </Kaart>
          ))}
        </div>
      </Sectie>

      <Sectie toon="donker">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kop toon="donker" bovenkop="Voor ouders en zorgcoördinatoren">
              {zorg.voorWie.kop}
            </Kop>
            <ul className="mt-6 space-y-3 text-creme-200/90">
              {zorg.voorWie.punten.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blad-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-creme-100/20 bg-diep-900/60 p-6 sm:p-8">
            <h2 className="text-xl text-creme-100">Financiering</h2>
            <p className="mt-3 leading-relaxed text-creme-200/90">
              Dagbesteding kan betaald worden vanuit een PGB, een
              persoonsgebonden budget.
            </p>
            <div className="mt-5 rounded-xl border-2 border-dashed border-creme-100/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blad-200">
                Nog aan te leveren
              </p>
              <p className="mt-2 text-sm leading-relaxed text-creme-200/85">
                Of financiering ook via de WMO of de WLZ mogelijk is, en onder
                welke voorwaarden. Deze informatie is er nog niet; vul die hier
                aan.
              </p>
            </div>
          </div>
        </div>
      </Sectie>

      <Sectie>
        <Kop bovenkop="Aanmelden">In vier stappen</Kop>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {zorg.stappen.map((s, i) => (
            <li
              key={s.titel}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span
                aria-hidden="true"
                className="grid h-10 w-10 place-items-center rounded-full bg-blad-100 font-display text-lg text-diep-800"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg">{s.titel}</h3>
              <p className="mt-2 text-stam-700">{s.tekst}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl bg-blad-100 p-8 text-center">
          <h3 className="text-2xl">Neem contact op</h3>
          <p className="mt-2 text-stam-700">
            Bel of mail gerust. We denken graag even mee.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={bedrijf.telefoonLink}
              className="rounded-full bg-diep-700 px-7 py-3.5 text-lg font-semibold text-creme-100 hover:bg-diep-800"
            >
              {bedrijf.telefoon}
            </a>
            <a
              href={bedrijf.emailLink}
              className="rounded-full border border-diep-700 px-7 py-3.5 text-lg font-semibold text-diep-800 hover:bg-blad-200"
            >
              {bedrijf.email}
            </a>
          </div>
          <address className="mt-6 not-italic text-sm text-stam-600">
            {zorgAdres.label}, {zorgAdres.straat}, {zorgAdres.postcode}{" "}
            {zorgAdres.plaats}
          </address>
        </div>
      </Sectie>

      <Sectie toon="creme">
        <NogAanTeLeveren titel="Documenten en regelingen die hier horen te staan">
          <p>
            Een zorgorganisatie is wettelijk verplicht een klachtenregeling en
            een privacyverklaring vindbaar te maken (Wkkgz en AVG). Die stukken
            zijn er nog niet. Ze horen hier te komen:
          </p>
          <ul className="mt-4 space-y-2">
            {zorg.ontbrekendeDocumenten.map((d) => (
              <li key={d} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-stam-400" />
                {d}
              </li>
            ))}
          </ul>
        </NogAanTeLeveren>
      </Sectie>
    </>
  );
}
