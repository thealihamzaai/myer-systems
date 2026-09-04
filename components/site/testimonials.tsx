'use client';

import Image from 'next/image';

const REVIEWS = [
  {
    name: 'Sarah Mitchell',
    role: 'VP of Revenue Operations',
    org: 'Texas Healthcare Network',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    review:
      'Myer Systems rebuilt our claims workflow and cut denials by 22% in 90 days. Cash-flow visibility is the best it has ever been.',
  },
  {
    name: 'David Vance',
    role: 'Chief Operating Officer',
    org: 'Enterprise Health Partners',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80',
    review:
      'Their hybrid model gave us senior AI engineers and 24/7 clinical billing pods via Dallas without adding internal domestic overhead.',
  },
  {
    name: 'Elena Rostova',
    role: 'Director of Compliance',
    org: 'Clinical Innovations Group',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    review:
      'Absolute accountability. Every automated AI decision has verifiable logs and human guardrails. Truly essential for regulated healthcare.',
  },
];

export function Testimonials() {
  return (
    <section id="trust" className="relative scroll-mt-24 bg-[#F0FAFF] py-12 lg:py-16 overflow-hidden border-t border-border/80">
      
      {/* ── Subtle Ambient Glow ── */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-brand/5 blur-[150px]" 
        aria-hidden="true" 
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Single Clear Heading (No other info) ── */}
        <h2 className="reveal text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold tracking-tight text-[#101820] font-sans text-center">
          What Our Clients Say
        </h2>

        {/* ── 3 Small Premium Client Boxes ── */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {REVIEWS.map((item, idx) => (
            <div
              key={item.name}
              className="reveal-up group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-md shadow-brand/5 transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div>
                {/* Client Profile Header */}
                <div className="flex items-center gap-3.5 border-b border-border/60 pb-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-brand/20 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#101820] font-heading leading-tight">
                      {item.name}
                    </h3>
                    <div className="text-xs text-brand-steel font-medium font-ui mt-0.5">
                      {item.role}
                    </div>
                    <div className="text-[11px] text-muted-foreground font-sans">
                      {item.org}
                    </div>
                  </div>
                </div>

                {/* Review Quote */}
                <p className="mt-4 text-sm sm:text-[14.5px] leading-relaxed text-[#101820]/90 font-sans">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
