import { BookShelf } from "@/components/book-shelf";
import { DATA } from "@/data/resume";
import { bookUrl, cn } from "@/lib/utils";
import {
  BookOpen,
  Clapperboard,
  Headphones,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

/** Turns a Spotify share link into its embed URL, or returns null if it isn't one. */
function toSpotifyEmbed(url: string) {
  const match = url.match(
    /open\.spotify\.com\/(playlist|album|track|artist)\/([A-Za-z0-9]+)/
  );
  return match
    ? `https://open.spotify.com/embed/${match[1]}/${match[2]}?theme=0`
    : null;
}

export function hasPersonalContent() {
  const { intro, books, watching, music, interests, photos } = DATA.personal;
  return (
    Boolean(intro) ||
    Boolean(books.reading) ||
    books.shelves.length > 0 ||
    watching.titles.length > 0 ||
    music.artists.length > 0 ||
    Boolean(toSpotifyEmbed(music.spotifyPlaylistUrl)) ||
    interests.length > 0 ||
    photos.length > 0
  );
}

function ShelfCard({
  icon: Icon,
  label,
  summary,
  className,
  children,
}: {
  icon: LucideIcon;
  label: string;
  summary?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 rounded-xl border bg-background p-5 sm:p-6",
        className
      )}
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <Icon className="size-3.5" aria-hidden />
          {label}
        </h3>
        {summary && <p className="text-pretty">{summary}</p>}
      </div>
      {children}
    </div>
  );
}

function Chips({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item} className="rounded-lg border px-3 py-1 text-sm">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PersonalSection() {
  const { intro, books, watching, music, interests, photos } = DATA.personal;
  const embedUrl = toSpotifyEmbed(music.spotifyPlaylistUrl);

  return (
    <div className="flex flex-col gap-6">
      {intro && (
        <p className="leading-relaxed text-muted-foreground text-pretty">
          {intro}
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {(books.reading || books.shelves.length > 0) && (
          <ShelfCard
            icon={BookOpen}
            label="Reading"
            className="sm:col-span-2"
          >
            {books.reading && (
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-emerald-500"
                  />
                  Reading now
                </p>
                <a
                  href={bookUrl(books.reading)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-lg font-semibold tracking-tight underline-offset-4 hover:underline"
                >
                  {books.reading.title}
                  <span className="sr-only"> on Goodreads (opens in a new tab)</span>
                </a>
                <p className="text-sm text-muted-foreground">
                  {books.reading.author}
                </p>
              </div>
            )}
            {books.shelves.length > 0 && (
              <div className="border-t pt-5">
                <BookShelf shelves={books.shelves} />
              </div>
            )}
          </ShelfCard>
        )}
        {watching.titles.length > 0 && (
          <ShelfCard
            icon={Clapperboard}
            label="Watching"
            summary={watching.summary}
          >
            <Chips items={watching.titles} />
          </ShelfCard>
        )}
        {(music.artists.length > 0 || embedUrl) && (
          <ShelfCard icon={Headphones} label="On repeat" summary={music.summary}>
            <Chips items={music.artists} />
            {embedUrl && (
              <iframe
                src={embedUrl}
                title="What I'm listening to on Spotify"
                height={152}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="w-full rounded-xl border-0"
              />
            )}
          </ShelfCard>
        )}
        {interests.length > 0 && (
          <ShelfCard icon={Sparkles} label="Also into" className="sm:col-span-2">
            <Chips items={interests} />
          </ShelfCard>
        )}
      </div>
      {photos.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((photo) => (
            // Framed like the project cards: a card border around an inset photo.
            <figure
              key={photo.src}
              className="group flex flex-col gap-2 rounded-xl border bg-card p-2 transition-all duration-200 hover:ring-2 hover:ring-muted"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 210px, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
              {photo.caption && (
                <figcaption className="px-1 pb-0.5 text-xs text-muted-foreground">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
