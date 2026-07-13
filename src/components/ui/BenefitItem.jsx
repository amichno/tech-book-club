import React from "react";
import { Check } from "lucide-react";

export default function BenefitItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border border-slate-300 bg-white">
        <Check className="h-3.5 w-3.5 text-slate-700" />
      </span>
      <span className="text-[15px] leading-relaxed text-slate-600">
        {text}
      </span>
    </li>
  );
}
