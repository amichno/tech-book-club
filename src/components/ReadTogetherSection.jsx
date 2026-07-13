import React from "react";
import BenefitItem from "./ui/BenefitItem";
import { BENEFITS } from "../data/content";

export default function ReadTogetherSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
          alt="Grupa czytająca razem książki techniczne przy stole"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
        />

        <div>
          <h2 className="font-mono text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Read together,
            <br />
            grow together
          </h2>

          <ul className="mt-6 space-y-4">
            {BENEFITS.map((text) => (
              <BenefitItem key={text} text={text} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
