import React from "react";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="bg-white px-6 pb-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-5 font-mono text-lg font-semibold leading-snug text-slate-900">
          “This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions
          are gold!”
        </p>
        <p className="mt-4 text-sm text-slate-400">
          Sarah Chen, Software Architect
        </p>
      </div>
    </section>
  );
}
