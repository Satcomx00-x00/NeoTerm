import Link from "next/link";

export default function DocsPage() {
  return (
    <article className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-mono tracking-tight">Introduction</h1>
        <p className="text-lg text-muted-foreground">
          A terminal-inspired UI component library for React &amp; Next.js — CRT aesthetics, neon accents, and monospace typography.
        </p>
      </div>

      <div className="border border-border rounded p-6 space-y-4 bg-card">
        <h2 className="text-xl font-bold font-mono">What is NeoTerm UI?</h2>
        <p className="text-muted-foreground leading-relaxed">
          NeoTerm UI is a collection of 40+ React components styled with a retro-futuristic terminal aesthetic.
          Every component is built with TypeScript, Tailwind CSS 4, and Radix UI primitives — fully accessible,
          dark-mode-first, and designed to drop into any Next.js project.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          { title: "Neon glow effects", desc: "Text, borders, and backgrounds with animated CRT-style neon glows." },
          { title: "30+ components", desc: "From KPI cards and charts to modals, toasts, and form controls." },
          { title: "Dark mode first", desc: "Designed for dark interfaces with a light-mode fallback." },
          { title: "Tailwind CSS 4", desc: "CSS variables and utility-first styling with full customization." },
          { title: "Accessible", desc: "Built on Radix UI primitives with proper ARIA attributes." },
          { title: "TypeScript", desc: "Fully typed props and exports for a great developer experience." },
        ].map((card) => (
          <div key={card.title} className="border border-border rounded p-4 space-y-1 bg-card">
            <h3 className="font-mono font-bold text-sm text-neon">{card.title}</h3>
            <p className="text-sm text-muted-foreground">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold font-mono">Quick start</h2>
        <pre className="bg-card border border-border rounded p-4 text-sm font-mono overflow-x-auto">
{`npm install neoterm-ui`}
        </pre>
        <p className="text-sm text-muted-foreground">
          Then follow the <Link href="/docs/installation" className="text-neon hover:underline">Installation</Link> guide.
        </p>
      </div>
    </article>
  );
}
