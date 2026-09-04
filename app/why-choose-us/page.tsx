"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { Testimonials } from '@/components/site/testimonials';
import { ArrowRight, ChevronDown, CheckCircle2, XCircle, ShieldCheck, Activity, Search, LayoutTemplate, Shield, Settings2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function WhyChooseUsPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* 1. HERO */}
      <main className="pt-28 pb-12 lg:pt-36 lg:pb-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_60%_-10%,rgba(91,69,255,0.05),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="reveal lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 mb-6">
                 <span className="h-1.5 w-1.5 rounded-full bg-brand block" />
                 <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                   Why Choose Us
                 </span>
              </div>
              <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-[4.5rem] leading-[1.05]">
                Control is never optional. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">That's the actual difference.</span>
              </h1>
            </div>
            <div className="reveal-up lg:col-span-5 lg:pb-4">
              <div className="pl-6 border-l-[3px] border-brand/20">
                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  Most AI vendors sell you speed. We build for the moment something goes wrong and you need to know exactly why, who was accountable, and how to fix it — before that moment happens, not after.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-hover shadow-lg shadow-brand/20">
                    Talk to Our Team
                  </a>
                  <a href="/how-we-operate" className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-secondary">
                    See How We Operate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 2. THE 6 DIFFERENTIATORS */}
      <section className="py-24 lg:py-32 bg-secondary relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="reveal text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand mb-4">Core Philosophy</h2>
            <h3 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Six reasons enterprise teams trust our architecture.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Governed by design',
                short: 'Compliance, auditability, and human accountability are engineered into every system we ship.',
                practice: 'Every AI decision point has a defined human owner before a single line of code is written — not added as a patch after something breaks.',
                icon: <ShieldCheck className="w-5 h-5 text-brand" />
              },
              {
                title: 'Healthcare-grade rigor',
                short: 'Our RCM roots mean we build for regulated, high-stakes environments where accuracy is non-negotiable.',
                practice: 'When automating claims processing, our systems don\'t just output a decision; they log the exact regulatory guideline referenced to approve or deny the claim.',
                icon: <Activity className="w-5 h-5 text-brand" />
              },
              {
                title: 'Built around your operations',
                short: 'We design systems for your workflows and data, never a one-size-fits-all template.',
                practice: 'Discovery happens before design — we map exactly how your team actually works before proposing any technical architecture.',
                icon: <Search className="w-5 h-5 text-brand" />
              },
              {
                title: 'Scale without overhead',
                short: 'AI agents and vetted professionals expand your capacity without a full internal build-out.',
                practice: 'A mid-sized billing team can handle 3x their normal claim volume without a single new headcount, simply by routing manual validation to our governed agents.',
                icon: <LayoutTemplate className="w-5 h-5 text-brand" />
              },
              {
                title: 'Accountable AI',
                short: 'Clear ownership and guardrails keep automated decisions transparent and controllable.',
                practice: 'Every system logs its decisions in a way that can be reviewed completely after the fact. See our Governance Framework on the How We Operate page.',
                icon: <Shield className="w-5 h-5 text-brand" />
              },
              {
                title: 'Partnership, not handoff',
                short: 'We stay embedded through deployment and monitoring as your operations grow.',
                practice: 'We conduct quarterly business reviews (QBRs) and provide a dedicated slack channel for your operating team, ensuring the system evolves alongside you.',
                icon: <Settings2 className="w-5 h-5 text-brand" />
              }
            ].map((diff, i) => (
              <div key={i} className="reveal-up relative overflow-hidden rounded-3xl bg-white border border-brand/20 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(91,69,255,0.08)] hover:border-brand/40 transition-all duration-500 hover:-translate-y-1 group flex flex-col h-full">
                
                {/* Large Background Number */}
                <div className="absolute -bottom-4 -right-4 text-[120px] font-bold text-ink/[0.03] group-hover:text-brand/[0.05] transition-colors duration-500 pointer-events-none select-none leading-none">
                  0{i + 1}
                </div>
                
                <div className="p-8 pb-6 flex-1 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {diff.icon}
                  </div>
                  <h4 className="text-xl font-bold text-ink mb-3 group-hover:text-brand transition-colors">{diff.title}</h4>
                  <p className="text-[15px] font-medium text-ink/80 leading-relaxed">
                    {diff.short}
                  </p>
                </div>
                
                {/* In Practice footer block */}
                <div className="p-6 bg-brand/5 border-t border-brand/10 mt-auto relative z-10">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-brand mb-2">In Practice</span>
                  <p className="text-[13.5px] text-brand/80 font-medium leading-relaxed italic">
                    "{diff.practice}"
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHO WE'RE THE RIGHT FIT FOR */}
      <section className="pt-16 lg:pt-24 pb-8 lg:pb-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand mb-4">Fit Matters</h2>
            <h3 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Who we work best with — and who we're not the right choice for
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Right Fit */}
            <div className="reveal-up p-8 lg:p-12 rounded-3xl bg-[#05030A] border border-brand/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle2 className="w-32 h-32 text-emerald-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                A strong fit if you:
              </h4>
              <ul className="space-y-6 relative z-10">
                {[
                  'Operate in a regulated or high-stakes environment where "it mostly works" isn\'t good enough.',
                  'Need AI adoption that your compliance, legal, and leadership teams can actually stand behind.',
                  'Want a long-term operating partner to scale with, not a one-off build-and-leave project.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <p className="text-white/80 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="reveal-up p-8 lg:p-12 rounded-3xl bg-secondary/50 border border-border shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                <XCircle className="w-32 h-32 text-ink" />
              </div>
              <h4 className="text-2xl font-bold text-ink mb-8 relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-muted-foreground" />
                </div>
                Probably not the right fit if you:
              </h4>
              <ul className="space-y-6 relative z-10">
                {[
                  'Need an unmanaged, black-box AI tool deployed in a week without caring about audit trails or governance.',
                  'Are looking for the lowest-cost, disposable automation script rather than enterprise-grade architecture.',
                  'Want to build technology for technology\'s sake, without tying it to measurable operational KPIs.'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE GOVERNED WAY VS COMMON ALTERNATIVE */}
      <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          
          <div className="reveal text-center mb-10">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand mb-4">The Real Difference</h2>
            <h3 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              What "unmanaged AI adoption" usually costs you
            </h3>
          </div>

          <div className="space-y-3">
            {[
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>,
                bad: 'AI bolted onto existing chaos', 
                good: 'Workflow mapped and redesigned before AI is introduced' 
              },
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>,
                bad: '"Black box" automation, hard to explain to auditors', 
                good: 'Every decision point has a documented, human-owned checkpoint' 
              },
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                bad: 'Impressive demo, stalls before production', 
                good: 'Success metrics defined before build, not after launch' 
              },
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M1 6s1-1 4-1 5 2 8 2 4-1 4-1V2s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M1 12s1-1 4-1 5 2 8 2 4-1 4-1"/><path d="M1 18s1-1 4-1 5 2 8 2 4-1 4-1"/></svg>,
                bad: 'Scaling a team means losing visibility', 
                good: 'Embedded delivery, oversight stays with you throughout' 
              },
              { 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                bad: 'Compliance considered after launch', 
                good: 'Compliance-first, audit-ready by design from day one' 
              }
            ].map((row, i) => (
              <div key={i} className="reveal-up grid md:grid-cols-2 rounded-[2rem] overflow-hidden border border-black/5 shadow-sm group bg-secondary">
                {/* The Bad Side */}
                <div className="p-5 lg:p-6 flex items-start gap-4">
                  <div className="mt-0.5 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0 text-muted-foreground/50">
                    {row.icon}
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">The Common Alternative</span>
                    <p className="text-[14px] font-medium text-ink/50 leading-relaxed">{row.bad}</p>
                  </div>
                </div>
                
                {/* The Good Side */}
                <div className="bg-white p-5 lg:p-6 flex items-start gap-4 relative md:-ml-6 md:rounded-l-[2rem] shadow-[-12px_0_40px_rgba(0,0,0,0.06)] border-l border-black/5 z-10 transition-transform duration-500 group-hover:scale-[1.015]">
                  <div className="mt-0.5 w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 text-brand">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-brand mb-2">The Myer Systems Way</span>
                    <p className="text-[15px] font-bold text-ink leading-relaxed">{row.good}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 5. WHAT CLIENTS SAY */}
      <Testimonials />

      

      {/* 7. FINAL CTA */}
      <CtaBanner />
      
      <Footer />
    </div>
  );
}

