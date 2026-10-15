import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function JourneySection() {
  const stops = DATA.journey;

  return (
    <ol className="grid gap-6 sm:grid-cols-4 sm:gap-4">
      {stops.map((stop, idx) => {
        const isCurrent = "current" in stop && stop.current;
        return (
          <li key={stop.city} className="relative pl-6 sm:pl-0 sm:pt-6">
            {idx < stops.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[5px] top-[17px] h-[calc(100%+1.5rem-11px)] w-px bg-border sm:left-[11px] sm:top-[5px] sm:h-px sm:w-[calc(100%+1rem-11px)]"
              />
            )}
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-1.5 size-[11px] rounded-full border-2 border-muted-foreground/40 bg-background sm:top-0",
                isCurrent && "border-emerald-500 bg-emerald-500"
              )}
            />
            <p className="font-medium leading-tight">{stop.city}</p>
            <p className="text-xs text-muted-foreground">{stop.region}</p>
            <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
              {stop.label}
            </p>
            {"years" in stop && (
              <p className="text-xs tabular-nums text-muted-foreground">
                {stop.years}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
