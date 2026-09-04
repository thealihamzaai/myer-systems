'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { SelfDrawingSparkline } from '@/components/ui/self-drawing-sparkline';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';

interface ServiceItem {
  num: string;
  punchy: string;
  tagline: string;
  title: string;
  desc: string;
  href: string;
  image: string;
  metric1: {
    label: string;
    value: string;
    sub: string;
    isNumeric?: boolean;
    countValue?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    hasBeacon?: boolean;
    beaconColor?: 'brand' | 'emerald' | 'amber';
  };
  metric2: {
    label: string;
    value: string;
    sub: string;
    isNumeric?: boolean;
    countValue?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    hasSparkline?: boolean;
    sparklineTrend?: 'up' | 'sla' | 'surge' | 'down';
  };
}

const SERVICES: ServiceItem[] = [
  {
    num: '01',
    punchy: 'Governed.',
    tagline: 'Intelligence with audit trails, not black-box guesses.',
    title: 'Enterprise-Grade AI Solutions',
    desc: 'Advanced AI systems engineered for accountability, scalability, and control at enterprise scale. Built for organizations where unverified black-box decisions and model drift are unacceptable.',
    href: '/services#ai-solutions',
    image: '/project-audit.jpg',
    metric1: {
      label: 'VERIFIED',
      value: 'RBAC & SHA-256',
      sub: 'Role-based access & immutable audit ledgers',
      hasBeacon: true,
      beaconColor: 'brand',
    },
    metric2: {
      label: 'UP TO',
      value: '99.8%',
      sub: 'Deterministic SLA with bounded execution',
      isNumeric: true,
      countValue: 99.8,
      decimals: 1,
      suffix: '%',
      hasSparkline: true,
      sparklineTrend: 'sla',
    },
  },
  {
    num: '02',
    punchy: 'Predictive.',
    tagline: 'Forecasts and cash-flow your team can verify.',
    title: 'Revenue Cycle Management (RCM)',
    desc: 'End-to-end AI-powered RCM covering patient access, coding, billing, collections, and reporting. We build governed AI into your revenue cycle so claims move faster and denials drop.',
    href: '/services#rcm',
    image: '/dashboard-mockup.jpg',
    metric1: {
      label: 'UP TO',
      value: '22.4%',
      sub: 'Denial mitigation & margin recovery yield',
      isNumeric: true,
      countValue: 22.4,
      decimals: 1,
      suffix: '%',
    },
    metric2: {
      label: 'CLEAN CLAIM',
      value: '99.4%',
      sub: 'Clean-claim resolution per batch intake',
      isNumeric: true,
      countValue: 99.4,
      decimals: 1,
      suffix: '%',
      hasSparkline: true,
      sparklineTrend: 'up',
    },
  },
  {
    num: '03',
    punchy: 'Compliant.',
    tagline: 'Certified accuracy, zero underpayment risk.',
    title: 'Medical Billing & Clinical Coding',
    desc: 'Offshore medical billing and coding services for US-based healthcare organisations. AAPC and AHIMA certified specialists delivering precision CPT-4 and ICD-10 execution from our Lahore hub.',
    href: '/services#rcm',
    image: '/project-health.jpg',
    metric1: {
      label: 'SPECIALISTS',
      value: 'AAPC / AHIMA',
      sub: 'Dedicated offshore clinical coding pods',
      hasBeacon: true,
      beaconColor: 'emerald',
    },
    metric2: {
      label: 'VELOCITY',
      value: '<48h Sync',
      sub: 'Payer reimbursement turnaround time',
      isNumeric: true,
      countValue: 48,
      prefix: '<',
      suffix: 'h Sync',
      hasSparkline: false,
    },
  },
  {
    num: '04',
    punchy: 'Operational.',
    tagline: 'Eliminating workflow friction before writing code.',
    title: 'Business Process Reengineering',
    desc: 'Eliminating workflow inefficiencies and rebuilding smarter, more predictable operational processes. We map how work moves today, eliminating bottlenecks and designing scalable workflows.',
    href: '/services#ai-solutions',
    image: '/images/discover.jpg',
    metric1: {
      label: 'EFFICIENCY',
      value: '-38%',
      sub: 'Manual workflow friction reduction',
      isNumeric: true,
      countValue: 38,
      prefix: '-',
      suffix: '%',
    },
    metric2: {
      label: 'RESISTANCE',
      value: 'Zero Friction',
      sub: 'Standardized operational handoff gates',
      hasSparkline: true,
      sparklineTrend: 'down',
    },
  },
  {
    num: '05',
    punchy: 'Augmented.',
    tagline: 'AI agents paired with specialized human delivery.',
    title: 'Intelligent Resource Augmentation',
    desc: 'Combining autonomous AI agents with skilled offshore technical and clinical billing teams under direct Dallas leadership. Scale throughput without domestic hiring overhead or quality loss.',
    href: '/services#resource-augmentation',
    image: '/team-meeting.jpg',
    metric1: {
      label: 'GLOBAL HUB',
      value: '100+ Specialists',
      sub: 'Engineering & billing experts in Lahore hub',
      isNumeric: true,
      countValue: 100,
      suffix: '+ Specialists',
    },
    metric2: {
      label: 'VELOCITY',
      value: '3.4x Multiplier',
      sub: 'Operational output without domestic lag',
      isNumeric: true,
      countValue: 3.4,
      decimals: 1,
      suffix: 'x Multiplier',
      hasSparkline: true,
      sparklineTrend: 'surge',
    },
  },
  {
    num: '06',
    punchy: 'Scalable.',
    tagline: 'Proprietary multi-tenant healthcare platforms.',
    title: 'Industry SaaS Solutions',
    desc: 'Scalable, vertically-focused software-as-a-service products built for healthcare and commercial markets. Anchored by our flagship MedSynthea platform for clinical data synthesis.',
    href: '/services#saas',
    image: '/images/deploy.jpg',
    metric1: {
      label: 'IP FLAGSHIP',
      value: 'MedSynthea OS',
      sub: 'Clinical data synthesis platform',
      hasBeacon: true,
      beaconColor: 'brand',
    },
    metric2: {
      label: 'ARCHITECTURE',
      value: 'Multi-Tenant',
      sub: '100% HIPAA-compliant isolated enclaves',
      hasSparkline: false,
    },
  },
];

