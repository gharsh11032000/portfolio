/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Emphasis } from "@/components/emphasis";
import { DATA } from "@/data/resume";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function WorkSection() {
  return (
    <div className="flex flex-col gap-10">
      {DATA.work.map((work) => (
        <article key={work.company} className="flex flex-col gap-4">
          <header className="flex items-start gap-x-3 justify-between">
            <div className="flex items-center gap-x-3 flex-1 min-w-0">
              <img
                src={work.logoUrl}
                alt={`${work.company} logo`}
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
              />
              <div className="flex-1 min-w-0 flex flex-col gap-1">
                <h3 className="font-semibold leading-none">
                  <Link
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    {work.company}
                    <ArrowUpRight
                      className="size-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden
                    />
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{work.title}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
              <span>
                {work.start} – {work.end}
              </span>
              <span>{work.location}</span>
            </div>
          </header>
          <div className="flex flex-col gap-3 md:pl-13">
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              <Emphasis text={work.summary} />
            </p>
            <details className="group/details">
              <summary className="inline-flex cursor-pointer list-none items-center gap-1 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                <ChevronRight
                  className="size-3.5 transition-transform group-open/details:rotate-90"
                  aria-hidden
                />
                <span className="group-open/details:hidden">What I did</span>
                <span className="hidden group-open/details:inline">
                  Hide details
                </span>
              </summary>
              <div className="flex flex-col gap-4 pt-3">
                {work.groups.map((group, idx) => (
                  <div key={group.title || idx} className="flex flex-col gap-2">
                    {group.title && (
                      <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
                        {group.title}
                      </h4>
                    )}
                    <ul className="list-disc pl-4 marker:text-muted-foreground/50 flex flex-col gap-1.5 text-sm text-muted-foreground leading-relaxed text-pretty">
                      {group.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Emphasis text={bullet} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
            <div className="flex flex-wrap gap-1">
              {work.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-[11px] font-medium h-6 px-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
