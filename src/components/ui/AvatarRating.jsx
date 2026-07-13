import React from "react";
import { Star } from "lucide-react";
import { AVATARS } from "../../data/content";

export default function AvatarRating() {
  return (
    <div className="mt-5 flex items-center gap-3">
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-8 w-8 rounded-full border-2 border-[#fdf6f2] object-cover"
          />
        ))}
      </div>
      <div>
        <div className="flex gap-0.5 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
        <p className="font-mono text-[11px] text-slate-500">
          300+ developers joined already
        </p>
      </div>
    </div>
  );
}
