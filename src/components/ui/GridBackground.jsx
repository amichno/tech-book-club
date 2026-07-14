import React from "react";

/**
 * Wspólne tło w stylu "graph paper" (siatka), używane w sekcjach
 * Hero i JourneySection. Renderuje się jako absolutna nakładka
 * wypełniająca najbliższego rodzica z position: relative.
 *
 * Rodzic musi mieć klasy: relative (oraz overflow-hidden, jeśli ma
 * zaokrąglone rogi, żeby siatka się do nich przycięła).
 */
export default function GridBackground({ size = 28, opacity = 0.06 }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage:
          `linear-gradient(to right, rgba(15,23,42,${opacity}) 1px, transparent 1px), ` +
          `linear-gradient(to bottom, rgba(15,23,42,${opacity}) 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
      aria-hidden="true"
    />
  );
}
