'use client';

import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Lock, Building2, Terminal, ArrowRight } from 'lucide-react';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';

interface ProblemItem {
  num: string;
  domain: string;
  title: string;
  problem: string;
  solution: string;
  badge: string;
  spec: string;
  metricHighlight: string;
}

const COMPARISONS: ProblemItem[] = [
  {
    num: '01',
    domain: 'REVENUE CYCLE & BILLING',
    title: 'Claim Denials & Margin Leakage',
    problem: 'Manual coding inconsistencies, shifting payer rules, and delayed follow-ups compound into costly denials that stall provider cash flow.',
    solution: 'Dedicated AAPC/AHIMA certified coding specialists paired with pre-submission algorithmic scrubbers detecting payer variances before filing.',
    badge: '99.4% CLEAN CLAIMS',
    spec: 'Turnaround Velocity:',
    metricHighlight: '<48h Sync Enforced',
  },
  {
    num: '02',
    domain: 'WORKFLOW REENGINEERING',
    title: 'Automating Broken Workflows',
    problem: 'Deploying automation onto unmapped processes merely accelerates errors and friction across disconnected operational silos.',
    solution: 'Comprehensive pre-code workflow mapping and standardized SOP gates that eliminate bottlenecks before software deployment.',
    badge: '-38% CYCLE FRICTION',
    spec: 'Handoff Architecture:',
    metricHighlight: '100% Mapped SOPs',
  },
  {
    num: '03',
    domain: 'ENTERPRISE AI GOVERNANCE',
    title: 'Opaque Black-Box Drift',
    problem: 'Unverified model drift and lack of audit trails create critical compliance vulnerabilities and fail legal and regulatory scrutiny.',
    solution: 'Deterministic execution bounds, strict role-based access control (RBAC), and immutable SHA-256 event audit ledgers with human sign-offs.',
    badge: 'ZERO BLACK BOXES',
    spec: 'Deterministic SLA:',
    metricHighlight: '99.8% Compliance',
  },
  {
    num: '04',
    domain: 'GLOBAL DELIVERY SCALE',
    title: 'Domestic Overhead vs. Quality Gap',
    problem: 'Prohibitive domestic US recruitment overhead limits expansion, while unmanaged offshore outsourcing compromises delivery control.',
    solution: 'The Dual-Hub Model: Direct Dallas, Texas US legal jurisdiction and BAA accountability backed by 100+ vetted specialists in our Lahore hub.',
    badge: 'DUAL-HUB EXECUTION',
    spec: 'Throughput Multiplier:',
    metricHighlight: '3.4x Velocity',
  },
];

export function Problems() {
  return (
    <section id="problems" className="relative scroll-mt-24 border-t border-border/80 bg-[#F8FAFC] py-16 lg:py-24 overflow-hidden">
      
      {/* ── Ambient Background Lighting ── */}
      <div 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-brand/5 blur-[150px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-brand-steel/5 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-4 py-1.5 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-steel font-ui">
                THE OPERATIONAL CONTRAST · ZERO COMPROMISE
              </span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
              Engineered for clarity where{' '}
              <span className="font-quote italic font-normal text-brand-steel">
                traditional operations
              </span>{' '}
              fail.
            </h2>

            <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
              A direct comparison between industry status-quo friction and the Myer Systems governed standard.
            </p>
          </div>

          <Link
            href="/how-we-operate"
            className="group hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-xs sm:text-[13px] font-bold text-ink transition-all hover:border-brand/40 hover:text-brand-steel font-ui shadow-xs shrink-0"
          >
            <span>Explore our methodology</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* ── High-End Architectural Contrast Rows ── */}
        <div className="space-y-4 sm:space-y-5">
          {COMPARISONS.map((item, idx) => (
            <div
              key={item.num}
              className="reveal-up group relative rounded-3xl border border-border/80 bg-white p-6 sm:p-7 lg:p-8 shadow-xs hover:shadow-xl hover:border-brand/40 transition-all duration-300 overflow-hidden"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Subtle Scanning Beam on Card Header */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true" 
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                
                {/* ── Left Column: Operational Dimension (3 Cols) ── */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-light text-brand/35 font-heading select-none group-hover:text-brand transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-steel font-ui px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                      {item.domain}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#101820] font-heading leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* ── Center Column: Conventional Reality (4 Cols) ── */}
                <div className="lg:col-span-4 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-5 relative transition-all group-hover:border-slate-300">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-200/80">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 font-ui">
                        Conventional Friction
                      </span>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">
                      Status Quo
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600 font-sans">
                    {item.problem}
                  </p>
                </div>

                {/* ── Right Column: The Myer Governed Standard (5 Cols) ── */}
                <div className="lg:col-span-5 rounded-2xl border border-brand/35 bg-gradient-to-br from-white via-white to-[#F0FAFF] p-4 sm:p-5 relative shadow-xs transition-all duration-300 group-hover:border-brand/60 group-hover:shadow-md">
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-brand/15">
                    <div className="flex items-center gap-2">
                      <LiveSignalBeacon color="brand" size="sm" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-steel font-ui">
                        Myer Governed Standard
                      </span>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-[9px] font-mono font-bold text-brand uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#101820] font-semibold font-sans">
                    {item.solution}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-brand/15 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-muted-foreground">{item.spec}</span>
                    <span className="font-bold text-brand tracking-tight">{item.metricHighlight}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Trust Summary Strip Below Matrix ── */}
        <div className="mt-8 rounded-2xl border border-border/80 bg-white p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-ui">
            <span className="flex items-center gap-1.5 text-ink font-semibold">
              <ShieldCheck className="h-4 w-4 text-brand" />
              Dallas US Legal BAA Standard
            </span>
            <span className="flex items-center gap-1.5 text-ink font-semibold">
              <Lock className="h-4 w-4 text-brand" />
              Immutable SHA-256 Audit Trails
            </span>
            <span className="flex items-center gap-1.5 text-ink font-semibold">
              <Building2 className="h-4 w-4 text-brand" />
              100+ Specialists Lahore Hub
            </span>
          </div>

          <Link
            href="/services"
            className="text-xs font-bold text-brand hover:text-brand-steel inline-flex items-center gap-1.5 font-ui uppercase tracking-wider shrink-0"
          >
            <span>View All 6 Core Disciplines</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
