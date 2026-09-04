"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { ArrowRight, ChevronDown, ShieldCheck, FileSearch, LockKeyhole, BarChart4, Search, Network, Shield, RefreshCw, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function HowWeOperatePage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* 1. HERO SECTION (Reusing Services Hero Aesthetic) */}
      <section className="relative w-full min-h-[550px] lg:min-h-[600px] bg-brand overflow-hidden flex items-center pt-24 pb-16">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute -top-10 -left-10 w-[500px] h-[500px] opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px',
              maskImage: 'linear-gradient(135deg, black 10%, transparent 70%)',
              WebkitMaskImage: 'linear-gradient(135deg, black 10%, transparent 70%)'
            }}
          />
          <div 
            className="absolute -bottom-10 right-20 w-[600px] h-[400px] opacity-[0.1]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
              backgroundSize: '20px 20px',
              maskImage: 'linear-gradient(to top left, black, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to top left, black, transparent 80%)'
            }}
          />
          <div className="absolute -bottom-32 -right-10 w-[600px] h-[600px] opacity-20 rotate-[-35deg]">
             <div className="absolute bottom-10 right-0 w-full h-1 bg-white" />
             <div className="absolute bottom-20 right-0 w-[90%] h-1 bg-white" />
             <div className="absolute bottom-32 right-0 w-[80%] h-2 bg-white" />
             <div className="absolute bottom-44 right-0 w-[70%] h-1 bg-white/70" />
             <div className="absolute bottom-56 right-0 w-[50%] h-0.5 bg-white/50" />
          </div>
          <div className="absolute top-1/2 right-[10%] w-24 h-24 rounded-full border border-white/20 -translate-y-1/2" />
          <div className="absolute top-[40%] right-[5%] w-16 h-16 rounded-full border border-white/10" />
          <div className="absolute bottom-20 left-[15%] w-12 h-12 rounded-full border border-white/10" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="reveal max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-5 backdrop-blur-md">
               <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                 How We Operate
               </span>
            </div>
            
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] leading-[1.15]">
              Structure isn't a formality here. It's the whole point.
            </h1>
            
            <p className="mt-5 text-[17px] leading-relaxed text-white/90 font-light max-w-2xl">
              Every engagement — regardless of size — runs through the same governed process. Not because we love process for its own sake, but because "accountability" only means something if it's built into how work actually happens, not just claimed on a page.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white px-8 py-3.5 text-sm font-semibold text-brand transition-all hover:bg-white/90 shadow-lg"
              >
                Talk to Our Team
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                See Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE GOVERNANCE FRAMEWORK (Premium Light Mode Bento Grid with Mockups) */}
      <section className="pt-16 lg:pt-24 pb-8 relative bg-background overflow-hidden">
         <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
              <div className="max-w-2xl">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Governance in Practice
                </h2>
                <h3 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl leading-[1.1]">
                  What "accountable AI" actually looks like
                </h3>
              </div>
              <div className="max-w-md">
                 <p className="text-muted-foreground leading-relaxed font-medium">
                   We don't just talk about security. We architect it into the core of every deployment. No black boxes. No unmonitored agents.
                 </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
               {[
                 {
                   num: '01',
                   title: 'Human checkpoints,\nnot black boxes',
                   desc: 'Every AI-driven decision point has a defined human owner and a documented handoff.',
                   mockup: (
                     <div className="relative w-full h-full min-h-[120px] rounded-xl bg-brand/5 p-4 flex flex-col justify-center gap-3 overflow-hidden group-hover:bg-brand/10 transition-colors">
                       <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-full border-2 border-brand flex items-center justify-center">
                             <div className="w-2 h-2 rounded-full bg-brand animate-ping" />
                           </div>
                           <div className="w-12 h-2 rounded-full bg-brand" />
                         </div>
                         <div className="w-16 h-5 rounded-full bg-brand border border-brand flex items-center justify-center">
                           <span className="text-[7px] font-bold text-white uppercase tracking-wider">Approve</span>
                         </div>
                       </div>
                       <div className="w-full h-px bg-brand/10" />
                       <div className="w-3/4 h-2 rounded-full bg-brand" />
                       <div className="w-1/2 h-2 rounded-full bg-brand" />
                     </div>
                   )
                 },
                 {
                   num: '02',
                   title: 'Audit trail\nby design',
                   desc: 'Every system we deploy logs its decisions in a way that can be reviewed after the fact.',
                   mockup: (
                     <div className="relative w-full h-full min-h-[120px] rounded-xl bg-brand/5 p-4 flex flex-col justify-end gap-2 overflow-hidden group-hover:bg-brand/10 transition-colors">
                       <div className="w-full flex items-center gap-2  animate-pulse">
                         <span className="text-[8px] font-mono font-bold text-brand">14:02</span>
                         <div className="flex-1 h-1.5 rounded-full bg-brand" />
                       </div>
                       <div className="w-full flex items-center gap-2  animate-pulse" style={{ animationDelay: '200ms' }}>
                         <span className="text-[8px] font-mono font-bold text-brand">14:03</span>
                         <div className="w-3/4 h-1.5 rounded-full bg-brand" />
                       </div>
                       <div className="w-full flex items-center gap-2">
                         <span className="text-[8px] font-mono text-brand font-bold">14:05</span>
                         <div className="flex-1 h-1.5 rounded-full bg-brand" />
                       </div>
                     </div>
                   )
                 },
                 {
                   num: '03',
                   title: 'Scoped access,\nnot blanket access',
                   desc: 'AI agents are scoped to specific workflows — no broad, unreviewed system access.',
                   mockup: (
                     <div className="relative w-full h-full min-h-[120px] rounded-xl bg-brand/5 p-4 flex items-center justify-center overflow-hidden group-hover:bg-brand/10 transition-colors">
                       <div className="relative w-16 h-16 rounded-full border border-brand/20 flex items-center justify-center">
                          <LockKeyhole className="w-5 h-5 text-brand relative z-10" />
                          <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-white translate-x-1 -translate-y-1" />
                          {/* Rotating dashed ring */}
                          <div className="absolute inset-2 rounded-full border border-dashed border-brand animate-[spin_8s_linear_infinite]" />
                       </div>
                     </div>
                   )
                 },
                 {
                   num: '04',
                   title: 'Metrics defined\nbefore build',
                   desc: 'Success criteria are agreed before development starts, so success has a real answer.',
                   mockup: (
                     <div className="relative w-full h-full min-h-[120px] rounded-xl bg-brand/5 p-4 flex items-end justify-center gap-2 overflow-hidden group-hover:bg-brand/10 transition-colors">
                       <div className="w-4 bg-brand rounded-t-sm h-[30%] transition-all duration-1000 group-hover:h-[40%]" />
                       <div className="w-4 bg-brand rounded-t-sm h-[50%] transition-all duration-1000 group-hover:h-[65%]" />
                       <div className="w-4 bg-brand rounded-t-sm h-[70%] transition-all duration-1000 group-hover:h-[85%]" />
                       <div className="w-4 bg-brand rounded-t-sm h-[40%] transition-all duration-1000 group-hover:h-[100%]" />
                     </div>
                   )
                 }
               ].map((item, i) => (
                 <div 
                   key={i} 
                   className="reveal-up relative overflow-hidden p-6 lg:p-8 rounded-3xl bg-white border border-brand/30 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(91,69,255,0.12)] hover:border-brand/60 transition-all duration-500 hover:-translate-y-1 group flex flex-col sm:flex-row gap-6"
                   style={{ transitionDelay: `${i * 100}ms` }}
                 >
                   {/* Background Number */}
                   <div className="absolute -bottom-4 -right-2 text-[100px] font-bold text-ink/[0.08] group-hover:text-ink/30 group-hover:-translate-y-2 transition-colors duration-500 pointer-events-none select-none">
                     {item.num}
                   </div>

                   {/* Text Content */}
                   <div className="relative z-10 flex-1 flex flex-col justify-center">
                     <h4 className="text-[20px] font-bold text-ink leading-snug mb-3 whitespace-pre-line">
                       {item.title}
                     </h4>
                     <p className="text-[14px] text-muted-foreground leading-relaxed">
                       {item.desc}
                     </p>
                   </div>

                   {/* Mockup Container */}
                   <div className="relative z-10 w-full sm:w-1/3 sm:min-w-[140px] shrink-0">
                      {item.mockup}
                   </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. THE PROCESS, IN DEPTH */}
      <section className="pt-8 pb-16 lg:pb-24 bg-background">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand mb-4">The Process</h2>
              <h3 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                How we move from discovery to deployment
              </h3>
            </div>

            <div className="relative max-w-5xl mx-auto">
               {/* Vertical Timeline Line */}
               <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

               <div className="space-y-16 lg:space-y-24">
                 {[
                   {
                     step: '01',
                     title: 'Discover',
                     icon: <Search className="w-6 h-6 text-brand" />,
                     short: 'We map your workflows, data, and constraints to find where AI creates measurable leverage before a single line is built.',
                     expanded: 'This phase is where we figure out if a given process is even a good candidate for AI in the first place — not every workflow should be automated. We look at where errors and delays actually happen today, what data already exists versus what\'s missing, and what "success" would concretely look like if this worked.',
                     deliverable: 'Scoped Opportunity Assessment',
                     timeline: '2-4 Weeks', image: ''
                   },
                   {
                     step: '02',
                     title: 'Design',
                     icon: <Network className="w-6 h-6 text-brand" />,
                     short: 'We architect systems around your real workflows, not a generic template.',
                     expanded: 'We turn the Discover findings into an actual system design — what gets automated, where a human stays in the loop, what data moves where, and what guardrails exist before anything touches production. This is also where success metrics get finalized and signed off, so there\'s no ambiguity later about what "done" means.',
                     deliverable: 'Solution Architecture & Build Plan',
                     timeline: '2-4 Weeks', image: ''
                   },
                   {
                     step: '03',
                     title: 'Govern & Build',
                     icon: <Shield className="w-6 h-6 text-brand" />,
                     short: 'We build with oversight embedded. Compliance, auditability, and human accountability are part of the system, not an afterthought.',
                     expanded: 'Development happens against the guardrails defined in Design — not as a separate "build fast, add compliance later" phase. Every component gets reviewed against the governance framework above before it\'s considered complete.',
                     deliverable: 'Production-Ready System & Governance Documentation',
                     timeline: '2-4 Weeks', image: ''
                   },
                   {
                     step: '04',
                     title: 'Deploy & Monitor',
                     icon: <RefreshCw className="w-6 h-6 text-brand" />,
                     short: 'We deploy into production and continuously monitor performance, tuning systems as your operations scale.',
                     expanded: 'Launch isn\'t the finish line — this phase is where the metrics agreed on back in Design actually get tracked against real results, and systems get tuned based on what\'s actually happening in production, not assumptions from the design phase.',
                     deliverable: 'Weekly Performance Analytics',
                     timeline: 'Ongoing', image: ''
                   }
                 ].map((phase, i) => (
                   <div key={i} className={cn("reveal relative flex flex-col md:flex-row gap-8 lg:gap-16", i % 2 === 0 ? "md:flex-row-reverse" : "")}>
                      {/* Center Icon */}
                      <div className="hidden md:flex absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 w-16 h-16 rounded-full bg-background border-4 border-background items-center justify-center z-10">
                         <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shadow-inner">
                            {phase.icon}
                         </div>
                      </div>

                      {/* Content Card */}
                      <div className="md:w-1/2">
                         <div className="p-6 lg:p-8 rounded-3xl bg-white border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(91,69,255,0.08)] hover:border-brand/30 transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
                            <div className="inline-flex items-center gap-2 mb-4">
                               <span className="text-brand font-bold text-lg">{phase.step} —</span>
                               <h4 className="text-2xl font-bold text-ink">{phase.title}</h4>
                            </div>
                            <p className="text-[15px] font-medium text-ink/80 mb-6 leading-relaxed">
                               {phase.short}
                            </p>
                            <p className="text-[14px] text-muted-foreground leading-relaxed mb-8">
                               {phase.expanded}
                            </p>
                            
                            <div className="space-y-4 pt-6 border-t border-border/60">
                               <div>
                                 <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">What you get</span>
                                 <span className="text-[14px] font-medium text-ink italic">{phase.deliverable}</span>
                               </div>
                               <div>
                                 <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">Typical Duration</span>
                                 <span className="text-[14px] font-medium text-brand italic">{phase.timeline}</span>
                               </div>
                            </div>
                         </div>
                      </div>
                      
                      {/* Empty space for alternating layout */}
                      <div className="hidden md:flex md:w-1/2 items-center justify-center">
                         <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg border border-border">
                            <img src={`/images/${phase.title.toLowerCase().split(' ')[0]}.jpg`} alt={phase.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
                         </div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. START SMALL */}
      <section className="py-16 lg:py-24 bg-[#05060F] relative overflow-hidden text-center lg:text-left">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
         
         <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="reveal">
                 <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-light mb-4">Reducing Risk</h2>
                 <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-6">
                   You don't have to commit to the full picture on day one
                 </h3>
                 <p className="text-lg text-white/70 leading-relaxed font-light mb-8 max-w-xl mx-auto lg:mx-0">
                   Evaluate the impact against your own data, inside a single workflow, before making any larger commitments.
                 </p>
               </div>
               
               <div className="reveal-up p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-6">
                     <PlayCircle className="w-8 h-8 text-brand-light" />
                     <h4 className="text-xl font-bold text-white">Scoped Pilot</h4>
                  </div>
                  <p className="text-white/80 leading-relaxed mb-6">
                    
                    One workflow, one measurable outcome, evaluated against your own data before any larger commitment.
                  </p>
                  <div className="pt-6 border-t border-white/10">
                    <span className="text-sm font-semibold text-white/50 block mb-1">Typical Timeline</span>
                    <span className="text-brand-light font-medium">4-6 Weeks</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      

      {/* 6. FINAL CTA */}
      <div className="pb-16 lg:pb-24 bg-secondary">
        <CtaBanner />
      </div>
      
      <Footer />
    </div>
  );
}

