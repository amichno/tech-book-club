import React from 'react';
import Badge from './ui/Badge';
import AvatarRating from './ui/AvatarRating';
import GridBackground from './ui/GridBackground';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-sky-50 via-[#fdf3ee] to-[#fdf3ee] px-6 py-16 sm:px-10 lg:px-16'>
      <GridBackground />

      <div className='relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2'>
        {/* Lewa kolumna: treść */}
        <div>
          <Badge />

          <h1 className='mt-6 font-mono text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl'>
            <span className='text-[#e0704a]'>Join the</span>
            <br />
            <span className='text-slate-900'>ultimate tech</span>
            <br />
            <span className='text-[#e0704a]'>book club</span>
          </h1>

          <p className='mt-5 max-w-md text-[15px] leading-relaxed text-slate-500'>
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </p>

          <button className='mt-7 sm:w-auto w-full flex  justify-items-center gap-2 rounded-md border border-slate-900 bg-transparent px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-slate-900 transition-colors hover:bg-slate-900 hover:text-white'>
            Review membership options
            <span aria-hidden='true'>↓</span>
          </button>

          <AvatarRating />
        </div>

        {/* Prawa kolumna: zdjęcie */}
        <div className='relative'>
          <img
            src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop'
            alt='Grupa programistów dyskutująca przy stole nad książką'
            className='aspect-[4/5] w-full rounded-2xl object-cover shadow-xl sm:aspect-[9/10]'
          />
        </div>
      </div>
    </section>
  );
}
