import React from "react";
import { Play } from "lucide-react";

export default function Badge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1.5 text-xs font-mono tracking-tight text-slate-700 shadow-sm">
      <Play className="h-3 w-3 fill-slate-700 text-slate-700" />
      Tech book club
    </div>
  );
}
