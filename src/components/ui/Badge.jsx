import React from "react";
import { GitBranch } from "lucide-react";

export default function Badge() {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="flex h-9 w-8 items-center justify-center rounded-md bg-slate-900">
        <GitBranch className="h-4 w-4 text-[#e0704a]" />
      </span>
      <span className="font-mono text-base font-bold text-slate-900">
        Tech book club
      </span>
    </div>
  );
}
