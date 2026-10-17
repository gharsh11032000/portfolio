"use client";

import { bookUrl, cn, type Book } from "@/lib/utils";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

type Shelf = { label: string; books: readonly Book[] };

// Books shown before "Show all"; the rest fade in when expanded.
const INITIAL_COUNT = 6;

function BookRow({
  book,
  reveal,
  delay,
  showAuthor,
}: {
  book: Book;
  reveal: boolean;
  delay: number;
  showAuthor: boolean;
}) {
  return (
    <li
      className={cn(
        reveal && "animate-in fade-in slide-in-from-bottom-2 duration-500"
      )}
      style={
        reveal
          ? { animationDelay: `${delay}ms`, animationFillMode: "both" }
          : undefined
      }
    >
      <a
        href={bookUrl(book)}
        target="_blank"
        rel="noopener noreferrer"
        className="group -mx-3 flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="flex min-w-0 flex-col gap-0.5">
          <span className="text-sm font-medium leading-snug">{book.title}</span>
          {showAuthor && (
            <span className="text-xs text-muted-foreground">{book.author}</span>
          )}
        </span>
        <ArrowUpRight
          className="size-3.5 flex-none text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden
        />
        <span className="sr-only">on Goodreads (opens in a new tab)</span>
      </a>
    </li>
  );
}

export function BookShelf({ shelves }: { shelves: readonly Shelf[] }) {
  const [expanded, setExpanded] = useState(false);
  const total = shelves.reduce((count, shelf) => count + shelf.books.length, 0);
  const canExpand = total > INITIAL_COUNT;

  // Walk the shelves in order, cutting off after INITIAL_COUNT books while collapsed.
  const visible: {
    label: string;
    books: { book: Book; index: number }[];
    singleAuthor: boolean;
  }[] = [];
  let index = 0;
  for (const shelf of shelves) {
    const books: { book: Book; index: number }[] = [];
    for (const book of shelf.books) {
      if (!expanded && index >= INITIAL_COUNT) break;
      books.push({ book, index: index++ });
    }
    // A single-author shelf names the author in its label already.
    const singleAuthor = shelf.books.every(
      (book) => book.author === shelf.books[0].author
    );
    if (books.length > 0) visible.push({ label: shelf.label, books, singleAuthor });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex flex-col gap-6">
        {visible.map((shelf) => (
          <div key={shelf.label} className="flex flex-col gap-2">
            <p className="text-xs font-medium text-muted-foreground">
              {shelf.label}
            </p>
            <ul className="grid gap-x-6 sm:grid-cols-2">
              {shelf.books.map(({ book, index }) => (
                <BookRow
                  key={book.title}
                  book={book}
                  reveal={expanded && index >= INITIAL_COUNT}
                  showAuthor={!shelf.singleAuthor}
                  delay={Math.min(index - INITIAL_COUNT, 12) * 40}
                />
              ))}
            </ul>
          </div>
        ))}
        {canExpand && !expanded && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent"
          />
        )}
      </div>
      {canExpand && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((open) => !open)}
          className="mx-auto flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {expanded ? "Show fewer" : `Show all ${total} books`}
          <ChevronDown
            className={cn("size-3.5 transition-transform", expanded && "rotate-180")}
            aria-hidden
          />
        </button>
      )}
    </div>
  );
}
