/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";
import { ChevronRight } from "lucide-react";

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={40}
      height={40}
      loading="lazy"
      decoding="async"
      className="size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
    />
  );
}

function SiteLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-fit text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
    >
      {href.replace(/^https?:\/\/(www\.)?/, "")}{" "}
      <span aria-hidden>↗</span>
    </a>
  );
}

function RowText({
  title,
  subtitle,
  dates,
  expandable,
  href,
}: {
  title: string;
  subtitle: string;
  dates: string;
  expandable?: boolean;
  href?: string;
}) {
  return (
    <div className="flex flex-1 min-w-0 items-center justify-between gap-x-3">
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="inline-flex items-center gap-1 font-semibold leading-none">
          {title}
          {expandable && (
            <ChevronRight
              className="size-3.5 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover/row:opacity-100 group-hover/row:translate-x-0 group-open/row:rotate-90 group-open/row:opacity-100 group-open/row:translate-x-0"
              aria-hidden
            />
          )}
        </h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        {href && <SiteLink href={href} />}
      </div>
      <span className="flex-none text-xs tabular-nums text-muted-foreground text-right">
        {dates}
      </span>
    </div>
  );
}

export default function WorkSection() {
  return (
    <ul className="flex flex-col gap-6">
      {DATA.work.map((work) => (
        <li key={work.company}>
          <details className="group/row">
            <summary className="flex cursor-pointer list-none items-center gap-x-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
              <Logo src={work.logoUrl} alt={`${work.company} logo`} />
              <RowText
                title={work.company}
                subtitle={work.title}
                dates={`${work.start} – ${work.end}`}
                expandable
              />
            </summary>
            <div className="flex flex-col gap-2 pt-3 pl-13 text-sm leading-relaxed text-muted-foreground text-pretty">
              <p>{work.description}</p>
              <SiteLink href={work.href} />
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}

export function EducationSection() {
  return (
    <ul className="flex flex-col gap-6">
      {DATA.education.map((edu) => (
        <li key={edu.school} className="flex items-center gap-x-3">
          <Logo src={edu.logoUrl} alt={`${edu.school} logo`} />
          <RowText
            title={edu.school}
            subtitle={edu.degree}
            dates={`${edu.start} – ${edu.end}`}
            href={edu.href}
          />
        </li>
      ))}
    </ul>
  );
}
