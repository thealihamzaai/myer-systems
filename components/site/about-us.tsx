'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Building2, Globe2, ShieldCheck } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="relative scroll-mt-24 bg-[#F0FAFF] pt-12 pb-8 lg:pt-14 lg:pb-10 overflow-hidden border-t border-border/80">
      
      {/* ── Subtle Ambient Lighting ── */}
      <div 
        className="pointer-events-none absolute top-1/3 left-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── 2-Column Split: Clean Info on Left, Team Photo on Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ════════ LEFT: Clean, Clutter-Free Story (No Cards) ════════ */}
          <div className="reveal-left lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-4 py-1.5 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-steel font-ui">
                ABOUT MYER SYSTEMS · DUAL-HUB MODEL
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
              Bridging onshore strategic{' '}
              <span className="font-quote italic font-normal text-brand-steel">
                accountability
              </span>{' '}
              with global engineering scale.
            </h2>

            {/* Quote-style short statement */}
            <div className="pt-1">
              <blockquote className="border-l-[3px] border-brand pl-4 sm:pl-5 py-0.5">
                <p className="font-quote italic text-lg sm:text-xl text-[#101820] leading-relaxed">
                  &ldquo;Delivering dependable operational support through organized systems, trained specialists, and transparent accountability across Dallas and Lahore.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Direct Dual Hub Badges */}
            <div className="pt-1 flex flex-wrap items-center gap-5 text-xs text-[#101820] font-ui font-semibold">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-brand-steel" />
                <span>Dallas HQ · US Legal Jurisdiction</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-brand-steel" />
                <span>Lahore Hub · 24/7 Global Delivery</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-xs sm:text-sm font-bold text-[#101820] shadow-[0_2px_14px_rgba(41,168,224,0.25)] transition-all duration-200 hover:bg-brand-hover hover:text-white font-ui"
              >
                <span>Learn More About Us</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>

          {/* ════════ RIGHT: High-Resolution Team Picture ════════ */}
          <div className="reveal-scale lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-2xl shadow-brand/10 p-2 sm:p-3">
              
              {/* Image Viewport */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/team-meeting.jpg"
                  alt="Myer Systems Team Strategic Meeting"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Overlay Reassurance Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-white">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider font-ui drop-shadow-sm block">
                      Myer Systems Global Team
                    </span>
                    <span className="text-[11px] text-white/90 font-sans">
                      Dallas Executive Leadership &amp; Lahore Technical Pods
                    </span>
                  </div>
                  <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[11px] font-bold font-mono border border-white/30">
                    250% Growth
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
