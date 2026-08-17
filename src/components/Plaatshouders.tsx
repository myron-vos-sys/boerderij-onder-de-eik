import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Zichtbaar vlak met gestippelde rand op de plek waar nog een foto moet komen.
 * De omschrijving vertelt precies welke foto er hoort.
 */
export function FotoPlaats({
  omschrijving,
  className,
  hoogte = "h-64",
}: {
  omschrijving: string;
  className?: string;
  hoogte?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Nog aan te leveren foto: ${omschrijving}`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-diep-300 bg-creme-200/60 p-6 text-center",
        hoogte,
        className,
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-diep-700">
        Foto — nog aan te leveren
      </span>
      <span className="max-w-sm text-sm leading-relaxed text-stam-600">
        {omschrijving}
      </span>
    </div>
  );
}

/** Duidelijk gemarkeerd blok voor informatie die er nog niet is. */
export function NogAanTeLeveren({
  titel,
  children,
  className,
}: {
  titel: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-dashed border-stam-400 bg-creme-200/70 p-6 sm:p-8",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stam-600">
        Nog aan te leveren
      </p>
      <h3 className="mt-2 text-xl">{titel}</h3>
      <div className="mt-3 text-[0.975rem] leading-relaxed text-stam-700">
        {children}
      </div>
    </div>
  );
}
