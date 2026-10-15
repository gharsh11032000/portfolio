"use client";

import { useSyncExternalStore } from "react";

type Platform = "ios" | "android" | "other";

function getPlatform(): Platform {
  const ua = navigator.userAgent;
  // iPadOS reports itself as a Mac, so also check for touch support.
  const isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  if (/iPhone|iPad|iPod/.test(ua) || isIPadOS) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

const subscribe = () => () => {};

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  iosHref?: string;
  androidHref?: string;
}

/**
 * Links to the App Store on iOS, Google Play on Android, and `href` everywhere
 * else. Server-rendered HTML always uses `href`, so crawlers see the website.
 */
export function DeviceLink({ href, iosHref, androidHref, ...props }: Props) {
  const platform = useSyncExternalStore(subscribe, getPlatform, () => "other");
  const resolved =
    (platform === "ios" && iosHref) ||
    (platform === "android" && androidHref) ||
    href;

  return <a href={resolved} target="_blank" rel="noopener noreferrer" {...props} />;
}
