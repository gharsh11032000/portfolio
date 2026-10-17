import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
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
    books.reading.length > 0 ||
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
        "flex flex-col gap-3 rounded-xl border bg-background p-4",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <h3 className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <Icon className="size-3.5" aria-hidden />
          {label}
        </h3>
        {summary && <p className="text-sm text-pretty">{summary}</p>}
      </div>
      {children}
    </div>
  );
}

function ShelfItem({
  title,
  meta,
  note,
}: {
  title: string;
  meta?: string;
  note?: string;
}) {
  return (
    <li className="flex flex-col">
      <span className="text-sm font-medium leading-snug">{title}</span>
      {meta && <span className="text-xs text-muted-foreground">{meta}</span>}
      {note && (
        <span className="text-sm leading-relaxed text-muted-foreground text-pretty">
          {note}
        </span>
      )}
    </li>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
      {children}
    </p>
  );
}

export default function PersonalSection() {
  const { intro, books, watching, music, interests, photos } = DATA.personal;
  const embedUrl = toSpotifyEmbed(music.spotifyPlaylistUrl);

  return (
    <div className="flex flex-col gap-4">
      {intro && (
        <p className="leading-relaxed text-muted-foreground text-pretty">
          {intro}
        </p>
      )}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {(books.reading.length > 0 || books.shelves.length > 0) && (
          <ShelfCard
            icon={BookOpen}
            label="Reading"
            summary={books.summary}
            className="sm:col-span-2"
          >
            <div className="flex gap-4">
              {books.reading.length > 0 && (
                <div className="flex flex-1 flex-col gap-2">
                  <GroupLabel>
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-emerald-500"
                    />
                    Reading now
                  </GroupLabel>
                  <ul className="flex flex-col gap-2">
                    {books.reading.map((book) => (
                      <ShelfItem
                        key={book.title}
                        title={book.title}
                        meta={book.author}
                      />
                    ))}
                  </ul>
                </div>
              )}
              {books.photo && (
                <div className="relative aspect-3/4 w-24 flex-none overflow-hidden rounded-lg border bg-muted sm:w-32">
                  <Image
                    src={books.photo.src}
                    alt={books.photo.alt}
                    fill
                    sizes="(min-width: 640px) 128px, 96px"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
            {books.shelves.length > 0 && (
              <div className="grid gap-4 border-t pt-3 sm:grid-cols-3">
                {books.shelves.map((shelf) => (
                  <div key={shelf.label} className="flex flex-col gap-2">
                    <GroupLabel>{shelf.label}</GroupLabel>
                    <ul className="flex flex-col gap-2">
                      {shelf.books.map((book) => (
                        <ShelfItem
                          key={book.title}
                          title={book.title}
                          meta={book.author}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
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
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {watching.titles.map((item) => (
                <ShelfItem key={item.title} title={item.title} meta={item.kind} />
              ))}
            </ul>
          </ShelfCard>
        )}
        {(music.artists.length > 0 || embedUrl) && (
          <ShelfCard icon={Headphones} label="On repeat" summary={music.summary}>
            <ul className="flex flex-wrap gap-1.5">
              {music.artists.map((artist) => (
                <li
                  key={artist}
                  className="rounded-lg border px-2.5 py-0.5 text-sm"
                >
                  {artist}
                </li>
              ))}
            </ul>
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
            <ul className="grid gap-3 sm:grid-cols-3">
              {interests.map((interest) => (
                <ShelfItem
                  key={interest.label}
                  title={interest.label}
                  note={interest.note}
                />
              ))}
            </ul>
          </ShelfCard>
        )}
      </div>
      {photos.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="flex flex-col gap-1.5">
              <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 220px, 45vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {photo.caption && (
                <figcaption className="text-xs text-muted-foreground">
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
