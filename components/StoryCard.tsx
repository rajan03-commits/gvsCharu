
"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import StoryAvatar from "@/components/StoryAvatar";
import type { StoryAvatarKind } from "@/app/lib/stories";

// A story card. As you scroll, the card in the middle of the screen gets a
// blue frame and a hatched shadow. Hovering a card does the same.
export default function StoryCard({
  avatar,
  children,
}: {
  avatar: StoryAvatarKind;
  children: ReactNode;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Only the thin band across the middle of the screen counts
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hatch =
    "pointer-events-none absolute text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100 motion-reduce:transition-none bg-[repeating-linear-gradient(135deg,currentColor_0,currentColor_1px,transparent_1px,transparent_5px)]";

  return (
    <li
      ref={ref}
      data-active={active}
      className="group relative border-[6px] border-transparent bg-background px-6 pb-10 pt-20 text-center shadow-lg transition-colors duration-500 hover:border-primary data-[active=true]:border-primary motion-reduce:transition-none md:px-12"
    >
      {/* The hatched shadow: right edge and bottom edge */}
      <span aria-hidden="true" className={`${hatch} -right-5 top-4 h-full w-4`} />
      <span aria-hidden="true" className={`${hatch} -bottom-5 left-4 h-4 w-full`} />

      {/* The avatar overlaps the top edge of the card */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-surface"
      >
        <StoryAvatar kind={avatar} className="h-full w-full" />
      </span>

      {children}
    </li>
  );
}