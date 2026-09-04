'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  Activity, 
  ExternalLink,
  CheckCircle2,
  Lock,
  Sparkles
} from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';

export function FlagshipPlatform() {
  return (
    <section id="flagship" className="relative scroll-mt-24 bg-background pt-8 pb-10 lg:pt-10 lg:pb-14 overflow-hidden">
      
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-1/4 right-0 h-[650px] w-[650px] rounded-full bg-brand/5 blur-[150px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full bg-brand-steel/5 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 bg-grid opacity-30" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Editorial 2-Column Showcase ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ════════ LEFT COLUMN: Platform Architecture & Narrative ════════ */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow Chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-steel font-ui">
                PROPRIETARY FLAGSHIP IP · HEALTHCARE AI
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-ink font-sans">
              Synthesizing clinical data, streamlining care at{' '}
              <span className="font-quote italic font-normal text-brand-steel">
                enterprise scale
              </span>.
            </h2>

            {/* Verbatim Narrative from Business Profile */}
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
              <strong className="font-bold text-ink">MedSynthea</strong> is our flagship healthcare-focused AI platform, engineered by Myer Systems to synthesize complex clinical data and streamline both clinical and administrative workflows for North American healthcare providers.
            </p>

            {/* Architectural Flow Points */}
            <div className="pt-2 divide-y divide-border/80 border-y border-border/80">
              
              <div className="py-4 flex items-start gap-4">
                <span className="text-sm font-bold text-brand font-mono shrink-0 mt-0.5">01</span>
                <div>
                  <h3 className="text-base font-bold text-ink font-heading">
                    Clinical Data Synthesis
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground font-sans">
                    Synthesizes disparate EHR records, physician notes, and laboratory feeds into structured, actionable clinical intelligence in sub-second response times.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <span className="text-sm font-bold text-brand font-mono shrink-0 mt-0.5">02</span>
                <div>
                  <h3 className="text-base font-bold text-ink font-heading">
                    Administrative & Documentation Acceleration
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground font-sans">
                    Cuts provider documentation burden by 40%, automates pre-charting, and eliminates clinical handoff friction with human-verified precision.
                  </p>
                </div>
              </div>

              <div className="py-4 flex items-start gap-4">
                <span className="text-sm font-bold text-brand font-mono shrink-0 mt-0.5">03</span>
                <div>
                  <h3 className="text-base font-bold text-ink font-heading">
                    Enterprise HIPAA Enclave
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground font-sans">
                    Built inside dedicated VPC boundaries with automated SHA-256 audit trails, ensuring zero PHI data exposure to public AI foundation models.
                  </p>
                </div>
              </div>

            </div>

            {/* Operations Credit from Profile & Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
                <LiveSignalBeacon color="emerald" size="sm" />
                <span>Live in Production · Operations led by MedSynthea Leadership</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://medsynthea.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs sm:text-sm font-bold text-ink shadow-[0_2px_12px_rgba(41,168,224,0.25)] transition-all hover:bg-brand-hover hover:text-white font-ui"
                >
                  <span>Visit medsynthea.com</span>
                  <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-5 py-3 text-xs sm:text-sm font-bold text-ink hover:bg-white hover:border-brand/40 font-ui transition-all"
                >
                  <span>Request Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* ════════ RIGHT COLUMN: Interactive MedSynthea Clinical Console with Living Micro-Interactions ════════ */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-slate-700/60 bg-slate-950 p-1 shadow-2xl shadow-brand/10 overflow-hidden group">
              
              {/* Subtle Scanning Horizon Beam */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              {/* Outer Ambient Glow inside console */}
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-brand/15 blur-3xl pointer-events-none" />

              {/* Console Window Top Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 bg-slate-900/90 rounded-t-[22px]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-3 text-[11px] font-mono text-slate-400 font-medium">
                    MedSynthea OS v2.4 · Clinical Engine
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20 font-bold">
                    <LiveSignalBeacon color="emerald" size="sm" />
                    HIPAA Enclave
                  </span>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 sm:p-7 space-y-5 text-slate-300">
                
                {/* Active Patient Encounter Status with Count-Up Latency */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Active Encounter Analysis
                    </span>
                    <span className="text-sm font-bold text-white font-mono mt-0.5 block">
                      Encounter #MS-9821 · Clinical Chart Ingestion
                    </span>
                  </div>
                  <span className="text-xs font-mono text-brand-light bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-lg">
                    <AnimatedCounter value={0.38} decimals={2} prefix="Latency: " suffix="s" />
                  </span>
                </div>

                {/* Real-time Audio / Clinical Synthesis Waveform */}
                <div className="rounded-xl bg-slate-900/80 border border-white/10 p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Activity className="h-3.5 w-3.5 text-brand" />
                      Live Audio & Chart Stream
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Synthesizing...
                    </span>
                  </div>

                  {/* Audio Waveform Bars with Living Micro-Animations */}
                  <div className="flex items-center gap-1 h-8 px-2 bg-slate-950/60 rounded-lg border border-white/5 overflow-hidden">
                    {[35, 60, 20, 85, 45, 95, 70, 40, 80, 55, 30, 90, 65, 45, 75, 100, 50, 80, 40, 60, 85, 30, 70, 90, 45, 65, 80, 40].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-brand rounded-full transition-all duration-300 animate-pulse" 
                        style={{ 
                          height: `${h}%`, 
                          animationDelay: `${(i % 6) * 140}ms`,
                          animationDuration: `${1.2 + (i % 4) * 0.3}s` 
                        }} 
                      />
                    ))}
                  </div>
                </div>

                {/* Generated Extraction Feed */}
                <div className="rounded-xl bg-slate-900/80 border border-white/10 p-4 space-y-2 font-mono text-xs relative overflow-hidden">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                    Structured Clinical Extraction:
                  </span>
                  <div className="text-slate-200 leading-relaxed text-[11px] sm:text-xs space-y-1">
                    <div>&gt; <span className="text-emerald-400">Diagnosis:</span> Post-operative cardiac telemetry normal.</div>
                    <div>&gt; <span className="text-brand-light">CPT Verified:</span> 99223 (Subsequent Inpatient Care).</div>
                    <div>&gt; <span className="text-amber-300">ICD-10 Cross-Ref:</span> I25.10 (Arteriosclerotic heart disease).</div>
                    <div className="flex items-center gap-1.5">
                      &gt; <span className="text-slate-400">Status:</span> 0 Discrepancies · Automated claim pre-flight complete.
                      <span className="inline-block h-3 w-1.5 bg-brand animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Bottom Proof Metrics Strip inside Console with Living Count-Up */}
                <div className="grid grid-cols-3 gap-2 pt-2 text-center font-mono">
                  <div className="rounded-lg bg-white/5 p-2 border border-white/5">
                    <span className="text-[10px] text-slate-400 block uppercase">Synthesized</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">
                      <AnimatedCounter value={48} suffix=" Records" />
                    </span>
                  </div>
                  <div className="rounded-lg bg-white/5 p-2 border border-white/5">
                    <span className="text-[10px] text-slate-400 block uppercase">Accuracy</span>
                    <span className="text-sm font-bold text-emerald-400 mt-0.5 block">
                      <AnimatedCounter value={99.4} decimals={1} suffix="% Precision" />
                    </span>
                  </div>
                  <div className="rounded-lg bg-white/5 p-2 border border-white/5">
                    <span className="text-[10px] text-slate-400 block uppercase">Documentation</span>
                    <span className="text-sm font-bold text-brand-light mt-0.5 block">
                      <AnimatedCounter value={40} prefix="-" suffix="% Burden" />
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
