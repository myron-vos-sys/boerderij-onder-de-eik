import { Link } from "@tanstack/react-router";
import {
  bedrijf,
  navigatie,
  openingstijdenRegels,
  winkelAdres,
  zorgAdres,
} from "@/content/bedrijf";

export function SiteFooter() {
  return (
    <footer className="bg-diep-900 py-16 text-creme-100">
      <div className="wrap grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-xl text-creme-100">
            Boerderij Onder de Eik
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-creme-200/80">
            Boerderijwinkel en zorgboerderij in Bocholtz, Zuid-Limburg.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-blad-200">
            Adressen
          </h3>
          <address className="mt-3 space-y-4 text-sm not-italic leading-relaxed text-creme-200/90">
            <span className="block">
              <strong className="font-semibold text-creme-100">
                {winkelAdres.label}
              </strong>
              <br />
              {winkelAdres.straat}
              <br />
              {winkelAdres.postcode} {winkelAdres.plaats}
            </span>
            <span className="block">
              <strong className="font-semibold text-creme-100">
                {zorgAdres.label}
              </strong>
              <br />
              {zorgAdres.straat}
              <br />
              {zorgAdres.postcode} {zorgAdres.plaats}
            </span>
          </address>
          <p className="mt-4 text-sm text-creme-200/90">
            <a className="underline underline-offset-4" href={bedrijf.telefoonLink}>
              {bedrijf.telefoon}
            </a>
            <br />
            <a className="underline underline-offset-4" href={bedrijf.emailLink}>
              {bedrijf.email}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-blad-200">
            Openingstijden winkel
          </h3>
          <dl className="mt-3 space-y-1.5 text-sm text-creme-200/90">
            {openingstijdenRegels.map((r) => (
              <div key={r.dagen} className="flex justify-between gap-4">
                <dt>{r.dagen}</dt>
                <dd className={r.open ? "text-creme-100" : "text-creme-200/60"}>
                  {r.tijd}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-blad-200">
            Pagina's
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navigatie.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-creme-200/90 underline-offset-4 hover:underline"
                >
                  {item.naam}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap mt-12 border-t border-creme-100/15 pt-6 text-xs text-creme-200/60">
        © {new Date().getFullYear()} Boerderij Onder de Eik, Bocholtz.
      </div>
    </footer>
  );
}
