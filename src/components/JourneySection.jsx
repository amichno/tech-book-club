import React from "react";
import { JOURNEY_STEPS } from "../data/content";
import GridBackground from "./ui/GridBackground";

function ArrowConnector() {
  return (
    <svg
      viewBox="0 0 60 30"
      className="absolute -right-10 top-3 hidden h-6 w-10 text-[#e0704a] sm:block"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 26C20 26 34 20 50 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M38 4L52 5.5L47 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function JourneySection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#fdf3ee] to-sky-100 px-8 py-14 text-center shadow-sm">
        {/* Siatka w tle (graph paper) */}
        <GridBackground />

        <div className="relative">
          <h2 className="font-mono text-2xl font-bold text-slate-900 sm:text-3xl">
            Your tech reading journey
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 text-left sm:grid-cols-4 sm:gap-x-10 sm:gap-y-0">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={step.number} className="relative">
                {i < JOURNEY_STEPS.length - 1 && <ArrowConnector />}
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-900 bg-white font-mono text-xs font-semibold text-slate-900">
                  {step.number}
                </span>
                <p className="mt-3 max-w-[10rem] font-mono text-[13px] leading-snug text-slate-700">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