export function Disciplines() {
  return (
    <section id="disciplines" className="relative scroll-mt-24 bg-[#F0FAFF] pt-6 pb-10 lg:pt-8 lg:pb-12 overflow-hidden">
      
      {/* ── Crisp Ambient Lighting & Grid on White Background ── */}
      <div 
        className="pointer-events-none absolute top-10 right-10 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[150px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full bg-brand-steel/5 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-0 bg-grid opacity-25" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="reveal mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-4 py-1.5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-steel font-ui">
              SERVICES & INDUSTRY FOCUS
            </span>
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-[#101820] font-sans">
            Operating across healthcare technology and{' '}
            <span className="font-quote italic font-normal text-brand-steel">
              enterprise AI
            </span>.
          </h2>

          <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans max-w-2xl mx-auto">
            Myer Systems operates at the intersection of healthcare technology and enterprise AI, helping organizations transition from reactive operations to predictable, data-driven performance.
          </p>
        </div>

        {/* ── 2-Column High-End OPAG Layout (2 Cards per Row) ── */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((item, idx) => (
            <div
              key={item.num}
              className="reveal-up group relative flex flex-col justify-between rounded-3xl border border-border bg-white p-7 sm:p-9 shadow-lg shadow-brand/5 transition-all duration-300 hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1 overflow-hidden"
              style={{ transitionDelay: `${(idx % 2) * 120}ms` }}
            >
              {/* Subtle Scanning Horizon Beam on Card Header */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              <div>
                {/* Top Row: Outlined Numeral & Circle Action Glyph */}
                <div className="flex items-center justify-between border-b border-border/70 pb-5">
                  <span className="text-5xl sm:text-6xl font-light text-brand/35 font-heading select-none">
                    {item.num}
                  </span>
                  
                  <Link
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border text-brand-steel transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:border-brand shadow-xs"
                    aria-label={`Explore ${item.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Punchy Title & Italic Tagline */}
                <div className="mt-6">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#101820] font-heading leading-tight">
                    {item.punchy}
                  </h3>
                  
                  <p className="mt-1 text-sm sm:text-base font-quote italic text-brand-steel font-normal">
                    {item.tagline}
                  </p>

                  <h4 className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground font-ui">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Real Context Image Preview Strip */}
                <div className="relative mt-6 h-36 w-full overflow-hidden rounded-2xl border border-border/80 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold font-ui uppercase tracking-wider drop-shadow-sm flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Production System
                    </span>
                    <span className="text-[11px] font-mono text-white/90 drop-shadow-sm">
                      Verified SLA
                    </span>
                  </div>
                </div>
              </div>

              {/* Lower Half: Dual Live Telemetry Boxes with Living Micro-Interactions */}
              <div className="mt-6 pt-5 border-t border-border/70 grid grid-cols-2 gap-4">
                
                {/* Metric Box 1 */}
                <div className="rounded-2xl border border-border bg-[#F0FAFF] p-4 transition-colors group-hover:border-brand/30">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-steel font-ui block">
                      {item.metric1.label}
                    </span>
                    {item.metric1.hasBeacon && (
                      <LiveSignalBeacon color={item.metric1.beaconColor || 'brand'} size="sm" />
                    )}
                  </div>

                  <div className="mt-1 text-lg sm:text-xl font-bold text-[#101820] font-heading">
                    {item.metric1.isNumeric && item.metric1.countValue !== undefined ? (
                      <AnimatedCounter 
                        value={item.metric1.countValue}
                        prefix={item.metric1.prefix}
                        suffix={item.metric1.suffix}
                        decimals={item.metric1.decimals}
                        duration={1200}
                      />
                    ) : (
                      item.metric1.value
                    )}
                  </div>

                  <span className="mt-1 text-[11px] leading-snug text-muted-foreground font-sans block">
                    {item.metric1.sub}
                  </span>
                </div>

                {/* Metric Box 2 with Self-Drawing Sparkline & Animated Counter */}
                <div className="rounded-2xl border border-border bg-[#F0FAFF] p-4 transition-colors group-hover:border-brand/30 relative overflow-hidden">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand-steel font-ui block">
                    {item.metric2.label}
                  </span>
                  
                  <div className="flex items-center justify-between">
                    <div className="mt-1 text-lg sm:text-xl font-bold text-brand font-heading">
                      {item.metric2.isNumeric && item.metric2.countValue !== undefined ? (
                        <AnimatedCounter 
                          value={item.metric2.countValue}
                          prefix={item.metric2.prefix}
                          suffix={item.metric2.suffix}
                          decimals={item.metric2.decimals}
                          duration={1400}
                        />
                      ) : (
                        item.metric2.value
                      )}
                    </div>

                    {/* Self-Drawing Sparkline Graph */}
                    {item.metric2.hasSparkline && (
                      <SelfDrawingSparkline 
                        trend={item.metric2.sparklineTrend || 'up'}
                        width={64}
                        height={24}
                        color="#29A8E0"
                      />
                    )}
                  </div>

                  <span className="mt-1 text-[11px] leading-snug text-muted-foreground font-sans block">
                    {item.metric2.sub}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
