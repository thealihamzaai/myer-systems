'use client';

import Link from 'next/link';
import { ArrowUpRight, Calendar, Mail, Building2, ShieldCheck } from 'lucide-react';

export function CtaBanner() {
  return (
    <section id="contact" className="relative scroll-mt-24 bg-[#F0FAFF] pt-8 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      
      {/* ── Ambient Glows ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29A8E0]/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1A6FA8] via-[#218DC4] to-[#29A8E0] px-8 py-14 sm:px-12 sm:py-16 text-center shadow-2xl shadow-[#29A8E0]/20 border border-white/20">
          
          {/* Subtle Inner Glass Highlights */}
          <div
            className="pointer-events-none absolute -left-20 top-0 h-[350px] w-[350px] rounded-full bg-white/15 blur-[90px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-[350px] w-[350px] rounded-full bg-white/15 blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-ui">
                INITIATE STRATEGIC ENGAGEMENT
              </span>
            </div>

            {/* Display Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem]/[1.15] font-semibold tracking-tight text-white font-sans">
              Ready to scale your operations with{' '}
              <span className="font-quote italic font-normal text-white drop-shadow-sm">
                accountable AI
              </span>?
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg leading-relaxed text-white/95 font-sans max-w-2xl mx-auto">
              Schedule a strategic session with our Dallas executive leadership and engineering architects to audit your operational workflows and revenue cycle friction.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#101820] shadow-lg transition-all duration-300 hover:bg-[#F0FAFF] hover:scale-[1.02] font-ui"
              >
                <Calendar className="h-4 w-4 text-[#1A6FA8]" />
                <span>Schedule Executive Assessment</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="mailto:info@myersystems.ai"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 font-ui"
              >
                <Mail className="h-4 w-4 text-white" />
                <span>info@myersystems.ai</span>
              </a>
            </div>

            {/* Trust Reassurance note */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-sans">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-white" />
                Dallas US Legal BAA Standard
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-white" />
                24/7 Global Technical Delivery
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
