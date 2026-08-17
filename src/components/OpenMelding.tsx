import { useEffect, useState } from "react";
import { berekenStatus } from "@/lib/openingstijden";
import { cn } from "@/lib/utils";

/**
 * Melding of de winkel nu open is. Rekent zichzelf uit op de klok van de
 * bezoeker. Rendert pas na hydratatie, zodat server en client niet botsen.
 */
export function OpenMelding({ className }: { className?: string }) {
  const [status, setStatus] = useState<ReturnType<typeof berekenStatus> | null>(
    null,
  );

  useEffect(() => {
    const update = () => setStatus(berekenStatus(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) {
    return <div className={cn("h-9", className)} aria-hidden="true" />;
  }

  return (
    <p
      aria-live="polite"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-sm font-medium",
        status.open
          ? "border-blad-300 bg-blad-50 text-diep-800"
          : "border-stam-200 bg-creme-200 text-stam-700",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-2.5 w-2.5 shrink-0 rounded-full",
          status.open ? "bg-blad-600" : "bg-stam-400",
        )}
      />
      {status.tekst}
    </p>
  );
}
