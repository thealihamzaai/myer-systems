'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Lock, 
  Activity, 
  Building2, 
  Server,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';

const STAGES = [
  {
    num: '01',
    status: 'STAGE 01 · PRE-CODE AUDIT',
    title: 'Discover & Map Workflow Friction',
    desc: 'We map your existing organizational workflows, pinpoint revenue cycle leakage, and model measurable operational ROI before writing a single line of code.',
    deliverables: [
      'Comprehensive organizational workflow mapping',
      'Early revenue risk & claim denial identification',
      'Defined ROI & billing accuracy SLA targets',
    ],
    executionTag: 'HOW WE EXECUTE',
    executionDesc: 'Deep clinical and operational discovery. We analyze EHR claim handoffs and system friction points to establish empirical baseline metrics.',
    visualType: 'workflow',
  },
  {
    num: '02',
    status: 'STAGE 02 · HIPAA GOVERNED',
    title: 'Architect & Enforce Governance Guardrails',
    desc: 'We engineer secure data pipelines with role-based access, strict HIPAA compliance boundaries, and immutable audit trails so humans remain accountable.',
    deliverables: [
      'Immutable SHA-256 event audit ledger',
      'Client-dedicated VPC protected data boundaries',
      'Enforced human-in-the-loop sign-off gates',
    ],
    executionTag: 'HOW WE EXECUTE',
    executionDesc: 'Deterministic policy enforcement. Models operate inside strict data enclaves where every prompt, output, and approval generates a verifiable hash.',
    visualType: 'security',
  },
  {
    num: '03',
    status: 'STAGE 03 · DISTRIBUTED MODEL',
    title: 'Hybrid Offshore-Onshore Deployment',
    desc: 'Autonomous AI agents deploy alongside certified medical coders and software engineers in our Lahore hub under direct Dallas executive leadership.',
    deliverables: [
      'Dedicated offshore clinical & engineering pods',
      'Trained AAPC/AHIMA certified billing specialists',
      'Direct Dallas contractual & regulatory oversight',
    ],
    executionTag: 'HOW WE EXECUTE',
    executionDesc: 'Distributed velocity with onshore accountability. High-velocity AI handles routine intake while dedicated human pods verify edge cases 24/7.',
    visualType: 'hybrid',
  },
  {
    num: '04',
    status: 'STAGE 04 · LIVE PRODUCTION',
    title: 'Scale & Real-Time Performance Telemetry',
    desc: 'Continuous real-time telemetry tracks accuracy SLAs, reduces claim denial rates, improves cash-flow visibility, and scales operational throughput.',
    deliverables: [
      'Real-time SLA & billing accuracy dashboards',
      'Proactive claim denial mitigation algorithms',
      'Seamless capacity scaling without hiring lag',
    ],
    executionTag: 'HOW WE EXECUTE',
    executionDesc: 'Continuous optimization. Live feedback loops detect drift, monitor cash-flow velocity, and scale throughput dynamically without domestic overhead.',
    visualType: 'telemetry',
  },
];

