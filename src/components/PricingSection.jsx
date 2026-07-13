import React from "react";
import PricingCard from "./ui/PricingCard";
import { PLANS } from "../data/content";

export default function PricingSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-mono text-2xl font-bold text-slate-900 sm:text-3xl">
          Membership options
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
