"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { 
  ArrowRight, 
  ArrowUpRight,
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Building2, 
  Lock, 
  Workflow, 
  Stethoscope, 
  ExternalLink,
  Cpu,
  Layers,
  Sparkles,
  FileCheck2,
  ChevronRight
} from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { SelfDrawingSparkline } from '@/components/ui/self-drawing-sparkline';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';
import Link from 'next/link';

export default function ServicesPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Verified Corporate Positioning)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[600px] lg:min-h-[660px] bg-brand overflow-hidden flex items-center pt-24 pb-16">
        {/* Background Decorative Mesh & Angles */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          {/* Top Left Dotted Mesh */}
          <div 
            className="absolute -top-10 -left-10 w-[500px] h-[500px] opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px',
              maskImage: 'linear-gradient(135deg, black 10%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(135deg, black 10%, transparent 70%)'
            }}
          />

          {/* Bottom Right Dotted Mesh */}
          <div 
            className="absolute -bottom-10 right-20 w-[600px] h-[400px] opacity-[0.1]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
              backgroundSize: '20px 20px',
              maskImage: 'linear-gradient(to top left, black, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to top left, black, transparent 80%)'
            }}
          />

          {/* Diagonal Architectural Beams */}
          <div className="absolute -bottom-32 -right-10 w-[600px] h-[600px] opacity-20 rotate-[-35deg]">
             <div className="absolute bottom-10 right-0 w-full h-1 bg-white" />
             <div className="absolute bottom-20 right-0 w-[90%] h-1 bg-white" />
             <div className="absolute bottom-32 right-0 w-[80%] h-2 bg-white" />
             <div className="absolute bottom-44 right-0 w-[70%] h-1 bg-white/70" />
             <div className="absolute bottom-56 right-0 w-[50%] h-0.5 bg-white/50" />
          </div>

          {/* Precision Outline Circles */}
          <div className="absolute top-1/2 right-[10%] w-24 h-24 rounded-full border border-white/20 -translate-y-1/2" />
          <div className="absolute top-[40%] right-[5%] w-16 h-16 rounded-full border border-white/10" />
          <div className="absolute bottom-20 left-[15%] w-12 h-12 rounded-full border border-white/10" />
        </div>

        {/* Content Container */}
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="reveal max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 mb-5 backdrop-blur-md">
               <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white font-ui">
                 MYER SYSTEMS · CAPABILITIES & SERVICES
               </span>
            </div>
            
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] leading-[1.15] font-heading">
              AI Systems Built for Accountability, Scale, and Control.
            </h1>
            
            <p className="mt-5 text-[17px] leading-relaxed text-white/90 font-light max-w-2xl font-sans">
              Operating at the intersection of healthcare technology and enterprise AI, we help organizations transition from reactive operations to predictable, data-driven performance with clear scope, governed execution, and measurable outcomes.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white px-8 py-3.5 text-sm font-semibold text-brand transition-all hover:bg-white/90 shadow-lg font-ui"
              >
                <span>Initiate Strategic Engagement</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a 
                href="#delivery-standards" 
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 font-ui"
              >
                See Governed Delivery
              </a>
            </div>

            {/* Quick Strategic Anchors */}
            <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs text-white/80 font-sans">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-white" />
                Dallas US Legal Governance & BAA
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-white" />
                Lahore Core Engineering Hub
              </span>
              <span className="flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-white" />
                AAPC & AHIMA Certified Specialists
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. CORE VALUE COMMITMENTS (From Official Company Profile)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 lg:py-20 relative bg-secondary overflow-hidden border-b border-border/70">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="reveal text-center mb-10 lg:mb-14 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 mb-3 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-steel font-ui">
                  VALUE PROPOSITION · BUSINESS IMPACT
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] font-heading">
                Transition from reactive operations to predictable performance
              </h2>
              <p className="mt-3 text-base text-muted-foreground font-sans max-w-2xl mx-auto">
                Every Myer Systems discipline is engineered around six measurable operational standards from our official corporate charter.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {[
                 {
                   num: '01',
                   title: 'Automated Workload Reduction',
                   desc: 'Eliminating manual errors, administrative backlogs, and repetitive data entry through governed AI automation.'
                 },
                 {
                   num: '02',
                   title: 'Early Revenue Risk Detection',
                   desc: 'Predictive analytics that identify billing discrepancies and payer variances before claims are filed.'
                 },
                 {
                   num: '03',
                   title: 'Cash-Flow Visibility & Velocity',
                   desc: 'Real-time telemetry and automated follow-ups that compress payment cycle latency to sub-48h turnaround.'
                 },
                 {
                   num: '04',
                   title: 'Denial & Underpayment Defense',
                   desc: 'Certified AAPC/AHIMA clinical verification combined with pre-submission algorithmic scrubbers to protect yield.'
                 },
                 {
                   num: '05',
                   title: 'Enforced Compliance & Audit Readiness',
                   desc: 'Immutable SHA-256 event logs, role-based access control (RBAC), and deterministic guardrails that eliminate model drift.'
                 },
                 {
                   num: '06',
                   title: 'Scalable Hybrid Operations',
                   desc: '100+ vetted engineers and clinical coders in Lahore under direct Dallas US legal governance and BAA accountability.'
                 }
               ].map((item, i) => (
                 <div 
                   key={i} 
                   className="reveal-up p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:shadow-md hover:border-brand/30 transition-all duration-300 flex flex-col justify-between"
                   style={{ transitionDelay: `${i * 60}ms` }}
                 >
                   <div>
                     <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-3">
                       <span className="text-xs font-mono font-bold text-brand-steel">COMMITMENT {item.num}</span>
                       <span className="h-2 w-2 rounded-full bg-brand/40" />
                     </div>
                     <h3 className="text-[16.5px] font-bold text-ink mb-2 font-heading leading-snug">{item.title}</h3>
                     <p className="text-[13.5px] text-muted-foreground leading-relaxed font-sans">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. CORE SERVICES (Verified 6 Pillars from Company Profile)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-background">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            {/* Section Eyebrow & Title */}
            <div className="reveal text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 mb-4 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-steel font-ui">
                  THE SIX CORE DISCIPLINES
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] font-heading">
                Enterprise solutions engineered for measurable outcomes
              </h2>
              <p className="mt-3.5 text-base sm:text-lg text-muted-foreground font-sans">
                Every service runs on our strict standard: deterministic SLAs, certified human oversight, and US regulatory compliance.
              </p>
            </div>

            <div className="space-y-24 lg:space-y-32">
               
               {/* ────────────────────────────────────────────────────────
                   SERVICE 01: Enterprise-Grade AI Solutions
               ──────────────────────────────────────────────────────── */}
               <div id="ai-solutions" className="scroll-mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div className="reveal order-2 lg:order-1">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-steel mb-3 font-ui">
                     01 — Enterprise-Grade AI Solutions
                   </div>
                   <h3 className="text-3xl lg:text-4xl font-bold text-ink mb-5 font-heading leading-tight">
                     Advanced AI systems engineered for accountability, scale, and control.
                   </h3>
                   <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 font-sans">
                     Built for healthcare and commercial organizations where unverified black-box decisions, model drift, and hallucinatory outputs are unacceptable risks. Overseen by CTO Ali Hamza, our engineering team architects enterprise-grade AI systems featuring deterministic execution bounds, strict role-based access control (RBAC), and immutable audit logs that keep humans firmly in the loop.
                   </p>
                   <ul className="space-y-3 mb-7 font-sans text-sm sm:text-[15px]">
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Custom LLM & agent deployment with deterministic execution bounds</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Immutable SHA-256 event audit logging for regulatory verification</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Role-based access control (RBAC) & client-dedicated VPC isolation</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Enforced human-in-the-loop (HITL) review gates on critical outputs</span>
                     </li>
                   </ul>

                   <div className="p-4 rounded-xl bg-card border border-border mb-6">
                     <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block mb-1">Architecture Standard:</span>
                     <span className="text-xs sm:text-sm text-ink font-medium font-sans">
                       Deterministic Agent Pipelines · SHA-256 Immutability · VPC Enclaves · Zero Unaudited Black Boxes
                     </span>
                   </div>

                   <Link 
                     href="/contact" 
                     className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-steel transition-colors font-ui text-sm uppercase tracking-wider"
                   >
                     <span>Request AI Architecture Review</span>
                     <ArrowRight className="w-4 h-4"/>
                   </Link>
                 </div>

                 {/* Visual 01: AI Governance Enclave */}
                 <div className="reveal-up order-1 lg:order-2 rounded-3xl bg-[#060D14] border border-[#1A6FA8]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,168,224,0.15)_0,transparent_60%)]" />
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <LiveSignalBeacon color="brand" size="sm" />
                        <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                          AI Governance Gateway
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                        Deterministic SLA: Active
                      </span>
                    </div>

                    <div className="mt-6 space-y-4 relative z-10 font-mono">
                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <div className="flex items-center justify-between text-xs text-white/70">
                          <span>Deterministic Execution SLA</span>
                          <span className="text-[#29A8E0] font-bold">
                            <AnimatedCounter value={99.8} decimals={1} suffix="%" duration={1200} />
                          </span>
                        </div>
                        <div className="mt-2 text-[11px] text-white/50">
                          Bounded execution: Zero hallucination drift permitted
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <span className="text-[10px] uppercase text-white/60 block">Immutable Ledger Hash (SHA-256)</span>
                        <span className="text-xs text-emerald-300 font-bold block mt-1 truncate">
                          sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1f...
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 text-center">
                          <span className="text-[10px] text-white/60 block font-ui uppercase">Access Control</span>
                          <span className="text-sm font-bold text-white mt-1 block">RBAC & VPC</span>
                        </div>
                        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 text-center">
                          <span className="text-[10px] text-white/60 block font-ui uppercase">Human Sign-off</span>
                          <span className="text-sm font-bold text-[#29A8E0] mt-1 block">
                            <AnimatedCounter value={100} suffix="% Enforced" />
                          </span>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   SERVICE 02: Revenue Cycle Management (RCM)
               ──────────────────────────────────────────────────────── */}
               <div id="rcm" className="scroll-mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 {/* Visual 02: RCM Telemetry Dashboard */}
                 <div className="reveal-up rounded-3xl bg-[#060D14] border border-[#1A6FA8]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(41,168,224,0.12)_0,transparent_60%)]" />
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <LiveSignalBeacon color="emerald" size="sm" />
                        <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                          RCM Telemetry Engine
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                        99.4% Clean Claim
                      </span>
                    </div>

                    <div className="mt-6 space-y-4 relative z-10">
                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-white/70">Clean-Claim First Pass Resolution</span>
                          <div className="text-lg font-bold text-white font-mono">
                            <AnimatedCounter value={99.4} decimals={1} suffix="%" />
                          </div>
                        </div>
                        <div className="mt-3">
                          <SelfDrawingSparkline trend="up" width={240} height={32} color="#29A8E0" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5">
                          <span className="text-[10px] font-mono text-white/60 uppercase block">Denial Mitigation</span>
                          <div className="mt-1 text-base font-bold text-emerald-400 font-mono">
                            <AnimatedCounter value={22.4} decimals={1} prefix="+" suffix="% Yield" />
                          </div>
                          <span className="text-[10px] text-white/40 block mt-0.5">Pre-submission scrub</span>
                        </div>

                        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5">
                          <span className="text-[10px] font-mono text-white/60 uppercase block">Sync Velocity</span>
                          <div className="mt-1 text-base font-bold text-white font-mono">
                            <AnimatedCounter value={48} prefix="<" suffix="h Turnaround" />
                          </div>
                          <span className="text-[10px] text-white/40 block mt-0.5">Payer reimbursement</span>
                        </div>
                      </div>
                    </div>
                 </div>

                 <div className="reveal">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-steel mb-3 font-ui">
                     02 — Revenue Cycle Management (RCM)
                   </div>
                   <h3 className="text-3xl lg:text-4xl font-bold text-ink mb-5 font-heading leading-tight">
                     AI-powered revenue cycles engineered to eliminate claim denials and revenue leaks.
                   </h3>
                   <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 font-sans">
                     Manual revenue cycles compound errors at scale, leading to delayed reimbursements, underpayments, and avoidable payer denials. We build governed AI directly into hospital and healthcare provider revenue cycles—covering patient access, clinical coding validation, pre-submission claims scrubbing, denial management, and executive financial reporting.
                   </p>
                   <ul className="space-y-3 mb-7 font-sans text-sm sm:text-[15px]">
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Automated patient eligibility verification and pre-service authorization</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Pre-submission claim scrubber to detect payer rule variances before filing</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Predictive denial mitigation & automated appeals workflow routing</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Executive financial dashboards tracking AR aging days and cash velocity</span>
                     </li>
                   </ul>

                   <div className="p-4 rounded-xl bg-card border border-border mb-6">
                     <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block mb-1">Operational Benchmark:</span>
                     <span className="text-xs sm:text-sm text-ink font-medium font-sans">
                       99.4% Clean Claim First-Pass Rate · Up to 22.4% Margin Yield Recovery · Full Audit Readiness
                     </span>
                   </div>

                   <Link 
                     href="/contact" 
                     className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-steel transition-colors font-ui text-sm uppercase tracking-wider"
                   >
                     <span>Audit Your Revenue Cycle</span>
                     <ArrowRight className="w-4 h-4"/>
                   </Link>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   SERVICE 03: Medical Billing & Clinical Coding Services
               ──────────────────────────────────────────────────────── */}
               <div id="medical-billing" className="scroll-mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div className="reveal order-2 lg:order-1">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-steel mb-3 font-ui">
                     03 — Medical Billing & Clinical Coding Services
                   </div>
                   <h3 className="text-3xl lg:text-4xl font-bold text-ink mb-5 font-heading leading-tight">
                     Offshore medical billing and coding services under strict US governance.
                   </h3>
                   <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 font-sans">
                     Tailored for US-based healthcare organizations, hospitals, and physician groups requiring high-volume billing accuracy without prohibitive domestic overhead. Operating under US legal jurisdiction and strict Business Associate Agreements (BAAs), our dedicated teams in Lahore provide precision CPT-4, ICD-10-CM, and HCPCS coding paired with persistent accounts receivable follow-up.
                   </p>
                   <ul className="space-y-3 mb-7 font-sans text-sm sm:text-[15px]">
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>AAPC & AHIMA certified coding specialists for clinical precision</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Electronic claim submission (EDI 837) and remittance posting (ERA 835)</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Proactive accounts receivable (AR) aging recovery and payer dispute resolution</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Complete compliance with HIPAA Privacy & Security Rules under US BAA</span>
                     </li>
                   </ul>

                   <div className="p-4 rounded-xl bg-card border border-border mb-6">
                     <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block mb-1">Certification & Governance:</span>
                     <span className="text-xs sm:text-sm text-ink font-medium font-sans">
                       100% Certified Coding Supervisors · Dallas Legal Governance · Strict BAA Enclaves
                     </span>
                   </div>

                   <Link 
                     href="/contact" 
                     className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-steel transition-colors font-ui text-sm uppercase tracking-wider"
                   >
                     <span>Explore Medical Billing Pods</span>
                     <ArrowRight className="w-4 h-4"/>
                   </Link>
                 </div>

                 {/* Visual 03: Clinical Coding Terminal */}
                 <div className="reveal-up order-1 lg:order-2 rounded-3xl bg-[#060D14] border border-[#1A6FA8]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,168,224,0.1)_0,transparent_60%)]" />
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <LiveSignalBeacon color="brand" size="sm" />
                        <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                          AAPC / AHIMA Clinical Pods
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8FD6F5] bg-[#1A6FA8]/30 border border-[#29A8E0]/40 px-2.5 py-0.5 rounded-full font-bold">
                        Dallas BAA Bound
                      </span>
                    </div>

                    <div className="mt-6 space-y-4 relative z-10 font-mono">
                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <div className="flex items-center justify-between text-xs text-white/70">
                          <span>Clinical Coding Precision</span>
                          <span className="text-emerald-400 font-bold">
                            <AnimatedCounter value={99.4} decimals={1} suffix="%" />
                          </span>
                        </div>
                        <div className="mt-2 text-[11px] text-white/50">
                          Standard: CPT-4 · ICD-10-CM · HCPCS Level II
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <div className="flex items-center justify-between text-xs text-white/70">
                          <span>Batch Intake to Filing Velocity</span>
                          <span className="text-white font-bold">&lt;48 Hours</span>
                        </div>
                        <div className="mt-2 text-[11px] text-white/50">
                          EDI 837 claims transmitted daily with verified electronic remittance
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 text-center">
                          <span className="text-[10px] text-white/60 block font-ui uppercase">HIPAA Enclave</span>
                          <span className="text-xs font-bold text-emerald-300 mt-1 block">100% Bound</span>
                        </div>
                        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 text-center">
                          <span className="text-[10px] text-white/60 block font-ui uppercase">Delivery Model</span>
                          <span className="text-xs font-bold text-white mt-1 block">Dallas + Lahore</span>
                        </div>
                      </div>
                    </div>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   SERVICE 04: Business Process Reengineering
               ──────────────────────────────────────────────────────── */}
               <div id="reengineering" className="scroll-mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 {/* Visual 04: Workflow Mapping Console */}
                 <div className="reveal-up rounded-3xl bg-[#060D14] border border-[#1A6FA8]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(41,168,224,0.12)_0,transparent_60%)]" />
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <LiveSignalBeacon color="brand" size="sm" />
                        <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                          Process Reengineering Console
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                        -38% Friction
                      </span>
                    </div>

                    <div className="mt-6 space-y-4 relative z-10 font-mono">
                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <div className="flex items-center justify-between text-xs text-white/70">
                          <span>Operational Cycle Time Reduction</span>
                          <span className="text-[#29A8E0] font-bold">
                            <AnimatedCounter value={38} prefix="-" suffix="%" />
                          </span>
                        </div>
                        <div className="mt-3">
                          <SelfDrawingSparkline trend="down" width={240} height={32} color="#29A8E0" />
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <span className="text-[10px] text-white/60 block uppercase font-ui">Handoff Architecture</span>
                        <div className="mt-2 space-y-2 text-xs">
                          <div className="flex items-center justify-between text-white/80">
                            <span>Pre-Code Workflow Mapping:</span>
                            <span className="text-emerald-300 font-bold">100% Documented</span>
                          </div>
                          <div className="flex items-center justify-between text-white/80">
                            <span>Standardized SOP Gateways:</span>
                            <span className="text-[#29A8E0] font-bold">Enforced</span>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>

                 <div className="reveal">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-steel mb-3 font-ui">
                     04 — Business Process Reengineering
                   </div>
                   <h3 className="text-3xl lg:text-4xl font-bold text-ink mb-5 font-heading leading-tight">
                     Eliminating workflow friction and rebuilding smarter, predictable operations.
                   </h3>
                   <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 font-sans">
                     We never automate broken workflows. Our process reengineering methodology begins with comprehensive organizational workflow mapping—identifying manual bottlenecks, redundant handoffs, and operational leakage. We redesign leaner, more predictable operating processes before deploying intelligent automation.
                   </p>
                   <ul className="space-y-3 mb-7 font-sans text-sm sm:text-[15px]">
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>End-to-end organizational workflow mapping and bottleneck diagnosis</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Elimination of manual handoffs, data re-entry, and departmental silos</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Standardized operating procedures (SOPs) engineered for automation readiness</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Empirical baseline KPI benchmarking with quantifiable ROI metrics</span>
                     </li>
                   </ul>

                   <div className="p-4 rounded-xl bg-card border border-border mb-6">
                     <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block mb-1">Measured Impact:</span>
                     <span className="text-xs sm:text-sm text-ink font-medium font-sans">
                       Up to 38% Reduction in Operational Friction · Zero Undocumented Steps · Standardized SOPs
                     </span>
                   </div>

                   <Link 
                     href="/contact" 
                     className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-steel transition-colors font-ui text-sm uppercase tracking-wider"
                   >
                     <span>Schedule Workflow Mapping</span>
                     <ArrowRight className="w-4 h-4"/>
                   </Link>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   SERVICE 05: Intelligent Resource Augmentation
               ──────────────────────────────────────────────────────── */}
               <div id="resource-augmentation" className="scroll-mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 <div className="reveal order-2 lg:order-1">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-steel mb-3 font-ui">
                     05 — Intelligent Resource Augmentation
                   </div>
                   <h3 className="text-3xl lg:text-4xl font-bold text-ink mb-5 font-heading leading-tight">
                     Combining AI agents with skilled human expertise under Dallas leadership.
                   </h3>
                   <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 font-sans">
                     Scaling technical or operational teams domestically often introduces unsustainable overhead, domestic hiring lag, and talent shortages. Myer Systems pairs autonomous AI agents with skilled, vetted offshore professionals—software engineers, AIML practitioners, and operational specialists—working out of our Lahore hub under direct Dallas executive leadership.
                   </p>
                   <ul className="space-y-3 mb-7 font-sans text-sm sm:text-[15px]">
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Hybrid delivery pods pairing specialized AI agents with vetted offshore engineers</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Direct Dallas contractual oversight, client governance, and single-point accountability</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Transparent daily sprint telemetry, time tracking, and SLA-governed milestone delivery</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Rapid elastic scaling up or down with zero domestic recruitment overhead</span>
                     </li>
                   </ul>

                   <div className="p-4 rounded-xl bg-card border border-border mb-6">
                     <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block mb-1">Delivery Scale:</span>
                     <span className="text-xs sm:text-sm text-ink font-medium font-sans">
                       100+ Specialists in Lahore Hub · 250% Growth (2025–2026) · Direct US Executive Governance
                     </span>
                   </div>

                   <Link 
                     href="/contact" 
                     className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-steel transition-colors font-ui text-sm uppercase tracking-wider"
                   >
                     <span>Build Your Augmentation Pod</span>
                     <ArrowRight className="w-4 h-4"/>
                   </Link>
                 </div>

                 {/* Visual 05: Dual-Hub Augmentation Visual */}
                 <div className="reveal-up order-1 lg:order-2 rounded-3xl bg-[#060D14] border border-[#1A6FA8]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(41,168,224,0.12)_0,transparent_60%)]" />
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-[#8FD6F5]" />
                        <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                          Dual-Hub Execution Bridge
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                        24/7 Active
                      </span>
                    </div>

                    <div className="mt-6 space-y-4 relative z-10 font-mono">
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#29A8E0] mx-auto mb-2 animate-ping" />
                          <span className="text-xs font-bold text-white block">Dallas, TX</span>
                          <span className="text-[11px] text-white/50 block mt-0.5">Strategy & Governance</span>
                        </div>
                        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 mx-auto mb-2 animate-ping" />
                          <span className="text-xs font-bold text-white block">Lahore Hub</span>
                          <span className="text-[11px] text-emerald-300 font-bold block mt-0.5">
                            <AnimatedCounter value={100} suffix="+ Specialists" />
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <div className="flex items-center justify-between text-xs text-white/70">
                          <span>Operational Output Multiplier</span>
                          <span className="text-[#29A8E0] font-bold">
                            <AnimatedCounter value={3.4} decimals={1} suffix="x Multiplier" />
                          </span>
                        </div>
                        <div className="mt-3">
                          <SelfDrawingSparkline trend="surge" width={240} height={32} color="#29A8E0" />
                        </div>
                      </div>
                    </div>
                 </div>
               </div>

               {/* ────────────────────────────────────────────────────────
                   SERVICE 06: Industry SaaS Solutions & MedSynthea
               ──────────────────────────────────────────────────────── */}
               <div id="saas" className="scroll-mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                 {/* Visual 06: MedSynthea Flagship Platform Console */}
                 <div className="reveal-up rounded-3xl bg-[#060D14] border border-[#1A6FA8]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,168,224,0.15)_0,transparent_60%)]" />
                    
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                      <div className="flex items-center gap-2">
                        <LiveSignalBeacon color="brand" size="sm" />
                        <span className="text-xs font-mono text-white font-bold uppercase tracking-wider">
                          MedSynthea OS · Flagship Platform
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-bold">
                        Production Live
                      </span>
                    </div>

                    <div className="mt-6 space-y-4 relative z-10 font-mono">
                      <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                        <span className="text-[10px] text-white/60 block uppercase font-ui">Platform Anchor</span>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-sm font-bold text-white">medsynthea.com</span>
                          <span className="text-[10px] text-[#29A8E0] border border-[#29A8E0]/30 px-2 py-0.5 rounded">Healthcare AI</span>
                        </div>
                        <p className="mt-2 text-[11px] text-white/60 font-sans">
                          Developed by Myer Systems to synthesize multi-source medical data and streamline provider workflows.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5">
                          <span className="text-[10px] text-white/60 block uppercase font-ui">Operations Lead</span>
                          <span className="text-xs font-bold text-white block mt-1">Vaneeza Fatima</span>
                          <span className="text-[10px] text-white/40 block mt-0.5">Operations Manager</span>
                        </div>

                        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5">
                          <span className="text-[10px] text-white/60 block uppercase font-ui">Architecture</span>
                          <span className="text-xs font-bold text-emerald-300 block mt-1">Multi-Tenant VPC</span>
                          <span className="text-[10px] text-white/40 block mt-0.5">100% HIPAA Isolated</span>
                        </div>
                      </div>
                    </div>
                 </div>

                 <div className="reveal">
                   <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-steel mb-3 font-ui">
                     06 — Industry SaaS Solutions
                   </div>
                   <h3 className="text-3xl lg:text-4xl font-bold text-ink mb-5 font-heading leading-tight">
                     Scalable, vertically-focused platforms anchored by MedSynthea Healthcare AI.
                   </h3>
                   <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 font-sans">
                     We engineer scalable, vertically-focused software-as-a-service products built for the rigorous demands of healthcare and commercial markets. Anchored by our flagship healthcare AI platform, <strong className="text-ink font-semibold">MedSynthea</strong> (<a href="https://medsynthea.com" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-brand-steel">medsynthea.com</a>), we synthesize multi-source medical data and streamline both clinical and administrative workflows for healthcare providers—with operations led by Vaneeza Fatima.
                   </p>
                   <ul className="space-y-3 mb-7 font-sans text-sm sm:text-[15px]">
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>MedSynthea Platform: Clinical data synthesis and administrative workflow orchestration</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Multi-tenant cloud architecture with strict customer-level tenant isolation</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Seamless enterprise & EHR integration via HL7, FHIR, REST, and secure webhooks</span>
                     </li>
                     <li className="flex items-start gap-3 text-ink font-medium">
                       <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                       <span>Enterprise-grade security with end-to-end encryption and 99.9% uptime SLAs</span>
                     </li>
                   </ul>

                   <div className="p-4 rounded-xl bg-card border border-border mb-6">
                     <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block mb-1">Flagship Deployment:</span>
                     <span className="text-xs sm:text-sm text-ink font-medium font-sans">
                       MedSynthea (medsynthea.com) · Operations Led by Vaneeza Fatima · Live Healthcare AI
                     </span>
                   </div>

                   <div className="flex flex-wrap items-center gap-4">
                     <Link 
                       href="/contact" 
                       className="inline-flex items-center gap-2 text-brand font-semibold hover:text-brand-steel transition-colors font-ui text-sm uppercase tracking-wider"
                     >
                       <span>Explore SaaS Partnership</span>
                       <ArrowRight className="w-4 h-4"/>
                     </Link>
                     <a 
                       href="https://medsynthea.com" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-ink font-medium text-xs font-ui uppercase tracking-wider transition-colors"
                     >
                       <span>Visit MedSynthea</span>
                       <ExternalLink className="w-3.5 h-3.5" />
                     </a>
                   </div>
                 </div>
               </div>

            </div>
         </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. ENGAGEMENT MODELS (Clear, Transparent Contracting)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-secondary border-t border-border">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 mb-4 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-steel font-ui">
                  ENGAGEMENT MODELS
                </span>
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl font-heading">
                Three structured ways to partner with us
              </h2>
              <p className="mt-3 text-base text-muted-foreground font-sans">
                Every model is backed by US legal governance, transparent milestones, and dedicated delivery teams.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               
               {/* Model 01 */}
               <div className="reveal-up p-8 rounded-3xl border border-border bg-card flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block mb-2">
                      Model 01
                    </span>
                    <h3 className="text-xl font-bold text-ink mb-3 font-heading">Project-Based Delivery</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-sans">
                      A defined scope, fixed milestone timeline, and dedicated delivery team that owns execution from workflow audit to final deployment.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border mt-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block">Best For:</span>
                    <p className="text-sm text-ink font-medium mt-1 font-sans">
                      Specific workflow reengineering, custom AI model deployment, or SaaS platform development.
                    </p>
                  </div>
               </div>
               
               {/* Model 02 */}
               <div className="reveal-up p-8 rounded-3xl border border-brand/30 bg-card relative overflow-hidden shadow-lg shadow-brand/5 flex flex-col justify-between" style={{ transitionDelay: '100ms' }}>
                  <div className="absolute top-0 right-0 p-4">
                    <span className="px-3 py-1 bg-brand text-white text-[10px] font-bold uppercase tracking-wider rounded-full font-ui">
                      Most Scalable
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block mb-2">
                      Model 02
                    </span>
                    <h3 className="text-xl font-bold text-ink mb-3 font-heading">Embedded Hybrid Pods</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-sans">
                      Dedicated offshore engineering, AI agents, or certified medical billing specialists integrated directly into your daily operations.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border mt-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block">Best For:</span>
                    <p className="text-sm text-ink font-medium mt-1 font-sans">
                      Long-term resource augmentation, ongoing RCM operations, and continuous platform engineering.
                    </p>
                  </div>
               </div>

               {/* Model 03 */}
               <div className="reveal-up p-8 rounded-3xl border border-border bg-card flex flex-col justify-between" style={{ transitionDelay: '200ms' }}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block mb-2">
                      Model 03
                    </span>
                    <h3 className="text-xl font-bold text-ink mb-3 font-heading">Operational Readiness Audit</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-sans">
                      A focused strategic engagement to map existing workflows, identify revenue leaks, and provide a scoped technical roadmap before committing capital.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-border mt-auto">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-steel font-ui block">Best For:</span>
                    <p className="text-sm text-ink font-medium mt-1 font-sans">
                      Organizations evaluating AI readiness, revenue cycle overhaul, or workflow bottleneck remediation.
                    </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. GOVERNED DELIVERY STANDARDS (Streamlined Process Overview)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="delivery-standards" className="scroll-mt-24 py-16 lg:py-24 bg-background border-t border-border/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-card px-4 py-1.5 mb-3 shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-steel font-ui">
                  DELIVERY METHODOLOGY · 4-STAGE GOVERNANCE
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] font-heading leading-tight">
                Governance is built into how we work, not added afterward.
              </h2>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground font-sans">
                Every client engagement transitions through four rigorous quality gates under direct Dallas executive leadership.
              </p>
            </div>

            <Link
              href="/how-we-operate"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs sm:text-sm font-bold text-ink transition-all hover:border-brand/40 hover:text-brand-steel font-ui shadow-xs shrink-0"
            >
              <span>Explore Full Operating Model</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* 4-Stage Horizontal Pipeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stage: '01',
                title: 'Discover & Map Friction',
                desc: 'Pre-code workflow mapping and data ingestion audits to identify bottlenecks and establish baseline KPIs before development starts.',
                tag: 'Pre-Code Audit'
              },
              {
                stage: '02',
                title: 'Architect Guardrails',
                desc: 'Dedicated VPC enclaves, role-based access control (RBAC), and immutable SHA-256 audit logging with human sign-off gates.',
                tag: 'HIPAA Boundaries'
              },
              {
                stage: '03',
                title: 'Hybrid Pod Deployment',
                desc: 'Autonomous AI agents deployed alongside 100+ vetted engineers and AAPC/AHIMA certified coders in Lahore under Dallas SLAs.',
                tag: 'Dual-Hub Velocity'
              },
              {
                stage: '04',
                title: 'Scale & Live Telemetry',
                desc: 'Continuous real-time monitoring of accuracy SLAs, cash-flow velocity, and denial mitigation without domestic hiring overhead.',
                tag: 'Production Telemetry'
              }
            ].map((step, i) => (
              <div 
                key={i} 
                className="reveal-up p-7 rounded-3xl bg-card border border-border/80 shadow-xs hover:shadow-md hover:border-brand/40 transition-all duration-300 flex flex-col justify-between group"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
                    <span className="text-4xl font-light text-brand/35 font-heading select-none group-hover:text-brand transition-colors">
                      {step.stage}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-brand/10 text-brand-steel text-[10px] font-bold uppercase font-ui tracking-wider">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2.5 font-heading leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-muted-foreground leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Governance Guarantee Strip */}
          <div className="mt-10 rounded-2xl border border-brand/20 bg-brand/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-ink font-ui">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-brand" />
                Dallas US Legal BAA Standard
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="h-4 w-4 text-brand" />
                SHA-256 Audit Trail Immutability
              </span>
              <span className="flex items-center gap-1.5">
                <Activity className="h-4 w-4 text-brand" />
                Deterministic SLAs & Bounded Execution
              </span>
            </div>
            <Link
              href="/how-we-operate"
              className="text-xs font-bold text-brand hover:text-brand-steel inline-flex items-center gap-1 font-ui uppercase tracking-wider shrink-0"
            >
              <span>Learn More</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. FINAL STRATEGIC CTA BANNER
      ══════════════════════════════════════════════════════════════════ */}
      <CtaBanner />
      
      <Footer />
    </div>
  );
}
