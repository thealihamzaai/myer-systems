'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { LiveSignalBeacon } from '@/components/ui/live-signal-beacon';

interface ProjectItem {
  title: string;
  badge: string;
  tags: string[];
  description: string;
  image: string;
  isNumeric: boolean;
  metricValue?: number;
  metricPrefix?: string;
  metricSuffix?: string;
  metricDecimals?: number;
  url: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: 'Clinical Denial Mitigation Engine',
    badge: 'Production RCM',
    tags: ['Healthcare AI', 'Denial Mitigation', '99.4% Accuracy'],
    description: 'An automated pre-submission clinical audit engine reducing medical claim denials by 22.4% with verified CPT-4 and ICD-10 cross-referencing.',
    image: '/dashboard-mockup.jpg',
    isNumeric: true,
    metricValue: 22.4,
    metricPrefix: '-',
    metricSuffix: '% Denial Reduction',
    metricDecimals: 1,
    url: '/services#rcm',
  },
  {
    title: 'Deterministic Governance & Audit Ledger',
    badge: 'Enterprise Security',
    tags: ['SHA-256 Ledger', 'HIPAA VPC', 'Zero Drift'],
    description: 'Clean-room data pipeline generating immutable cryptographic audit trails for every AI action, ensuring strict regulatory compliance.',
    image: '/project-audit.jpg',
    isNumeric: true,
    metricValue: 100,
    metricSuffix: '% Audit Ready',
    url: '/services#ai-solutions',
  },
  {
    title: 'Synchronous Hybrid Delivery Engine',
    badge: 'Dual-Hub Model',
    tags: ['Resource Augmentation', 'Lahore Hub', 'Dallas Oversight'],
    description: 'Continuous operational delivery framework pairing autonomous AI agents with 100+ certified specialists for 24/7 throughput velocity.',
    image: '/team-meeting.jpg',
    isNumeric: true,
    metricValue: 3.4,
    metricSuffix: 'x Velocity Multiplier',
    metricDecimals: 1,
    url: '/services#resource-augmentation',
  },
];

export function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 bg-[#101820] py-14 lg:py-18 overflow-hidden">
      
      {/* ── Ambient Dark Steel Depth ── */}
      <div 
        className="pointer-events-none absolute top-10 right-1/4 h-[500px] w-[500px] rounded-full bg-[#1A6FA8]/15 blur-[150px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-[#29A8E0]/10 blur-[140px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#29A8E0] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8FD6F5] font-ui">
              DELIVERED PLATFORMS · ENTERPRISE IP
            </span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-white font-sans">
            A track record of high-stakes systems{' '}
            <span className="font-quote italic font-normal text-[#8FD6F5]">
              shipped and trusted
            </span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#8FD6F5]/80 font-sans">
            Our enterprise deployments prove what we can engineer under strict accountability, empirical accuracy SLAs, and regulated operational environments.
          </p>
        </div>

        {/* ── 3-Column Systems Grid with Living Micro-Interactions ── */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div 
              key={project.title} 
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0D1B2A] p-6 sm:p-7 shadow-2xl transition-all duration-300 hover:border-[#29A8E0]/40 hover:shadow-[#29A8E0]/10 hover:-translate-y-1.5"
            >
              {/* Subtle Scanning Horizon Beam on Card Hover */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#29A8E0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              <div>
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent" />
                  
                  {/* Badge with Live Signal Beacon */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8FD6F5] backdrop-blur-md border border-white/10 font-ui">
                    <LiveSignalBeacon color="brand" size="sm" />
                    {project.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="rounded-md bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#8FD6F5] font-ui border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-white font-heading leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13.5px] leading-relaxed text-slate-300 font-sans">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Metric & Link with Animated Count-Up */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold text-[#29A8E0] font-ui">
                  {project.isNumeric && project.metricValue !== undefined ? (
                    <AnimatedCounter
                      value={project.metricValue}
                      prefix={project.metricPrefix}
                      suffix={project.metricSuffix}
                      decimals={project.metricDecimals}
                      duration={1300}
                    />
                  ) : null}
                </span>

                <Link
                  href={project.url}
                  className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#29A8E0] transition-colors font-ui uppercase tracking-wider"
                >
                  <span>Explore System</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* ── Direct Link to Full Case Studies ── */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-[#29A8E0] px-8 py-3.5 text-xs sm:text-sm font-bold text-[#101820] shadow-[0_2px_14px_rgba(41,168,224,0.3)] transition-all hover:bg-[#1A6FA8] hover:text-white font-ui"
          >
            <span>Explore All Architecture & Systems</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
