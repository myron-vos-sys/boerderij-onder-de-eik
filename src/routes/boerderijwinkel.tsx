import { createFileRoute } from "@tanstack/react-router";
import { Kaart, Kop, Sectie } from "@/components/Bouwstenen";
import { OpenMelding } from "@/components/OpenMelding";
import { FotoPlaats } from "@/components/Plaatshouders";
import { winkel } from "@/content/paginas";
import { bedrijf, openingstijdenRegels, winkelAdres } from "@/content/bedrijf";

export const Route = createFileRoute("/boerderijwinkel")({
  head: () => ({
    meta: [
      { title: "Boerderijwinkel in Bocholtz — Boerderij Onder de Eik" },
      {
        name: "description",
        content:
          "Groente uit eigen moestuin, grasgevoerd rundvlees, eieren van eigen kippen en streekproducten uit Zuid-Limburg. Open donderdag, vrijdag en zaterdag.",
      },
      { property: "og:title", content: "Boerderijwinkel — Onder de Eik, Bocholtz" },
      {
        property: "og:description",
        content:
          "Verse groente, grasgevoerd rundvlees en streekproducten aan de Groeneweg 7 in Bocholtz.",
      },
      { property: "og:url", content: "/boerderijwinkel" },
    ],
    links: [{ rel: "canonical", href: "/boerderijwinkel" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GroceryStore",
          name: "Boerderij Onder de Eik — Boerderijwinkel",
          telephone: "+31640726756",
          email: bedrijf.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: winkelAdres.straat,
            postalCode: winkelAdres.postcode,
            addressLocality: winkelAdres.plaats,
            addressRegion: "Limburg",
            addressCountry: "NL",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Thursday", "Friday"],
              opens: "10:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "10:00",
              closes: "17:00",
            },
          ],
        }),
      },
    ],
  }),
  component: WinkelPagina,
});

function WinkelPagina() {
  return (
    <>
      <section className="bg-creme-200/70 py-14 sm:py-20">
        <div className="wrap">
          <OpenMelding className="mb-6 flex w-fit" />
          <h1 className="max-w-3xl text-4xl sm:text-5xl">{winkel.titel}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stam-600">
            {winkel.intro}
          </p>
        </div>
      </section>

      <Sectie>
        <FotoPlaats
          hoogte="h-72 sm:h-96"
          omschrijving="Overzichtsfoto van de winkel van binnen: de schappen met groente, de toonbank, het krijtbord met het aanbod."
        />
      </Sectie>

      <Sectie toon="creme" className="pt-0 sm:pt-0">
        <Kop bovenkop="Assortiment">Wat we verkopen</Kop>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {winkel.groepen.map((g) => (
            <Kaart key={g.titel} titel={g.titel}>
              <p>{g.tekst}</p>
            </Kaart>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-stam-600">
          Prijzen staan in de winkel bij het product. Het aanbod wisselt met het
          seizoen, dus we zetten ze hier bewust niet neer.
        </p>
      </Sectie>

      <Sectie toon="donker">
        <div className="grid gap-8 sm:grid-cols-3">
          {winkel.praktisch.map((p) => (
            <div key={p.titel}>
              <h2 className="text-xl text-creme-100">{p.titel}</h2>
              <p className="mt-2 leading-relaxed text-creme-200/85">{p.tekst}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-creme-200/85">
          Bellen kan op{" "}
          <a className="font-semibold text-creme-100 underline underline-offset-4" href={bedrijf.telefoonLink}>
            {bedrijf.telefoon}
          </a>
          .
        </p>
      </Sectie>

      <Sectie>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kop bovenkop="Langskomen">Openingstijden</Kop>
            <dl className="mt-6 space-y-1.5 text-stam-700">
              {openingstijdenRegels.map((r) => (
                <div key={r.dagen} className="flex justify-between gap-4 border-b border-border pb-1.5">
                  <dt>{r.dagen}</dt>
                  <dd className={r.open ? "font-medium text-diep-800" : "text-stam-500"}>
                    {r.tijd}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="text-xl">Adres</h2>
            <address className="mt-3 not-italic text-stam-700">
              {winkelAdres.straat}
              <br />
              {winkelAdres.postcode} {winkelAdres.plaats}
            </address>
            <a
              href={winkelAdres.routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-diep-700 px-5 py-2.5 text-sm font-semibold text-creme-100 hover:bg-diep-800"
            >
              Route naar de winkel (opent in nieuw tabblad)
            </a>
          </div>
        </div>
      </Sectie>
    </>
  );
}
