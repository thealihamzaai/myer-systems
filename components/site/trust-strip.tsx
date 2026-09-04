'use client';

import { AnimatedCounter } from '@/components/ui/animated-counter';

interface StatItem {
  id: string;
  isNumeric: boolean;
  value?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  text?: string;
  label: string;
}

const STATS: StatItem[] = [
  {
    id: 'claims',
    isNumeric: true,
    value: 100,
    prefix: '$',
    suffix: 'M+',
    label: 'Healthcare Claims &\nData Processed',
  },
  {
    id: 'growth',
    isNumeric: true,
    value: 250,
    suffix: '%',
    label: 'Year-over-Year\nOperational Growth',
  },
  {
    id: 'accuracy',
    isNumeric: true,
    value: 99.4,
    decimals: 1,
    suffix: '%',
    label: 'Billing & Compliance\nAccuracy Rate',
  },
  {
    id: 'coverage',
    isNumeric: true,
    value: 24,
    suffix: '/7',
    label: 'Dallas Governance +\nGlobal Delivery Hub',
  },
  {
    id: 'blackbox',
    isNumeric: false,
    text: 'Zero',
    label: 'Unaudited Black-Box\nDecisions',
  },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-border/70 bg-card/30 backdrop-blur-sm py-8 lg:py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Metric Grid with Connecting Horizon Line & Traveling Light Beam */}
        <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          
          {/* Subtle connecting horizontal guideline on desktop with traveling light pulse */}
          <div 
            className="absolute left-6 right-6 top-2 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block overflow-hidden" 
            aria-hidden="true" 
          >
            <div className="h-full w-24 bg-gradient-to-r from-transparent via-brand to-transparent animate-scan-packet" />
          </div>

          {STATS.map((s, index) => (
            <div 
              key={s.id} 
              className="group relative flex flex-col items-center text-center reveal-up"
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              {/* Radar Status Beacon on the guideline */}
              <div className="relative mb-4 flex items-center justify-center">
                <span 
                  className="absolute h-4 w-4 rounded-full bg-brand/25 animate-ping"
                  style={{ animationDelay: `${index * 250}ms` }}
                />
                <span className="relative h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_#29A8E0]" />
              </div>

              {/* High-Impact Stat Number with Smooth Count-Up Animation */}
              <div className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-ink font-heading leading-tight transition-colors duration-200 group-hover:text-brand-steel">
                {s.isNumeric && s.value !== undefined ? (
                  <AnimatedCounter 
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                    delay={index * 120}
                    duration={1500}
                  />
                ) : (
                  <span className="text-brand-steel font-heading">
                    {s.text}
                  </span>
                )}
              </div>

              {/* Sub-label in DM Sans */}
              <span className="mt-2.5 whitespace-pre-line text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground font-ui leading-relaxed">
                {s.label}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
