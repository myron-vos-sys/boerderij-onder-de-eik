import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Sectie({
  children,
  toon = "licht",
  className,
  id,
}: {
  children: ReactNode;
  toon?: "licht" | "creme" | "donker";
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24",
        toon === "creme" && "bg-creme-200",
        toon === "donker" && "bg-diep-800 text-creme-100",
        className,
      )}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Kop({
  children,
  bovenkop,
  toon = "licht",
  className,
}: {
  children: ReactNode;
  bovenkop?: string;
  toon?: "licht" | "donker";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {bovenkop ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            toon === "donker" ? "text-blad-200" : "text-blad-700",
          )}
        >
          {bovenkop}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl sm:text-4xl",
          toon === "donker" && "text-creme-100",
        )}
      >
        {children}
      </h2>
    </div>
  );
}

export function Kaart({
  titel,
  children,
  className,
  kop = "h3",
}: {
  titel?: string;
  children: ReactNode;
  className?: string;
  kop?: "h3" | "h4";
}) {
  const Kopniveau = kop;
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 sm:p-8",
        className,
      )}
    >
      {titel ? <Kopniveau className="text-xl">{titel}</Kopniveau> : null}
      <div className={cn(titel && "mt-3", "text-stam-700")}>{children}</div>
    </div>
  );
}
