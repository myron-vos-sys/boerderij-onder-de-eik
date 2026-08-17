import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Kaart, Kop, Sectie } from "@/components/Bouwstenen";
import { OpenMelding } from "@/components/OpenMelding";
import { FotoPlaats } from "@/components/Plaatshouders";
import { home } from "@/content/paginas";
import { openingstijdenRegels, winkelAdres } from "@/content/bedrijf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Boerderij Onder de Eik — boerderijwinkel en zorgboerderij in Bocholtz",
      },
      {
        name: "description",
        content:
          "Verse groente uit eigen moestuin, grasgevoerd rundvlees en eieren van eigen kippen. En dagbesteding op een werkende boerderij in Bocholtz, Zuid-Limburg.",
      },
      {
        property: "og:title",
        content: "Boerderij Onder de Eik — Bocholtz",
      },
      {
        property: "og:description",
        content:
          "Boerderijwinkel en zorgboerderij aan de Groeneweg in Bocholtz, Zuid-Limburg.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePagina,
});

function HomePagina() {
  return (
    <>
      <section className="bg-creme-200/70 py-16 sm:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <OpenMelding className="mb-6 flex w-fit" />
            <h1 className="text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              {home.titel}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stam-600">
              {home.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/boerderijwinkel"
                className="inline-flex items-center gap-2 rounded-full bg-diep-700 px-6 py-3 font-semibold text-creme-100 transition-colors hover:bg-diep-800"
              >
                De winkel
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                to="/zorgboerderij"
                className="inline-flex items-center gap-2 rounded-full border border-diep-700 px-6 py-3 font-semibold text-diep-800 transition-colors hover:bg-blad-100"
              >
                De zorgboerderij
              </Link>
            </div>
          </div>
          <FotoPlaats
            hoogte="h-80 lg:h-[26rem]"
            omschrijving="Sfeerbeeld van de boerderij aan de Groeneweg: het erf met de grote eik, of de moestuin met het heuvelland op de achtergrond."
          />
        </div>
      </section>

      <Sectie>
        <Kop bovenkop="Twee takken, één boerderij">{home.takken.kop}</Kop>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stam-600">
          {home.takken.tekst}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[home.takken.winkel, home.takken.zorg].map((tak, i) => (
            <Kaart key={tak.titel} titel={tak.titel}>
              <FotoPlaats
                className="mb-5"
                hoogte="h-48"
                omschrijving={
                  i === 0
                    ? "Binnen in de boerderijwinkel: gevulde schappen met groente uit eigen tuin."
                    : "Deelnemers aan het werk in de moestuin of bij de dieren."
                }
              />
              <p>{tak.tekst}</p>
              <Link
                to={i === 0 ? "/boerderijwinkel" : "/zorgboerderij"}
                className="mt-4 inline-flex items-center gap-2 font-semibold text-diep-700 underline-offset-4 hover:underline"
              >
                {tak.link}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Kaart>
          ))}
        </div>
      </Sectie>

      <Sectie toon="donker">
        <Kop toon="donker" bovenkop="Waar we van uitgaan">
          Hoe we het hier doen
        </Kop>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {home.uitgangspunten.map((u) => (
            <div key={u.titel}>
              <h3 className="text-xl text-creme-100">{u.titel}</h3>
              <p className="mt-2 leading-relaxed text-creme-200/85">{u.tekst}</p>
            </div>
          ))}
        </div>
      </Sectie>

      <Sectie toon="creme">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kop bovenkop="In de winkel">Ons aanbod</Kop>
            <ul className="mt-6 space-y-3">
              {home.assortimentKort.map((item) => (
                <li key={item} className="flex gap-3 text-stam-700">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-blad-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/boerderijwinkel"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-diep-700 underline-offset-4 hover:underline"
            >
              Het hele assortiment
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-xl">Langskomen</h3>
            <address className="mt-3 not-italic text-stam-700">
              {winkelAdres.straat}
              <br />
              {winkelAdres.postcode} {winkelAdres.plaats}
            </address>
            <dl className="mt-5 space-y-1.5 text-stam-700">
              {openingstijdenRegels.map((r) => (
                <div key={r.dagen} className="flex justify-between gap-4 border-b border-border/70 pb-1.5">
                  <dt>{r.dagen}</dt>
                  <dd className={r.open ? "font-medium text-diep-800" : "text-stam-500"}>
                    {r.tijd}
                  </dd>
                </div>
              ))}
            </dl>
            <OpenMelding className="mt-5 flex w-fit" />
          </div>
        </div>
      </Sectie>
    </>
  );
}
