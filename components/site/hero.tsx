'use client';

import Link from 'next/link';
import { HeroVisual } from './hero-visual';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-background pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24"
    >
      {/* ── Ambient Background Lighting in Precision & Data Theme ── */}
      <div 
        className="pointer-events-none absolute -top-24 right-0 h-[600px] w-[600px] rounded-full bg-brand/10 blur-[130px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute top-1/2 -left-20 h-[500px] w-[500px] rounded-full bg-brand-steel/10 blur-[110px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 bg-grid opacity-40" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        
        {/* ── Upper Hero: Typography & 3D Celestial Visual ── */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">

          {/* Left Column: Authentic Myer Systems Narrative */}
          <div className="lg:col-span-7 z-10">
            
            {/* Top Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase text-brand-steel font-ui">
                ENTERPRISE AI & HEALTHCARE SYSTEMS · DALLAS, TX
              </span>
            </div>

            {/* Display Headline matching Typography Plan */}
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-[3.65rem]/[1.1] xl:text-[4.15rem]/[1.1] font-bold tracking-tight text-ink font-heading">
              AI Systems Built for <br />
              <span className="font-quote italic font-normal text-brand-steel">
                Accountability
              </span>
              , Scale & Control.
            </h1>

            {/* Official Tagline */}
            <p className="font-quote italic text-brand-steel text-lg sm:text-xl mt-3.5">
              Where Human Expertise Meets Enterprise AI.
            </p>

            {/* Subtext Paragraph */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
              From clinical healthcare workflows to global commercial operations, Myer Systems engineers governed AI architectures, end-to-end RCM platforms, and hybrid operational teams for organizations requiring measurable certainty.
            </p>

            {/* Dual CTAs with Top-Right Directional Arrows */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[14px] font-bold text-ink shadow-[0_4px_16px_rgba(41,168,224,0.3)] transition-all duration-200 hover:bg-brand-hover hover:text-white hover:shadow-[0_6px_22px_rgba(41,168,224,0.45)] hover:scale-[1.02] font-ui"
              >
                <span>Schedule Consultation</span>
                <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
              
              <a
                href="#disciplines"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-7 py-3.5 text-[14px] font-semibold text-ink shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white hover:border-brand/40 hover:text-brand-steel font-ui"
              >
                <span>Explore Solutions</span>
                <span className="text-xs text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Geodesic Spheres Visual */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <HeroVisual />
          </div>

        </div>

      </div>
    </section>
  );
}
