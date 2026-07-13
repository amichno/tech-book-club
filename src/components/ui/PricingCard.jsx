import React from "react";
import { Check } from "lucide-react";

export default function PricingCard({ plan }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border px-6 py-8 ${
        plan.highlighted
          ? "border-slate-900 bg-slate-50 shadow-lg"
          : "border-slate-200 bg-white"
      }`}
    >
      <h3 className="font-mono text-sm font-semibold text-slate-900">
        {plan.name}
      </h3>
      <p className="mt-3 flex items-baseline gap-1">
        <span className="font-mono text-3xl font-bold text-slate-900">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-xs text-slate-400">{plan.period}</span>
        )}
      </p>

      <ul className="mt-5 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <Check className="h-3.5 w-3.5 flex-none text-slate-500" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 rounded-md px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wide transition-colors ${
          plan.highlighted
            ? "bg-slate-900 text-white hover:bg-slate-800"
            : "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
}
