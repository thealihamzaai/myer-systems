'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How We Operate', href: '/how-we-operate' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-3.5 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300">
      <nav
        className={cn(
          'pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2 sm:px-6 sm:py-2.5 transition-all duration-300',
          scrolled
            ? 'border-border bg-white/95 backdrop-blur-2xl shadow-[0_12px_36px_-10px_rgba(16,24,32,0.12)]'
            : 'border-border/70 bg-white/85 backdrop-blur-xl shadow-[0_8px_25px_-8px_rgba(16,24,32,0.06)]'
        )}
      >
        {/* ── Logo ─────────────────────────────────────── */}
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Myer Systems home">
          <Image
            src="/myers-mark.png"
            alt="Myer Systems"
            width={36}
            height={36}
            className="h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col">
            <span className="text-[16px] sm:text-[17px] font-bold tracking-tight text-ink font-heading leading-tight">
              Myer Systems
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav Links (Center) ──────────────── */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-[13px] font-medium tracking-wide transition-colors font-ui duration-200',
                isActive(link.href)
                  ? 'text-brand-steel font-semibold'
                  : 'text-muted-foreground hover:text-ink'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA Pill (Right) ────────────────── */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-[13px] font-bold text-ink shadow-[0_2px_12px_rgba(41,168,224,0.25)] transition-all duration-200 hover:bg-brand-hover hover:text-white hover:shadow-[0_4px_16px_rgba(41,168,224,0.4)] hover:scale-[1.02] font-ui"
          >
            <span>Schedule Consultation</span>
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>

        {/* ── Mobile Menu Toggle Button ────────────────── */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink hover:bg-slate-100 transition-colors md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* ── Mobile Menu Dropdown ─────────────────────── */}
      <div
        className={cn(
          'pointer-events-auto fixed inset-x-4 top-20 rounded-3xl border border-border bg-white/95 backdrop-blur-2xl p-6 shadow-2xl transition-all duration-300 md:hidden',
          mobileOpen ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-4'
        )}
      >
        <div className="flex flex-col space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'rounded-xl px-4 py-2.5 text-[15px] font-semibold transition-colors font-ui',
                isActive(link.href)
                  ? 'bg-brand/10 text-brand-steel'
                  : 'text-ink hover:bg-slate-50'
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-[14px] font-bold text-ink transition-colors hover:bg-brand-hover hover:text-white font-ui shadow-md shadow-brand/20"
            >
              <span>Schedule Consultation</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
