import React from "react";
import { JOURNEY_STEPS } from "../data/content";

export default function JourneySection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[#f1d9cd] bg-[#fdf3ee] px-8 py-14 text-center">
        <h2 className="font-mono text-2xl font-bold text-slate-900 sm:text-3xl">
          Your tech reading journey
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {JOURNEY_STEPS.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center px-4"
            >
              {i < JOURNEY_STEPS.length - 1 && (
                <span
                  className="absolute left-1/2 top-4 hidden h-px w-full border-t border-dashed border-[#e0704a]/50 sm:block"
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#e0704a] bg-white font-mono text-xs font-semibold text-[#e0704a]">
                {step.number}
              </span>
              <p className="mt-3 max-w-[10rem] font-mono text-[11px] leading-snug text-slate-600">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
