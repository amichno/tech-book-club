import React from "react";

/**
 * Dekoracyjna siatka kropek, użyta jako element graficzny w sekcji Hero.
 */
export default function DotGrid({ className = "" }) {
  const dots = Array.from({ length: 12 });

  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`} aria-hidden="true">
      {dots.map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-sky-300/70" />
      ))}
    </div>
  );
}
