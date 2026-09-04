'use client';

import { useReveal } from '@/hooks/use-reveal';
import { Navbar } from '@/components/site/navbar';
import { ScrollProgress } from '@/components/site/scroll-progress';
import { Hero } from '@/components/site/hero';
import { TrustStrip } from '@/components/site/trust-strip';
import { Problems } from '@/components/site/problems';
import { Disciplines } from '@/components/site/disciplines';
import { HowWeOperate } from '@/components/site/how-we-operate';
import { FlagshipPlatform } from '@/components/site/flagship-platform';
import { Projects } from '@/components/site/projects';
import { Testimonials } from '@/components/site/testimonials';
import { CtaBanner } from '@/components/site/cta-banner';
import { Footer } from '@/components/site/footer';

export default function Home() {
  useReveal();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Problems />
        <Disciplines />
        <HowWeOperate />
        <FlagshipPlatform />
        <Projects />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