export function HowWeOperate() {
  return (
    <section id="how-we-operate" className="relative scroll-mt-24 border-t border-border/80 bg-background pt-12 pb-8 lg:pt-14 lg:pb-10 overflow-hidden">
      
      {/* ── Ambient Background Lighting ── */}
      <div 
        className="pointer-events-none absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[140px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-brand-steel/5 blur-[130px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Section Header (Strictly from Business Profile) ── */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-steel font-ui">
              OPERATING MODEL · GOVERNED EXECUTION
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-ink font-sans">
            Governance is the system, not an{' '}
            <span className="font-quote italic font-normal text-brand-steel">
              afterthought
            </span>.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
            Every engagement runs on our proven distributed offshore-onshore model — pairing direct Dallas executive governance with 24/7 technical execution to deliver predictable, accountable performance.
          </p>
        </div>

        {/* ── Architectural Split Strips with Prominent Typography & Animated Visuals ── */}
        <div className="mt-14 sm:mt-18 divide-y divide-border/80">
          {STAGES.map((stage) => (
            <article 
              key={stage.num}
              className="group py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center transition-colors hover:bg-card/25 rounded-3xl px-3 sm:px-6 relative overflow-hidden"
            >
              {/* Subtle Scanning Horizon Beam on Card Reveal */}
              <div 
                className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              {/* Column 1: Numeral & Status Pill */}
              <div className="lg:col-span-2 flex flex-col items-start gap-2.5">
                <span className="text-6xl sm:text-7xl font-light text-brand/35 font-heading tracking-tight select-none">
                  {stage.num}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-steel font-ui border border-border shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                  {stage.status.split('·')[1] || stage.status}
                </span>
              </div>

              {/* Column 2: Narrative & Deliverables */}
              <div className="lg:col-span-4 space-y-3.5">
                <h3 className="text-2xl sm:text-[1.65rem] font-bold tracking-tight text-ink font-heading leading-snug">
                  {stage.title}
                </h3>
                
                <p className="text-base sm:text-[16.5px] leading-relaxed text-muted-foreground font-sans">
                  {stage.desc}
                </p>

                {/* Deliverables with checkmarks */}
                <div className="pt-2.5 space-y-2">
                  {stage.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] text-ink/85 font-medium font-sans">
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: The Execution Deliverable Card */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card/75 p-5 sm:p-6 transition-all duration-300 group-hover:border-brand/40 group-hover:bg-card group-hover:shadow-md group-hover:shadow-brand/5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand text-xs font-bold font-ui">→</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-steel font-ui">
                      {stage.executionTag}
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] sm:text-[14.5px] leading-relaxed text-ink font-medium font-sans">
                    {stage.executionDesc}
                  </p>
                </div>
              </div>

              {/* Column 4: Custom Architectural Visual with Living Micro-Animations */}
              <div className="lg:col-span-3">
                {stage.visualType === 'workflow' && <WorkflowVisual />}
                {stage.visualType === 'security' && <SecurityVisual />}
                {stage.visualType === 'hybrid' && <HybridVisual />}
                {stage.visualType === 'telemetry' && <TelemetryVisual />}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

// ════════ VISUAL 01: Dynamic Workflow Node Flow Animation ════════
function WorkflowVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 group-hover:border-brand/40 group-hover:shadow-md">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-1.5">
          <LiveSignalBeacon color="brand" size="sm" />
          <span className="text-[10px] font-mono text-brand-steel font-bold uppercase tracking-wider">
            Workflow Mapper
          </span>
        </div>
        <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
          <AnimatedCounter value={38} prefix="-" suffix="% Friction" />
        </span>
      </div>

      {/* Interactive Node Path */}
      <div className="mt-3.5 space-y-2.5 font-mono text-xs">
        <div className="flex items-center justify-between rounded-xl bg-card/60 px-3.5 py-2 border border-border">
          <span className="text-muted-foreground font-medium">EHR Intake</span>
          <span className="text-brand font-bold">
            <AnimatedCounter value={100} suffix="% Mapped" />
          </span>
        </div>
        
        {/* Animated Connecting Beam with Traveling Signal Packet */}
        <div className="relative flex items-center justify-center py-1">
          <div className="h-5 w-0.5 bg-gradient-to-b from-brand to-brand-steel" />
          <span className="absolute h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_#29A8E0] animate-bounce" />
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white px-3.5 py-2 border border-brand/35 shadow-xs">
          <span className="text-ink font-semibold">Payer Variance</span>
          <span className="text-rose-500 font-bold text-[11px] bg-rose-50 px-2 py-0.5 rounded">
            Bounded & Auto-Routed
          </span>
        </div>
      </div>
    </div>
  );
}

// ════════ VISUAL 02: HIPAA Security Enclave with Scanline Pulse ════════
function SecurityVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 group-hover:border-brand/40 group-hover:shadow-md">
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-2 text-brand-steel">
          <Lock className="h-4 w-4 text-brand animate-pulse" />
          <span className="text-[11px] font-bold font-ui uppercase tracking-wider">HIPAA VPC Enclave</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 font-ui border border-emerald-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Active Guard
        </span>
      </div>

      <div className="mt-3.5 space-y-2.5">
        <div className="relative overflow-hidden rounded-xl bg-card/60 p-3 border border-border">
          {/* Subtle Scanning Light Beam Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-75 animate-scan-packet" />
          <span className="text-[10px] font-mono text-muted-foreground block font-medium">
            SHA-256 Audit Hash:
          </span>
          <span className="text-[11px] font-mono font-bold text-ink truncate block mt-0.5 tracking-wider">
            e9a2b8...3f01c7 [IMMUTABLE]
          </span>
        </div>

        <div className="flex items-center justify-between text-xs font-ui pt-1">
          <span className="text-muted-foreground font-medium">Human Sign-Off Gate:</span>
          <span className="font-bold text-emerald-600 flex items-center gap-1.5 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <AnimatedCounter value={100} suffix="% Enforced" />
          </span>
        </div>
      </div>
    </div>
  );
}

// ════════ VISUAL 03: Dual-Hub Synchronous Bridge with Telemetry Ping ════════
function HybridVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 group-hover:border-brand/40 group-hover:shadow-md">
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-1.5">
          <Building2 className="h-4 w-4 text-brand-steel" />
          <span className="text-[11px] font-bold font-ui text-brand-steel uppercase tracking-wider">
            Dual-Hub Bridge
          </span>
        </div>
        <span className="text-[9px] font-mono text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full font-bold animate-pulse">
          24/7 Velocity
        </span>
      </div>

      <div className="mt-3.5 grid grid-cols-2 gap-2.5 text-center">
        <div className="rounded-xl border border-border bg-card/50 p-2.5 transition-all group-hover:border-brand/30">
          <div className="h-2 w-2 rounded-full bg-brand mx-auto mb-1 animate-ping" />
          <span className="text-xs font-bold text-ink block">Dallas HQ</span>
          <span className="text-[10px] text-muted-foreground font-ui">Strategy Leads</span>
        </div>
        <div className="rounded-xl border border-border bg-card/50 p-2.5 transition-all group-hover:border-brand/30">
          <div className="h-2 w-2 rounded-full bg-emerald-500 mx-auto mb-1 animate-ping" />
          <span className="text-xs font-bold text-ink block">Lahore Hub</span>
          <span className="text-[10px] text-brand-steel font-ui font-semibold">
            <AnimatedCounter value={100} suffix="+ Coders" />
          </span>
        </div>
      </div>

      <div className="mt-2 text-center">
        <span className="text-[9px] font-mono text-muted-foreground font-medium">
          ⇄ Real-Time Pipeline Latency:{' '}
          <AnimatedCounter value={18} prefix="<" suffix="ms" className="font-bold text-brand" />
        </span>
      </div>
    </div>
  );
}

// ════════ VISUAL 04: Live Production Telemetry with Animated Trend Line ════════
function TelemetryVisual() {
  const [inView, setInView] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className="relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 group-hover:border-brand/40 group-hover:shadow-md">
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-brand-steel animate-pulse" />
          <span className="text-[11px] font-bold font-ui uppercase tracking-wider text-ink">
            Live Telemetry
          </span>
        </div>
        <span className="text-[10px] font-bold text-brand font-ui">
          <AnimatedCounter value={99.4} decimals={1} suffix="% Accuracy" />
        </span>
      </div>

      <div className="mt-3.5 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[11px] text-muted-foreground font-ui">Denial Mitigation</span>
          <span className="font-bold text-emerald-600 text-xs font-mono">
            <AnimatedCounter value={22.4} decimals={1} prefix="-" suffix="% Margin Yield" />
          </span>
        </div>
        
        {/* Dynamic Self-Drawing Progress Bar */}
        <div className="relative h-2 w-full rounded-full bg-slate-100 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-brand to-brand-steel transition-all duration-1000 ease-out" 
            style={{ width: inView ? '94%' : '0%' }}
          />
        </div>

        <div className="flex items-center justify-between text-[10px] text-muted-foreground font-ui pt-1">
          <span>Reimbursement Velocity:</span>
          <span className="font-bold text-ink font-mono">
            <AnimatedCounter value={48} prefix="<" suffix="h Sync Enforced" />
          </span>
        </div>
      </div>
    </div>
  );
}
