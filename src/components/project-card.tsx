/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { DeviceLink } from "@/components/device-link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  role?: string;
  /** App Store / Google Play links; the title opens the one matching the device. */
  appStore?: string;
  playStore?: string;
  tags: readonly string[];
  image?: string;
  imageAlt?: string;
  /** CSS background behind the framed screenshot, e.g. a brand gradient. */
  imageBg?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

function isExternal(href: string) {
  return href.startsWith("http");
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  role,
  appStore,
  playStore,
  tags,
  image,
  imageAlt,
  imageBg,
  links,
  className,
}: Props) {
  return (
    <article
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden bg-card hover:ring-2 hover:ring-muted transition-all duration-200",
        className
      )}
    >
      {image && (
        <div
          className="group/shot relative h-44 overflow-hidden border-b bg-muted px-6 pt-6"
          style={imageBg ? { background: imageBg } : undefined}
        >
          {/* A browser window that peeks out from the bottom edge. */}
          <div className="overflow-hidden rounded-t-lg border border-b-0 border-black/10 bg-background shadow-xl transition-transform duration-300 group-hover/shot:-translate-y-1 motion-reduce:transition-none">
            <div className="flex h-6 items-center gap-1 border-b bg-muted/60 px-2.5" aria-hidden>
              <span className="size-1.5 rounded-full bg-red-400" />
              <span className="size-1.5 rounded-full bg-amber-400" />
              <span className="size-1.5 rounded-full bg-green-400" />
              {href && (
                <span className="mx-auto truncate rounded bg-background px-2 text-[10px] leading-4 text-muted-foreground">
                  {href.replace(/^https?:\/\/(www\.)?/, "")}
                </span>
              )}
            </div>
            <img
              src={image}
              alt={imageAlt ?? `${title} screenshot`}
              width={960}
              height={500}
              className="block w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      )}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold leading-tight">
              {href && (appStore || playStore) ? (
                <DeviceLink
                  href={href}
                  iosHref={appStore}
                  androidHref={playStore}
                  className="hover:underline underline-offset-4"
                >
                  {title}
                </DeviceLink>
              ) : href ? (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </h3>
            <p className="text-xs text-muted-foreground">
              {role ? `${role} · ` : ""}
              <time>{dates}</time>
            </p>
          </div>
          {href && (
            <ArrowUpRight
              className="size-4 text-muted-foreground flex-none"
              aria-hidden
            />
          )}
        </div>
        <p className="text-sm flex-1 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                {...(isExternal(link.href) && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <Badge className="flex items-center gap-1.5 text-xs">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
