import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date) {
  // Use UTC to ensure consistent formatting between server and client
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export type Book = { title: string; author: string; href?: string };

/** A book's own link, or a Goodreads search for it. */
export function bookUrl(book: Book) {
  return (
    book.href ??
    `https://www.goodreads.com/search?q=${encodeURIComponent(`${book.title} ${book.author}`)}`
  );
}
