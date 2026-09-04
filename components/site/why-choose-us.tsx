'use client';

import Link from 'next/link';
import { 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  ArrowUpRight, 
  Scale, 
  Lock, 
  Zap, 
  FileCheck, 
  Award, 
  Building2 
} from 'lucide-react';

const COMPARISON_CRITERIA = [
  {
    vector: 'Contractual Jurisdiction & BAA',
    traditional: 'Offshore shell entities with zero enforceable US legal recourse or direct HIPAA BAA certainty.',
    myer: 'Direct Dallas, Texas corporate entity with full US jurisdiction, federal liability, and countersigned BAA.',
    advantage: '100% US Enforceable',
  },
  {
    vector: 'AI Decision Architecture',
    traditional: 'Opaque prompt-wrapped foundation models with unmonitored hallucinations and model drift.',
    myer: 'Deterministic AI systems with strict boundary conditions, SHA-256 audit logs, and mandatory human sign-off.',
    advantage: 'Zero Black-Box Drift',
  },
  {
    vector: 'Clinical & Technical Talent',
    traditional: 'Unvetted generalist freelancers with high turnover and no verified clinical billing certifications.',
    myer: 'Dedicated Lahore engineering hub paired with certified AAPC & AHIMA clinical coding specialists.',
    advantage: 'AAPC / AHIMA Certified',
  },
  {
    vector: 'Operating Velocity & Coverage',
    traditional: 'Limited 9-to-5 domestic hours with painful domestic hiring lags and rigid staffing bottlenecks.',
    myer: 'Synchronous 24/7 global delivery model linking Dallas executive leadership with 100+ offshore specialists.',
    advantage: '24/7 Continuous Execution',
  },
  {
    vector: 'Commercial IP & Data Residency',
    traditional: 'Multi-tenant cloud lock-in with telemetry and client data routed through shared public third parties.',
    myer: 'Client-dedicated VPC isolated enclaves with complete client IP ownership and zero public model exposure.',
    advantage: 'Dedicated Client VPC',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative scroll-mt-24 bg-[#F0FAFF] py-20 lg:py-28 overflow-hidden">
      
      {/* ── Ambient Background Depth ── */}
      <div 
        className="pointer-events-none absolute top-10 left-1/3 h-[550px] w-[550px] rounded-full bg-brand/5 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 right-10 h-[500px] w-[500px] rounded-full bg-brand-steel/5 blur-[130px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 bg-grid opacity-25" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Header ── */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-4 py-1.5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-steel font-ui">
              ENTERPRISE DUE DILIGENCE · BENCHMARK MATRIX
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-bold tracking-tight text-[#101820] font-heading">
            Built for enterprises where control is{' '}
            <span className="font-quote italic font-normal text-brand-steel">
              never optional
            </span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans max-w-2xl mx-auto">
            How our governed offshore-onshore architecture compares against traditional vendors and domestic consultancies when evaluated under rigorous enterprise procurement standards.
          </p>
        </div>

        {/* ── Architectural Due Diligence Matrix ── */}
        <div className="mt-14 sm:mt-18 overflow-hidden rounded-3xl border border-border bg-white shadow-xl shadow-brand/5">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-border bg-[#E0F4FC]/50 p-5 sm:p-6 text-xs font-bold uppercase tracking-wider font-ui text-[#101820]">
            <div className="md:col-span-4 text-brand-steel">
              Evaluation Criteria
            </div>
            <div className="hidden md:block md:col-span-4 text-muted-foreground">
              Traditional Offshore / Legacy Agencies
            </div>
            <div className="hidden md:block md:col-span-4 text-brand-steel flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span>Myer Systems Governed Standard</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-border/70">
            {COMPARISON_CRITERIA.map((row, idx) => (
              <div 
                key={row.vector}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-6 sm:p-7 items-center transition-colors hover:bg-[#F0FAFF]/70"
              >
                {/* Column 1: Vector */}
                <div className="md:col-span-4 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-steel">
                      0{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-[17px] font-bold text-[#101820] font-heading">
                      {row.vector}
                    </h3>
                  </div>
                  <span className="inline-block rounded-md bg-brand/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-steel font-ui">
                    {row.advantage}
                  </span>
                </div>

                {/* Column 2: Traditional Vendors */}
                <div className="md:col-span-4 flex items-start gap-3 rounded-2xl bg-slate-50/80 p-4 border border-slate-200/60 md:bg-transparent md:p-0 md:border-0">
                  <XCircle className="h-4.5 w-4.5 text-rose-500 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-[13.5px] leading-relaxed text-muted-foreground font-sans">
                    <span className="md:hidden block text-[10px] font-bold uppercase tracking-wider text-rose-600 font-ui mb-1">
                      Legacy Vendors:
                    </span>
                    {row.traditional}
                  </div>
                </div>

                {/* Column 3: Myer Systems Standard */}
                <div className="md:col-span-4 flex items-start gap-3 rounded-2xl bg-[#E0F4FC]/40 p-4 border border-brand/25 md:bg-transparent md:p-0 md:border-0">
                  <CheckCircle2 className="h-4.5 w-4.5 text-brand shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-[13.5px] leading-relaxed text-[#101820] font-medium font-sans">
                    <span className="md:hidden block text-[10px] font-bold uppercase tracking-wider text-brand-steel font-ui mb-1">
                      Myer Systems Standard:
                    </span>
                    {row.myer}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Matrix Bottom Action Footer */}
          <div className="border-t border-border bg-[#F0FAFF] p-6 sm:p-8 flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#101820] font-ui block">
                Have specific procurement or compliance requirements?
              </span>
              <span className="text-xs text-muted-foreground font-sans block">
                Our Dallas leadership provides custom BAA agreements, security questionnaires, and audit access.
              </span>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-xs sm:text-[13px] font-bold text-ink shadow-[0_2px_12px_rgba(41,168,224,0.25)] transition-all hover:bg-brand-hover hover:text-white font-ui"
            >
              <span>Schedule Architecture Review</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
