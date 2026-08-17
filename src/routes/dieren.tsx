import { createFileRoute } from "@tanstack/react-router";
import { Kop, Sectie } from "@/components/Bouwstenen";
import { FotoPlaats } from "@/components/Plaatshouders";
import { dieren } from "@/content/paginas";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dieren")({
  head: () => ({
    meta: [
      { title: "De dieren op de boerderij — Onder de Eik, Bocholtz" },
      {
        name: "description",
        content:
          "Koeien, ezels, kippen, eenden, ganzen, een varken en een hond. De dieren van Boerderij Onder de Eik in Bocholtz, en het grasgevoerde rundvlees uit de winkel.",
      },
      { property: "og:title", content: "De dieren — Boerderij Onder de Eik" },
      {
        property: "og:description",
        content:
          "Kom je voor de winkel, loop dan even door naar de wei. De ezels komen meestal zelf naar het hek.",
      },
      { property: "og:url", content: "/dieren" },
    ],
    links: [{ rel: "canonical", href: "/dieren" }],
  }),
  component: DierenPagina,
});

function DierenPagina() {
  return (
    <>
      <section className="bg-creme-200/70 py-14 sm:py-20">
        <div className="wrap">
          <h1 className="max-w-3xl text-4xl sm:text-5xl">{dieren.titel}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stam-600">
            {dieren.intro}
          </p>
          <p className="mt-4 max-w-2xl text-stam-600">{dieren.bezoek}</p>
        </div>
      </section>

      <Sectie>
        <div className="grid gap-6 md:grid-cols-2">
          {dieren.kaarten.map((d) => (
            <article
              key={d.naam}
              className={cn(
                "overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8",
                d.breed && "md:col-span-2",
              )}
            >
              <FotoPlaats
                hoogte={d.breed ? "h-64 sm:h-80" : "h-52"}
                omschrijving={d.foto}
              />
              <h2 className="mt-6 text-2xl">{d.naam}</h2>
              <p className="mt-3 max-w-2xl text-stam-700">{d.tekst}</p>
            </article>
          ))}
        </div>
      </Sectie>

      <Sectie toon="donker">
        <Kop toon="donker" bovenkop="Uit de winkel">
          {dieren.rundvlees.kop}
        </Kop>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-creme-200/90">
          {dieren.rundvlees.tekst}
        </p>
      </Sectie>
    </>
  );
}
