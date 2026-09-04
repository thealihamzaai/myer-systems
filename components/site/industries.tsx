'use client';

import Link from 'next/link';
import { 
  Activity, 
  Building2, 
  Workflow, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileCheck2, 
  Zap 
} from 'lucide-react';

const INDUSTRIES = [
  {
    monogram: 'HC',
    tag: 'CLINICAL & HOSPITAL NETWORKS',
    title: 'Healthcare Systems & Hospital Networks',
    description: 'HIPAA-compliant AI architectures, clinical data synthesis, and predictive workflow automation engineered for North American hospital networks and clinical provider groups.',
    icon: Activity,
    capabilities: [
      'Clinical data synthesis & administrative triage',
      'HIPAA-compliant dedicated VPC boundaries',
      'Predictive inpatient & outpatient workflow routing',
    ],
    metric: '100% HIPAA Bound',
    href: '/services#rcm',
  },
  {
    monogram: 'MB',
    tag: 'REVENUE CYCLE & CODING',
    title: 'US Medical Billing Organizations',
    description: 'High-volume offshore claim processing, automated CPT-4/ICD-10 coding verification, real-time denial mitigation, and accounts receivable recovery for US billing companies.',
    icon: Building2,
    capabilities: [
      'Certified AAPC & AHIMA offshore coding teams',
      'Automated pre-submission claim discrepancy audit',
      'Accelerated reimbursement & cash-flow velocity',
    ],
    metric: '99.4% Billing Precision',
    href: '/services#rcm',
  },
  {
    monogram: 'EN',
    tag: 'COMMERCIAL OPERATIONS',
    title: 'Commercial Enterprises & Regulated Ops',
    description: 'Intelligent resource augmentation, automated back-office business reengineering, and auditable AI systems built for organizations where unverified black-box output is unacceptable.',
    icon: Workflow,
    capabilities: [
      'Business process & workflow bottleneck reengineering',
      'Immutable SHA-256 decision audit logging',
      'Dedicated offshore engineering & operational pods',
    ],
    metric: 'Zero Black-Box Output',
    href: '/services#ai-solutions',
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-24 border-t border-border/80 bg-background py-20 lg:py-28 overflow-hidden">
      
      {/* ── Ambient Background Lighting ── */}
      <div 
        className="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Section Header (Strictly from Business Profile) ── */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between mb-14 sm:mb-18">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-steel font-ui">
                SECTORS & VERTICALS · TARGET MARKETS
              </span>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-bold tracking-tight text-ink font-heading">
              Engineered for sectors where{' '}
              <span className="font-quote italic font-normal text-brand-steel">
                accuracy
              </span>{' '}
              is non-negotiable.
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
              From regulated healthcare clinical operations to commercial enterprise reengineering, we deliver accountable technology under direct Dallas governance.
            </p>
          </div>

          <Link
            href="/contact"
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-xs sm:text-[13px] font-bold text-ink transition-all hover:bg-white hover:border-brand/40 hover:text-brand-steel md:inline-flex font-ui shadow-xs"
          >
            <span>Discuss your sector</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* ── Monogram Bento Cards Grid ── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-white/95 p-7 sm:p-8 shadow-xl shadow-brand/5 backdrop-blur-xl transition-all duration-300 hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1.5"
            >
              <div>
                {/* Header: Icon & Monogram Mark */}
                <div className="flex items-center justify-between border-b border-border/70 pb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand-steel transition-colors group-hover:bg-brand group-hover:text-white">
                    <ind.icon className="h-6 w-6" />
                  </div>
                  
                  {/* High-Fashion Monogram Mark */}
                  <span className="font-heading font-light text-2xl tracking-widest text-brand/35 select-none transition-colors group-hover:text-brand-steel">
                    [{ind.monogram}]
                  </span>
                </div>

                {/* Industry Tag & Title */}
                <div className="mt-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-steel font-ui block">
                    {ind.tag}
                  </span>
                  
                  <h3 className="mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-ink font-heading leading-snug">
                    {ind.title}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-sans">
                    {ind.description}
                  </p>
                </div>

                {/* Core Capabilities */}
                <div className="mt-6 border-t border-border/60 pt-4 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink/70 font-ui block">
                    Tailored Capabilities:
                  </span>
                  {ind.capabilities.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-muted-foreground font-sans">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Action */}
              <div className="mt-8 pt-4 border-t border-border/70 flex items-center justify-between">
                <Link
                  href={ind.href}
                  className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-brand-steel transition-colors font-ui uppercase tracking-wider"
                >
                  <span>Explore Sector</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
                <span className="text-xs font-bold text-brand font-ui">
                  {ind.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View CTA */}
        <div className="mt-8 md:hidden text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-xs font-bold text-ink font-ui shadow-sm"
          >
            <span>Discuss your sector</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
