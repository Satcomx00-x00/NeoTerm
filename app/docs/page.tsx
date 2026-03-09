import Link from "next/link";

const categories = [
  { name: "Layout",       count: 6,  href: "/docs/components/terminal-box",  desc: "TerminalBox, Card, Modal, Drawer, CodeBlock, CommandLine"         },
  { name: "Data Display", count: 10, href: "/docs/components/kpi-card",       desc: "KpiCard, Sparkline, Donut, Gauge, HeatMap, DataList, LogViewer…" },
  { name: "Feedback",     count: 6,  href: "/docs/components/alert",          desc: "Alert, Toast, ProgressBar, StatusDot, StatusBadge, Spinner"      },
  { name: "Animation",    count: 4,  href: "/docs/components/animate-in",     desc: "AnimateIn, Typewriter, CountUp, Glow"                           },
  { name: "Navigation",   count: 5,  href: "/docs/components/breadcrumb",     desc: "CommandPalette, Breadcrumb, Stepper, Dropdown, Tabs"             },
  { name: "Forms",        count: 8,  href: "/docs/components/button",         desc: "Button, Input, Textarea, Select, Checkbox, Switch, Slider…"     },
  { name: "Decorative",   count: 5,  href: "/docs/components/matrix-rain",    desc: "MatrixRain, GridPattern, GradientText, ScanlineOverlay, Tag"    },
  { name: "Primitives",   count: 6,  href: "/docs/components/badge",          desc: "Badge, Led, Tooltip, Avatar, Skeleton, Separator"               },
];

export default function DocsPage() {
  return (
    <article className="space-y-10">
      {/* Hero */}
      <div className="space-y-3 pb-2 border-b border-border">
        <div className="inline-flex items-center gap-2 bg-neon/5 border border-neon/20 rounded px-2 py-0.5 text-[10px] font-mono text-neon/70">
          v0.1.0 — MIT License
        </div>
        <h1 className="text-4xl font-black font-mono tracking-tight">
          NeoTerm UI
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A terminal-inspired component library for React &amp; Next.js — CRT aesthetics,
          neon glow effects, and monospace typography designed for dashboards that look alive.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <Link href="/docs/installation"
            className="inline-flex items-center gap-1 bg-neon text-black text-xs font-bold font-mono px-4 py-1.5 rounded hover:bg-neon/90 transition-colors">
            Get Started →
          </Link>
          <Link href="/showcase"
            className="inline-flex items-center gap-1 border border-border text-xs font-mono px-4 py-1.5 rounded hover:border-neon/40 hover:text-neon transition-colors">
            Live Showcase
          </Link>
        </div>
      </div>

      {/* What is NeoTerm UI */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">What is NeoTerm UI?</h2>
        <p className="text-muted-foreground leading-relaxed">
          NeoTerm UI is a collection of 40+ React components styled with a retro-futuristic terminal
          aesthetic. Every component is built with TypeScript, Tailwind CSS 4, and Radix UI
          primitives — fully accessible, dark-mode-first, and designed to drop into any Next.js project.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { title: "Neon glow effects",     desc: "CRT phosphor glow, scanline overlays, and animated neon accents."         },
            { title: "40+ Components",         desc: "From KPI cards to log viewers — everything a terminal dashboard needs."   },
            { title: "Dark-first design",      desc: "Optimised for dark interfaces with a clean light-mode fallback."          },
            { title: "Tailwind CSS 4",          desc: "CSS variable tokens — customise every colour with one variable change."   },
            { title: "Radix UI primitives",    desc: "ARIA roles, keyboard navigation, and focus management baked in."          },
            { title: "TypeScript native",      desc: "Fully typed props and exports — no any, no guessing."                     },
          ].map((card) => (
            <div key={card.title} className="border border-border rounded p-4 space-y-1 bg-card hover:border-neon/30 transition-colors">
              <h3 className="font-mono font-bold text-sm text-neon">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Install */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold font-mono">Quick start</h2>
        <pre className="bg-card border border-border rounded p-4 text-sm font-mono overflow-x-auto">{`npm install neoterm-ui`}</pre>
        <p className="text-sm text-muted-foreground">
          Then follow the full{" "}
          <Link href="/docs/installation" className="text-neon hover:underline">Installation guide</Link>{" "}
          to import styles and set up Tailwind CSS 4.
        </p>
      </section>

      {/* Component Categories */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">Component categories</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href}
              className="block border border-border rounded p-4 bg-card hover:border-neon/40 transition-colors group">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono font-bold text-sm group-hover:text-neon transition-colors">{cat.name}</span>
                <span className="text-[10px] bg-neon/10 text-neon border border-neon/20 rounded px-1.5 py-0.5 font-mono">
                  {cat.count}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
