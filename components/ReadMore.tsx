"use client";

import { useId, useState } from "react";

export default function ReadMore({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  // Short texts (and placeholders) don't need a toggle.
  // This guard sits AFTER the hooks on purpose: hooks must always run in the same order.
  if (text.length <= 160) {
    return <p className={className}>{text}</p>;
  }

  return (
    <>
      <p id={id} className={`${className} ${open ? "" : "line-clamp-3"}`}>
        {text}
      </p>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="mt-2 font-semibold text-primary underline underline-offset-4 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {open ? "Show less" : "Read more"}
      </button>
    </>
  );
}