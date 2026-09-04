"use client";

import { Mail, Globe, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Footer } from '@/components/site/footer'
import { useReveal } from '@/hooks/use-reveal'

export default function ContactPage() {
  useReveal();

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
        {/* Background ambient network */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-0 right-0 h-full w-[50%] [mask-image:linear-gradient(to_right,transparent_0%,black_50%,black_100%)]">
            <svg viewBox="0 0 800 900" fill="none" className="absolute inset-0 h-full w-full">
              <path d="M -100 450 C 200 450, 400 100, 800 100" stroke="currentColor" className="text-brand/30" strokeWidth="1" fill="none" />
              <path d="M -100 450 C 200 450, 400 800, 800 800" stroke="currentColor" className="text-brand/30" strokeWidth="1" fill="none" />
              <path d="M 300 450 C 500 450, 600 450, 800 450" stroke="currentColor" className="text-brand/10" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 w-full mx-auto max-w-[90rem] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Side (Narrative) */}
            <div className="max-w-xl lg:mt-12">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Get in touch</span>
                <h1 className="mt-6 font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink leading-[1.1]">
                  Let’s engineer your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">next outcome.</span>
                </h1>
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 fill-mode-both">
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Whether you need AI-powered business reengineering or hybrid resource augmentation, our team is ready to design a governed, scalable solution for your enterprise.
                </p>
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
                <div className="mt-12 space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 grid place-items-center h-12 w-12 rounded-lg bg-brand/10 text-brand">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink text-lg">Email us</h3>
                      <p className="mt-1 text-[15px] text-muted-foreground">Our team will respond within 24 hours.</p>
                      <a href="mailto:hello@myersystems.ai" className="mt-2 inline-flex font-semibold text-brand hover:underline underline-offset-4">
                        hello@myersystems.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 grid place-items-center h-12 w-12 rounded-lg bg-brand/10 text-brand">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink text-lg">Global Delivery</h3>
                      <p className="mt-1 text-[15px] text-muted-foreground leading-relaxed">
                        Deploying top-tier talent and AI systems across the US and internationally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (Action / Form) */}
            <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-500 fill-mode-both">
              {/* Soft background glow */}
              <div className="absolute -inset-4 bg-brand/5 blur-2xl rounded-[3rem] -z-10" />
              
              <div className="bg-card border border-border/50 rounded-2xl shadow-2xl shadow-ink/5 p-8 sm:p-10">
                <h2 className="text-2xl font-semibold text-ink">Send us a message</h2>
                <form className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-[13px] font-semibold text-ink">First name</label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full bg-secondary/50 border border-transparent rounded-lg px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-[13px] font-semibold text-ink">Last name</label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full bg-secondary/50 border border-transparent rounded-lg px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[13px] font-semibold text-ink">Corporate email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-secondary/50 border border-transparent rounded-lg px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[13px] font-semibold text-ink">How can we help?</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-secondary/50 border border-transparent rounded-lg px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 mt-2 text-[15px] font-semibold text-white shadow-lg shadow-brand/20 hover:bg-brand-hover hover:shadow-brand/30 transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
                  >
                    Submit Request
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
