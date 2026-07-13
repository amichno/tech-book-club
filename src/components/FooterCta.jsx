import React from "react";

export default function FooterCta() {
  return (
    <section className="bg-slate-900 px-6 py-20 text-center sm:px-10 lg:px-16">
      <h2 className="font-mono text-2xl font-bold text-white sm:text-4xl">
        Ready to debug your reading list?
      </h2>
      <p className="mt-4 text-sm text-slate-400">
        Join hundreds of developers leveling up one book at a time.
      </p>
      <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#e0704a] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#c85f3c]">
        Join the club
      </button>
    </section>
  );
}
