import { createFileRoute } from "@tanstack/react-router";
import { Kop, Sectie } from "@/components/Bouwstenen";
import { FotoPlaats, NogAanTeLeveren } from "@/components/Plaatshouders";
import { home, overOns } from "@/content/paginas";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Boerderij Onder de Eik in Bocholtz" },
      {
        name: "description",
        content:
          "Wie we zijn: een boerderij aan de Groeneweg in Bocholtz met een boerderijwinkel en een zorgboerderij voor dagbesteding.",
      },
      { property: "og:title", content: "Over Boerderij Onder de Eik" },
      {
        property: "og:description",
        content:
          "Een boerderij in het Zuid-Limburgse heuvelland met een winkel en een zorgboerderij.",
      },
      { property: "og:url", content: "/over-ons" },
    ],
    links: [{ rel: "canonical", href: "/over-ons" }],
  }),
  component: OverOnsPagina,
});

function OverOnsPagina() {
  return (
    <>
      <section className="bg-creme-200/70 py-14 sm:py-20">
        <div className="wrap">
          <h1 className="max-w-3xl text-4xl sm:text-5xl">{overOns.titel}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stam-600">
            {overOns.intro}
          </p>
        </div>
      </section>

      <Sectie>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kop bovenkop="Ons verhaal">Hoe deze boerderij is ontstaan</Kop>
            <NogAanTeLeveren
              className="mt-6"
              titel="Het verhaal van de boerderij"
            >
              <p>Deze tekst moet nog geschreven worden. Beantwoord daarin:</p>
              <ul className="mt-4 space-y-2">
                {overOns.verhaalVragen.map((v) => (
                  <li key={v} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-stam-400" />
                    {v}
                  </li>
                ))}
              </ul>
            </NogAanTeLeveren>
          </div>
          <FotoPlaats
            hoogte="h-full min-h-72"
            omschrijving="De boerderij van buiten, met de eik waar de naam vandaan komt."
          />
        </div>
      </Sectie>

      <Sectie toon="donker">
        <Kop toon="donker" bovenkop="Waar we van uitgaan">
          Onze uitgangspunten
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
        <Kop bovenkop="Het team">Wie je hier tegenkomt</Kop>
        <p className="mt-4 max-w-2xl text-stam-600">
          De namen en foto's van het team moeten nog worden aangeleverd.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {overOns.team.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <FotoPlaats hoogte="h-56" omschrijving={t} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-stam-600">
                Naam en rol — nog aan te leveren
              </p>
            </div>
          ))}
        </div>
      </Sectie>
    </>
  );
}
