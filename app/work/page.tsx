"use client";

import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { useReveal } from '@/hooks/use-reveal';
import { CtaBanner } from '@/components/site/cta-banner';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const PROJECTS = [
  {
    id: '01',
    name: 'MedSynthea',
    category: 'AI-Driven RCM System',
    tags: ['Healthcare', 'Revenue Cycle', 'Compliance'],
    headline: 'End-to-end revenue cycle management — governed, auditable, built for high-stakes healthcare.',
    description: "Myer Systems' flagship RCM platform handles eligibility verification, claim submission, denial resolution, and audit documentation — with every decision traceable to a human-approved rule set.",
    outcome: 'Audit-ready RCM',
    year: '2024',
    status: 'Live',
    accentFrom: 'from-violet-100',
    accentTo: 'to-brand/10',
    mockupColor: '#5B45FF',
    metrics: [
      { label: 'Claim Accuracy', value: '98.6%' },
      { label: 'Audit Coverage', value: '100%' },
      { label: 'Denial Rate', value: '↓ 40%' },
    ],
  },
  {
    id: '02',
    name: 'FlowDesk',
    category: 'Business Reengineering',
    tags: ['Operations', 'Workflow Design', 'Enterprise'],
    headline: 'Rebuilt back-office operations for a 300-person enterprise without a single new hire.',
    description: "We mapped existing workflows, identified 14 high-friction handoffs, and redesigned the entire process around a hybrid AI + human delivery model — all within a 90-day engagement.",
    outcome: '3× throughput',
    year: '2024',
    status: 'Live',
    accentFrom: 'from-blue-100',
    accentTo: 'to-blue-50',
    mockupColor: '#3B82F6',
    metrics: [
      { label: 'Process Steps', value: '−62%' },
      { label: 'Throughput', value: '3×' },
      { label: 'Time-to-output', value: '↓ 55%' },
    ],
  },
  {
    id: '03',
    name: 'AuditLayer',
    category: 'Governance Framework',
    tags: ['AI Governance', 'Compliance', 'SaaS'],
    headline: 'Real-time AI decision audit trail for a regulated financial services firm.',
    description: "A structured governance layer deployed on top of an existing LLM stack — giving compliance teams full visibility into every automated decision, who triggered it, and what data was used.",
    outcome: '100% audit-ready',
    year: '2025',
    status: 'Live',
    accentFrom: 'from-emerald-100',
    accentTo: 'to-emerald-50',
    mockupColor: '#10B981',
    metrics: [
      { label: 'Decisions Logged', value: '100%' },
      { label: 'Review Time', value: '↓ 70%' },
      { label: 'Compliance Score', value: 'A+' },
    ],
  },
  {
    id: '04',
    name: 'ScaleCore',
    category: 'Resource Augmentation',
    tags: ['Team Scale', 'AI Agents', 'Healthcare'],
    headline: 'Scaled a healthcare billing team from 12 to 40 effective capacity in just 6 weeks.',
    description: "By deploying vetted offshore professionals and governed AI agents inside the client's existing systems, we expanded operational capacity rapidly — maintaining full accountability and zero compliance gaps.",
    outcome: '3.3× team capacity',
    year: '2025',
    status: 'Ongoing',
    accentFrom: 'from-orange-100',
    accentTo: 'to-orange-50',
    mockupColor: '#F97316',
    metrics: [
      { label: 'Effective Headcount', value: '40' },
      { label: 'Onboarding Time', value: '6 wks' },
      { label: 'Compliance Gaps', value: '0' },
    ],
  },
];

