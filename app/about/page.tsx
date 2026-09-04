"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { Linkedin, MapPin, Globe2, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ─── 1. HERO ──────────────────────────────────────────── */}
      <main className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_60%_-10%,rgba(41,168,224,0.08),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-brand block" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                About Myer Systems · Founded 2025
              </span>
            </div>
            <h1 className="reveal text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] leading-[1.08] mb-6">
              AI systems built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
                accountability, scale, and control.
              </span>
            </h1>
            <p className="reveal-up text-base text-muted-foreground leading-relaxed max-w-3xl font-medium border-l-4 border-brand/20 pl-5">
              Headquartered in Dallas with our core delivery hub in Lahore, Pakistan, Myer Systems collaborates with healthcare and commercial enterprises across North America to deliver offshore resource augmentation, medical billing services, and enterprise AI engineering — with organized systems, trained experts, and transparent accountability.
            </p>
          </div>
        </div>
      </main>

      {/* ─── 2. OUR STORY — Premium Bento Grid ───────────────── */}
      <section className="pb-24 lg:pb-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal flex items-center gap-4 mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Our Story</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
            {/* Big statement card */}
            <div className="reveal md:col-span-7 bg-[#05030A] rounded-[2rem] p-10 lg:p-12 flex flex-col justify-between min-h-[280px]">
              <p className="text-2xl lg:text-3xl font-medium text-white leading-[1.4]">
                Most enterprise AI adoption fails not because technology lacks capability, but because systems lack{' '}
                <span className="text-brand">structure, compliance, and transparent accountability</span>.
              </p>
              <div className="mt-8 h-px w-16 bg-brand/40" />
            </div>

            {/* Context card */}
            <div className="reveal-up md:col-span-5 bg-secondary rounded-[2rem] p-10 lg:p-12 border border-black/5 min-h-[280px] flex flex-col justify-between">
              <p className="text-[15px] text-muted-foreground leading-relaxed font-medium">
                In regulated, high-stakes environments like healthcare revenue cycles and clinical data, unverified black-box decisions create costly revenue leakage, billing friction, and compliance exposure.
              </p>
              <div className="mt-6 flex items-center gap-2 text-brand text-[13px] font-bold uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-brand block" />
                Since Day One · 2025
              </div>
            </div>

            {/* What we built */}
            <div className="reveal-up md:col-span-5 bg-white rounded-[2rem] p-10 lg:p-12 border border-brand/20 shadow-[0_4px_24px_rgba(41,168,224,0.08)] min-h-[220px] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand mb-3 block">What We Deliver</span>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Vertically-focused Industry SaaS, enterprise AI solutions, end-to-end Revenue Cycle Management (RCM), business process reengineering, resource augmentation, and specialized US medical billing services.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/50 text-[12px] font-semibold text-brand">
                6 Verified Core Capability Pillars
              </div>
            </div>

            {/* Who we are */}
            <div className="reveal-up md:col-span-7 bg-secondary rounded-[2rem] p-10 lg:p-12 border border-black/5 min-h-[220px] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand mb-3 block">Distributed Delivery Model</span>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Operating an onshore-offshore model with registered headquarters in Dallas, Texas and a core engineering hub in Lahore, Pakistan — achieving 250% operational growth from 2025 to 2026 serving North American and international clients.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/50 flex items-center gap-6 text-[12px] font-semibold text-muted-foreground">
                <span>Dallas HQ: US Jurisdiction & Governance</span>
                <span>•</span>
                <span>Lahore Hub: 24/7 Global Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MISSION STATEMENT ─────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-secondary border-y border-border/50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div className="reveal flex items-center justify-center gap-6 mb-12">
            <div className="h-px bg-border flex-1 max-w-[80px]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Our Mission</span>
            <div className="h-px bg-border flex-1 max-w-[80px]" />
          </div>
          <p className="reveal text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.25] text-ink tracking-tight">
            To empower healthcare and commercial enterprises to transition from reactive operations to{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand">predictable, data-driven performance</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-brand/10 rounded-sm -z-0" />
            </span>
            {' '}— delivering accountable AI systems, eliminating workflow friction, and scaling operations with complete governance.
          </p>
        </div>
      </section>

      {/* ─── 4. LEADERSHIP ────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal flex items-center gap-4 mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Leadership Team</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end mb-16">
            <div className="lg:col-span-6">
              <h2 className="reveal text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.1]">
                Led with accountability and engineering precision
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="reveal-up text-base sm:text-lg text-muted-foreground leading-relaxed border-l-4 border-brand/20 pl-6">
                Founded by experienced engineering leadership, Myer Systems unites enterprise strategy, AI systems architecture, and clinical operations under one uncompromising standard: structure over shortcuts.
              </p>
            </div>
          </div>

          {/* 3 Executive Leaders from Company Profile */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              {
                role: 'Founder & Chairman',
                name: 'Yassir Humayun (Raja Yasir)',
                abbr: 'YH',
                credential: 'BSc Computer Engineering · University of Florida',
                desc: 'Experienced Founding Board Member and entrepreneur with a demonstrated history in business innovation, leadership, and strategic planning. Founded Myer Systems with the vision to deliver accountable, scalable AI systems for healthcare and commercial markets.',
              },
              {
                role: 'Chief Executive Officer',
                name: 'Osman Akram',
                abbr: 'OA',
                credential: 'Executive Leadership & Operations',
                desc: 'Leads day-to-day operations, business development, and organizational execution at Myer Systems. Responsible for driving growth strategy, building key client partnerships, and delivering on the mission set by the Founder and Chairman.',
              },
              {
                role: 'Chief Technology Officer',
                name: 'Ali Hamza',
                abbr: 'AH',
                credential: 'AI Architecture & Engineering',
                desc: 'Drives the technical architecture and AI development strategy at Myer Systems. Oversees engineering, AI systems development, and product innovation — ensuring technology remains enterprise-ready, secure, and scalable.',
              },
            ].map((person, i) => (
              <div 
                key={i} 
                className="reveal-up group relative overflow-hidden rounded-[2.5rem] bg-secondary border border-black/5 hover:border-brand/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(41,168,224,0.1)] hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 bg-gradient-to-br from-brand/5 via-brand/10 to-transparent overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(41,168,224,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(41,168,224,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-brand/10 border-2 border-brand/30 flex items-center justify-center shadow-xs">
                        <span className="text-xl font-bold text-brand tracking-wider">{person.abbr}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <a 
                        href="https://www.linkedin.com/company/myer-systems/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-ink hover:text-brand hover:scale-110 transition-all shadow-sm"
                        aria-label={`${person.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-7">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-brand mb-2">{person.role}</span>
                    <h3 className="text-xl font-bold text-ink mb-1">{person.name}</h3>
                    <p className="text-[12px] font-semibold text-brand/80 mb-3">{person.credential}</p>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{person.desc}</p>
                  </div>
                </div>

                <div className="px-7 pb-6 pt-2 border-t border-border/40 text-[11px] font-bold uppercase tracking-wider text-muted-foreground flex items-center justify-between">
                  <span>Myer Systems Leadership</span>
                  <span className="text-brand">Verified</span>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Leadership Strip */}
          <div className="reveal-up mt-12 rounded-2xl bg-secondary/60 border border-black/5 p-6 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand block mb-1">
                  Key Operations & Technical Leads
                </span>
                <p className="text-sm text-ink font-medium">
                  Supporting day-to-day delivery, platform operations, and engineering excellence across our hubs.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-ink">
                <div className="rounded-full bg-white px-4 py-2 border border-border/80 shadow-2xs">
                  <span className="text-muted-foreground">Business & Operations:</span> <strong className="text-ink font-bold">Tasbhia Akbar</strong>
                </div>
                <div className="rounded-full bg-white px-4 py-2 border border-border/80 shadow-2xs">
                  <span className="text-muted-foreground">MedSynthea Operations:</span> <strong className="text-ink font-bold">Vaneeza Fatima</strong>
                </div>
                <div className="rounded-full bg-white px-4 py-2 border border-border/80 shadow-2xs">
                  <span className="text-muted-foreground">AIML & DevOps Engineering:</span> <strong className="text-ink font-bold">Hasnain Muavia</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. GLOBAL REACH ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-secondary border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal flex items-center gap-4 mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Global Operations</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="reveal">
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.1] mb-6">
                Built for US operations, delivered with a global engineering hub
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Myer Systems operates a distributed offshore-onshore delivery model. Business registration, executive governance, and client-facing advisory operate from Dallas, Texas, while core engineering, RCM processing, and AI development operate from our hub in Lahore, Pakistan.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-brand">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Dallas HQ Legal Jurisdiction
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> 24/7 Global Delivery Hub
                </span>
              </div>
            </div>

            <div className="reveal-up space-y-4">
              {[
                { 
                  Icon: MapPin, 
                  title: 'United States · Dallas, Texas', 
                  subtitle: 'Headquarters & Governance',
                  desc: 'Executive leadership, strategic advisory, client operations, US legal jurisdiction, and North American commercial contracts.' 
                },
                { 
                  Icon: Globe2, 
                  title: 'Pakistan · Lahore, Punjab', 
                  subtitle: 'Core Engineering & Delivery Hub',
                  desc: 'Specialized AI engineering, medical billing and coding operations, machine learning workflows, and scalable talent delivery.', 
                  offset: true 
                }
              ].map(({ Icon, title, subtitle, desc, offset }, i) => (
                <div key={i} className={`flex items-start gap-6 p-8 bg-white rounded-[1.5rem] border border-black/5 shadow-xs hover:shadow-md hover:border-brand/30 transition-all duration-300 group ${offset ? 'ml-0 lg:ml-10' : ''}`}>
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-brand mb-1">{subtitle}</span>
                    <h4 className="text-xl font-bold text-ink mb-1">{title}</h4>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. VALUES & PROPOSITION — Flowing list ───────────── */}
      <section className="py-24 lg:py-32 bg-background border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal flex items-center gap-4 mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Core Value Proposition</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="reveal text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.1] lg:sticky lg:top-32">
                The principles that govern our work
              </h2>
              <p className="reveal-up mt-4 text-muted-foreground text-sm leading-relaxed lg:sticky lg:top-72">
                Helping organizations transition from reactive operations to predictable, data-driven performance with zero black-box risk.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6 divide-y divide-border/60">
              {[
                { 
                  title: 'Structure over promises', 
                  desc: 'Strong operations are built on procedure, not marketing language. Every engagement starts with clinical and operational workflow discovery, pinpointing revenue cycle leakage and defining measurable SLA targets before writing code.' 
                },
                { 
                  title: 'Accountability & transparent ownership', 
                  desc: 'Every system we deploy has a defined human owner and transparent audit trail. We do not deploy unaudited black-box decision tools — accountability is engineered in from day one.' 
                },
                { 
                  title: 'Predictable performance & error reduction', 
                  desc: 'Reducing errors, manual workload, and payment cycle friction through automated AI validation, predictive analytics, and proactive revenue risk identification.' 
                },
                { 
                  title: 'Hybrid scale (AI agents + expert specialists)', 
                  desc: 'Combining intelligent AI systems with certified domain experts so healthcare and commercial organizations can scale capacity without sacrificing quality, compliance, or clinical accuracy.' 
                },
              ].map((value, i) => (
                <div key={i} className="reveal-up py-10 grid grid-cols-[56px_1fr] gap-6 group hover:pl-1 transition-all duration-300">
                  <span className="text-5xl font-bold text-ink/[0.07] group-hover:text-brand/25 transition-colors duration-500 leading-none pt-1 select-none tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-brand transition-colors duration-300">{value.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. FINAL CTA ─────────────────────────────────────── */}
      <CtaBanner />
      <Footer />
    </div>
  );
}
