/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  role?: string;
  tags: readonly string[];
  image?: string;
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
  tags,
  image,
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
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full h-44 object-cover border-b"
          loading="lazy"
        />
      )}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold leading-tight">
              {href ? (
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
