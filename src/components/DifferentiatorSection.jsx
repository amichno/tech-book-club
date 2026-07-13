import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function DifferentiatorSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-mono text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Not your average
            <br />
            book <span className="text-[#e0704a]">club</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-500">
            Connect with a community that speaks your language — from
            Python to TypeScript and everything in between. Our discussions
            blend technical depth with practical application.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop"
            alt="Grupa uśmiechniętych osób podczas dyskusji przy stole"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
          />
          {/* Ikony nakładane na zdjęcie */}
          <div className="absolute -bottom-4 right-8 flex flex-col gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-md">
              <MessageCircle className="h-4 w-4" />
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 text-white shadow-md">
              <Phone className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
