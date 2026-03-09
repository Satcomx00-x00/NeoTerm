"use client";

import Link from "next/link";
import { GridPattern } from "@/components/backgrounds";
import { GradientText, PulseRing } from "@/components/decorative";
import { GlowText, NeonLine } from "@/components/glow";
import { TerminalBox, CommandLine } from "@/components/terminal-box";
import { Button } from "@/primitives/button";
import { Badge } from "@/primitives/badge";
import { AnimateIn, Stagger } from "@/components/animate-in";
import { CountUp } from "@/components/count-up";
import { Typewriter } from "@/components/typewriter";
import { Led } from "@/primitives/led";
import { Separator } from "@/primitives/separator";

const categories = [
  { name: "Layout",       count: 6,  href: "/docs/components/terminal-box" },
  { name: "Data Display", count: 10, href: "/docs/components/kpi-card"     },
  { name: "Feedback",     count: 6,  href: "/docs/components/alert"        },
  { name: "Animation",    count: 4,  href: "/docs/components/animate-in"   },
  { name: "Navigation",   count: 5,  href: "/docs/components/breadcrumb"   },
  { name: "Forms",        count: 8,  href: "/docs/components/button"       },
  { name: "Decorative",   count: 5,  href: "/docs/components/matrix-rain"  },
  { name: "Primitives",   count: 6,  href: "/docs/components/badge"        },
];

const features = [
  { title: "Terminal Aesthetic",  desc: "CRT phosphor glow, scanline overlays, and matrix animations built in."       },
  { title: "40+ Components",      desc: "KPI cards, charts, toasts, modals, log viewers, and form controls."          },
  { title: "Dark-First Design",   desc: "Designed for dark interfaces with a clean light-mode fallback."               },
  { title: "TypeScript Native",   desc: "Fully typed props and exports — no any, no guessing."                         },
  { title: "Tailwind CSS 4",      desc: "CSS variable tokens for instant theme customization with zero config."        },
  { title: "Radix UI Primitives", desc: "Accessibility baked in — ARIA, keyboard navigation, focus management."       },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <GridPattern className="fixed inset-0 w-full h-full opacity-[0.025] pointer-events-none" />
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-background/0 via-background/5 to-background" />

      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 h-12 border-b border-border/30 bg-background/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Led color="green" pulse />
            <span className="font-mono font-bold text-neon text-sm tracking-wider">NeoTerm UI</span>
          </div>
          <nav className="hidden sm:flex items-center text-xs font-mono">
            <Link href="/docs"     className="px-3 py-1 text-muted-foreground hover:text-neon transition-colors">Docs</Link>
            <Link href="/showcase" className="px-3 py-1 text-muted-foreground hover:text-neon transition-colors">Showcase</Link>
            <a href="https://github.com/Satcomx00-x00/NeoTerm" target="_blank" rel="noopener noreferrer"
               className="px-3 py-1 text-muted-foreground hover:text-neon transition-colors">GitHub ↗</a>
          </nav>
          <Badge variant="outline" className="font-mono text-[10px]">v0.1.0</Badge>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <AnimateIn direction="down" duration={700}>
            <div className="inline-flex items-center gap-2 border border-neon/20 rounded-full px-4 py-1.5 text-[10px] font-mono text-neon/60 mb-2">
              <Led color="green" pulse />
              v0.1.0 — Available on npm
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={80} duration={700}>
            <h1 className="text-6xl md:text-8xl font-black font-mono tracking-tight leading-none">
              <GradientText variant="neon">NeoTerm</GradientText>
              <span className="text-foreground/20"> UI</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A terminal-inspired React component library. CRT glow effects, neon
              accents, and monospace typography — designed for dashboards that mean business.
            </p>
          </AnimateIn>
          <AnimateIn direction="up" delay={160} duration={700}>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link href="/docs/installation">
                <Button size="lg" className="font-mono">Get Started →</Button>
              </Link>
              <Link href="/showcase">
                <Button size="lg" variant="outline" className="font-mono">Live Showcase</Button>
              </Link>
              <a href="https://github.com/Satcomx00-x00/NeoTerm" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="ghost" className="font-mono">★ GitHub</Button>
              </a>
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={240} duration={700}>
            <div className="max-w-sm mx-auto">
              <TerminalBox title="bash">
                <div className="px-4 py-3">
                  <Typewriter text="npm install neoterm-ui" speed={55} className="text-sm font-mono text-neon" />
                </div>
              </TerminalBox>
            </div>
          </AnimateIn>
        </div>
      </section>

      <NeonLine className="max-w-5xl mx-auto px-6" />

      {/* Stats */}
      <section className="py-14 px-6">
        <Stagger stagger={100} className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Components", to: 40,  suffix: "+" },
            { label: "TypeScript",  to: 100, suffix: "%" },
            { label: "Hooks",       to: 5               },
            { label: "MIT License", display: "FREE"      },
          ].map((s) => (
            <div key={s.label} className="space-y-1">
              <div className="text-4xl font-black font-mono text-neon">
                {s.display ? s.display : (
                  <>
                    <CountUp to={s.to!} duration={1800} />
                    {s.suffix && <span className="text-2xl">{s.suffix}</span>}
                  </>
                )}
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono">{s.label}</div>
            </div>
          ))}
        </Stagger>
      </section>

      <NeonLine className="max-w-5xl mx-auto px-6" />

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xs font-mono text-muted-foreground tracking-widest uppercase mb-10">
            Why NeoTerm UI
          </h2>
          <Stagger stagger={80} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="term-panel p-5 space-y-2 hover:border-neon/30 transition-colors">
                <h3 className="font-mono font-bold text-sm text-foreground">{f.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <NeonLine className="max-w-5xl mx-auto px-6" />

      {/* Categories */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xs font-mono text-muted-foreground tracking-widest uppercase mb-10">
            Component Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href}>
                <div className="term-panel p-4 hover:border-neon/40 transition-all group cursor-pointer h-full">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-sm group-hover:text-neon transition-colors">{cat.name}</span>
                    <Badge variant="outline" className="text-[9px] font-mono">{cat.count}</Badge>
                  </div>
                  <div className="h-1 bg-border rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-neon/40 rounded-full" style={{ width: `${(cat.count / 10) * 100}%` }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-mono font-black text-2xl">
            <GlowText color="green">Start building today</GlowText>
          </h2>
          <p className="text-sm text-muted-foreground">Zero config. Drop it in. Ship it.</p>
          <div className="max-w-xs mx-auto term-panel">
            <CommandLine command="npm install neoterm-ui" output="added 1 package" />
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/docs">     <Button>Documentation →</Button></Link>
            <Link href="/showcase"> <Button variant="outline">View Showcase</Button></Link>
          </div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />
      <footer className="py-8 text-center text-[10px] font-mono text-muted-foreground">
        NeoTerm UI · MIT License ·{" "}
        <a href="https://github.com/Satcomx00-x00/NeoTerm" className="text-neon/60 hover:text-neon transition-colors">
          Satcomx00-x00/NeoTerm
        </a>
        {" · "}Built with Next.js · Tailwind CSS 4 · Radix UI
      </footer>
    </main>
  );
}