/* ─── Inline coded mockup for each project ─── */
function ProjectMockup({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-black/8 shadow-[0_8px_40px_rgba(0,0,0,0.07)]">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5 bg-secondary/40">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-4">
          <div className="h-4 w-32 rounded-full bg-black/5 mx-auto" />
        </div>
      </div>
      {/* Sidebar + content */}
      <div className="flex h-[calc(100%-40px)]">
        {/* Mini sidebar */}
        <div className="w-10 border-r border-black/5 py-4 flex flex-col items-center gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-md"
              style={{ background: i === 0 ? project.mockupColor + '30' : '#00000008' }}
            />
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          {/* Metric cards row */}
          <div className="grid grid-cols-3 gap-2">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-xl p-3 border border-black/5 bg-secondary/40">
                <div className="text-[10px] font-medium text-muted-foreground mb-1 truncate">{m.label}</div>
                <div className="text-base font-bold" style={{ color: project.mockupColor }}>{m.value}</div>
              </div>
            ))}
          </div>
          {/* Fake chart */}
          <div className="flex-1 rounded-xl border border-black/5 p-3 bg-secondary/20 flex items-end gap-1 overflow-hidden">
            {[45, 60, 40, 75, 55, 90, 70, 85, 65, 95, 80, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all"
                style={{
                  height: `${h}%`,
                  background: i === 11 ? project.mockupColor : project.mockupColor + '25',
                }}
              />
            ))}
          </div>
          {/* Table rows */}
          <div className="space-y-1.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30 border border-black/5">
                <div className="w-3 h-3 rounded-full" style={{ background: project.mockupColor + '40' }} />
                <div className="flex-1 h-2.5 rounded-full bg-black/5" />
                <div className="w-8 h-2.5 rounded-full" style={{ background: project.mockupColor + '30' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  useReveal();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <main className="relative pt-28 pb-0 lg:pt-32 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_20%_50%,rgba(91,69,255,0.05),transparent)]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center pb-0">

            {/* Left: Text */}
            <div className="lg:col-span-6 py-10 lg:py-16">
              <div className="reveal inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 mb-8">
                <span className="h-1.5 w-1.5 rounded-full bg-brand block" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Our Work</span>
              </div>

              <h1 className="reveal text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] leading-[1.08] mb-6">
                Systems that hold up
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">when it actually matters.</span>
              </h1>

              <p className="reveal-up text-base text-muted-foreground leading-relaxed max-w-lg mb-8 border-l-4 border-brand/20 pl-5">
                A selective look at how we've applied governed AI to real operations — with measurable, defensible results.
              </p>


            </div>

            {/* Right: Composite mockup showcase */}
            <div className="hidden lg:block lg:col-span-6 relative h-full py-8">
              {/* Stacked preview cards */}
              <div className="relative h-[480px]">
                {/* Back card */}
                <div className="absolute top-8 right-0 left-12 h-full rounded-3xl bg-brand/5 border border-brand/15 rotate-2 scale-95 origin-bottom-left" />
                {/* Middle card */}
                <div className="absolute top-4 right-0 left-6 h-full rounded-3xl bg-white border border-black/8 shadow-md -rotate-1 scale-97 origin-bottom-right" />
                {/* Front: live mockup */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-brand/10 ring-1 ring-black/5">
                  <div className="h-full bg-white flex flex-col">
                    {/* Window chrome */}
                    <div className="flex items-center gap-2 px-5 py-4 border-b border-black/5 bg-secondary/50 shrink-0">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                        <div className="w-3 h-3 rounded-full bg-green-400/70" />
                      </div>
                      <div className="flex-1 mx-6">
                        <div className="h-5 w-48 rounded-full bg-black/6 mx-auto" />
                      </div>
                      <div className="h-5 w-5 rounded-md bg-brand/15" />
                    </div>
                    {/* Layout */}
                    <div className="flex flex-1 overflow-hidden">
                      {/* Sidebar */}
                      <div className="w-14 border-r border-black/5 py-5 flex flex-col items-center gap-4 bg-secondary/30">
                        {['#5B45FF30','#00000008','#00000008','#00000008','#00000008'].map((bg, i) => (
                          <div key={i} className="w-7 h-7 rounded-xl" style={{ background: bg }} />
                        ))}
                      </div>
                      {/* Content */}
                      <div className="flex-1 p-5 flex flex-col gap-4 overflow-hidden">
                        {/* Top metrics */}
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { l: 'Claim Accuracy', v: '98.6%', c: '#5B45FF' },
                            { l: 'Audit Coverage', v: '100%', c: '#10B981' },
                            { l: 'Denial Rate', v: '↓ 40%', c: '#F97316' },
                          ].map((m) => (
                            <div key={m.l} className="rounded-2xl p-4 border border-black/5 bg-white shadow-sm">
                              <div className="text-[11px] text-muted-foreground mb-2">{m.l}</div>
                              <div className="text-xl font-bold" style={{ color: m.c }}>{m.v}</div>
                            </div>
                          ))}
                        </div>
                        {/* Chart */}
                        <div className="flex-1 rounded-2xl border border-black/5 bg-white shadow-sm p-4 flex flex-col gap-3 overflow-hidden">
                          <div className="flex justify-between items-center">
                            <div className="h-3 w-24 rounded-full bg-black/8" />
                            <div className="h-6 w-16 rounded-full bg-brand/10 border border-brand/20" />
                          </div>
                          <div className="flex-1 flex items-end gap-1">
                            {[30,50,40,70,55,85,65,90,75,100,82,95].map((h, i) => (
                              <div key={i} className="flex-1 rounded-t-md" style={{
                                height: `${h}%`,
                                background: i === 11 ? '#5B45FF' : '#5B45FF20',
                              }} />
                            ))}
                          </div>
                        </div>
                        {/* Table rows */}
                        <div className="space-y-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center gap-3 rounded-xl border border-black/5 bg-white px-4 py-3 shadow-sm">
                              <div className="w-4 h-4 rounded-full shrink-0" style={{ background: '#5B45FF30' }} />
                              <div className="flex-1 h-3 rounded-full bg-black/6" />
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>

        {/* Stats strip at bottom of hero */}
        <div className="border-t border-border/50 mt-4">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-stretch divide-x divide-border/60">
              {[
                { num: '4', label: 'Client Engagements' },
                { num: '100%', label: 'Decision Audit Coverage' },
                { num: '2024–', label: 'Active & Growing' },
                { num: '0', label: 'Compliance Gaps' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4 px-8 py-5 first:pl-0 group hover:bg-secondary/50 transition-colors flex-1">
                  <div className="text-2xl font-bold text-ink tracking-tight group-hover:text-brand transition-colors">{s.num}</div>
                  <div className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* ─── PROJECT LISTING ──────────────────────────────────── */}
      <section className="pt-24 pb-24 lg:pt-32 lg:pb-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="reveal flex items-center gap-4 mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">Project Index</span>
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] text-muted-foreground font-medium">{PROJECTS.length} engagements</span>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {PROJECTS.map((p, idx) => (
              <div
                key={p.id}
                className={cn(
                  "reveal-up group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
                  idx % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                )}
              >
                {/* ─ Mockup ─ */}
                <div className="lg:col-span-6">
                  <div className="relative">
                    {/* Subtle glow behind */}
                    <div className={cn("absolute inset-4 rounded-3xl blur-2xl opacity-30 bg-gradient-to-br", p.accentFrom, p.accentTo)} />
                    <div className="relative h-56 lg:h-64">
                      <ProjectMockup project={p} />
                    </div>
                  </div>
                </div>

                {/* ─ Content ─ */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[11px] font-bold text-muted-foreground/50">{p.id}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">{p.category}</span>
                    <span className="text-[12px] text-muted-foreground">{p.year}</span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-ink tracking-tight mb-4 leading-tight group-hover:text-brand transition-colors duration-300">
                    {p.name}
                  </h2>

                  <p className="text-[16px] font-semibold text-ink/70 mb-5 leading-relaxed">
                    {p.headline}
                  </p>

                  <p className="text-[14.5px] text-muted-foreground leading-relaxed mb-8">
                    {p.description}
                  </p>

                  {/* Outcome + Status */}
                  <div className="flex items-center gap-6 mb-8">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Key Result</div>
                      <div className="text-2xl font-bold text-ink group-hover:text-brand transition-colors">{p.outcome}</div>
                    </div>
                    <div className="h-10 w-px bg-border" />
                    <span className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider border",
                      p.status === 'Live'
                        ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                        : 'bg-brand/5 text-brand border-brand/20'
                    )}>
                      <span className={cn("h-1.5 w-1.5 rounded-full", p.status === 'Live' ? 'bg-emerald-500' : 'bg-brand animate-pulse')} />
                      {p.status}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-semibold text-muted-foreground group-hover:border-brand/30 group-hover:text-brand/80 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
