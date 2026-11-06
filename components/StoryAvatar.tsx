
import type { StoryAvatarKind } from "@/app/lib/stories";

// Flat, faceless illustrations. They stand in for photos, so no real child is shown.
const colours: Record<
  StoryAvatarKind,
  { skin: string; hair: string; top: string; accent: string }
> = {
  girl: { skin: "#f1c6a2", hair: "#3a2a26", top: "#ec7aa0", accent: "#f6c445" },
  boy: { skin: "#e8b88f", hair: "#2f2a2e", top: "#4aa3df", accent: "#f6c445" },
  woman: { skin: "#f3cfae", hair: "#3b2f35", top: "#ff9f5a", accent: "#ffffff" },
  man: { skin: "#e3b48c", hair: "#2b2b30", top: "#5a7fd6", accent: "#ffffff" },
};

export default function StoryAvatar({
  kind,
  className = "",
}: {
  kind: StoryAvatarKind;
  className?: string;
}) {
  const c = colours[kind];

  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* Hair behind the head */}
      {kind === "woman" && (
        <path
          d="M34 58C31 36 43 23 60 23s29 13 26 35l4 34c-10-2-17-9-19-20H49c-2 11-9 18-19 20z"
          fill={c.hair}
        />
      )}
      {kind === "girl" && (
        <>
          <circle cx="29" cy="64" r="11" fill={c.hair} />
          <circle cx="91" cy="64" r="11" fill={c.hair} />
        </>
      )}

      {/* Shoulders, neck and head */}
      <path d="M20 120c0-25 17-35 40-35s40 10 40 35z" fill={c.top} />
      <rect x="52" y="68" width="16" height="22" rx="7" fill={c.skin} />
      <circle cx="60" cy="54" r="23" fill={c.skin} />

      {/* Hair in front */}
      {kind === "woman" && (
        <path
          d="M37 53c3-15 14-22 23-22s20 7 23 22c-9-7-14-13-23-13s-14 6-23 13z"
          fill={c.hair}
        />
      )}
      {kind === "girl" && (
        <>
          <path
            d="M37 54c0-17 10-27 23-27s23 10 23 27c-8-10-14-14-23-14s-15 4-23 14z"
            fill={c.hair}
          />
          <circle cx="33" cy="52" r="5" fill={c.accent} />
          <circle cx="87" cy="52" r="5" fill={c.accent} />
        </>
      )}
      {kind === "boy" && (
        <path
          d="M37 52c-1-18 10-29 23-29s24 11 23 29c-5-9-9-13-23-13s-18 4-23 13z"
          fill={c.hair}
        />
      )}
      {kind === "man" && (
        <path
          d="M37 54c-2-19 9-31 23-31s25 12 23 31c-4-10-8-15-23-15s-19 5-23 15z"
          fill={c.hair}
        />
      )}

      {/* A small collar on the adult shirts */}
      {(kind === "woman" || kind === "man") && (
        <path d="M50 87l10 12 10-12" fill="none" stroke={c.accent} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      )}
    </svg>
  );
}