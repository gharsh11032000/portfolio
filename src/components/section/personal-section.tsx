import { DATA } from "@/data/resume";
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
  const { spotifyPlaylistUrl, photos } = DATA.personal;
  return Boolean(toSpotifyEmbed(spotifyPlaylistUrl)) || photos.length > 0;
}

export default function PersonalSection() {
  const { spotifyPlaylistUrl, photos } = DATA.personal;
  const embedUrl = toSpotifyEmbed(spotifyPlaylistUrl);

  return (
    <div className="flex flex-col gap-4">
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
    </div>
  );
}
