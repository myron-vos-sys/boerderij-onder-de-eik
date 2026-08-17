import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { bedrijf, navigatie } from "@/content/bedrijf";
import { OpenMelding } from "./OpenMelding";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="wrap flex h-20 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid h-11 w-11 place-items-center rounded-full bg-diep-700 font-display text-lg text-creme-100"
          >
            E
          </span>
          <span className="font-display text-lg leading-tight text-diep-900 sm:text-xl">
            Boerderij
            <br className="hidden sm:block" /> Onder de Eik
          </span>
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigatie.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{
                    className: "bg-blad-100 text-diep-900",
                  }}
                  className="rounded-lg px-3 py-2 text-[0.95rem] font-medium text-stam-700 transition-colors hover:bg-creme-200"
                >
                  {item.naam}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={bedrijf.telefoonLink}
            className="hidden items-center gap-2 rounded-full bg-diep-700 px-5 py-2.5 text-sm font-semibold text-creme-100 transition-colors hover:bg-diep-800 sm:inline-flex"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {bedrijf.telefoon}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobiel-menu"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-stam-700 lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
            {open ? "Sluiten" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobiel-menu" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobiel menu" className="wrap py-4">
            <ul className="flex flex-col gap-1">
              {navigatie.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-blad-100 text-diep-900" }}
                    className="block rounded-lg px-3 py-3 font-medium text-stam-700"
                  >
                    {item.naam}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={bedrijf.telefoonLink}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-diep-700 px-5 py-3 text-sm font-semibold text-creme-100 sm:hidden"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              {bedrijf.telefoon}
            </a>
            <OpenMelding className="mt-4 flex" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
