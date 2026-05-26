import { useEffect, useState } from "react";

/**
 * Track window scroll position past a threshold.
 * Returns a stable boolean — no stale closure (handler uses fresh setter).
 *
 * @param {number} threshold
 * @returns {boolean}
 */
export function useScrollPast(threshold = 0) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return past;
}

/**
 * Lock body scroll while a flag is true (modal/overlay open).
 *
 * @param {boolean} locked
 */
export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

/**
 * Invoke callback when user presses Escape.
 *
 * @param {(e: KeyboardEvent) => void} handler
 * @param {boolean} enabled
 */
export function useEscapeKey(handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") handler(e);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handler, enabled]);
}
