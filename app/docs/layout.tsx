"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/* ── Sidebar nav structure ── */
const nav: { heading: string; items: { label: string; href: string }[] }[] = [
  {
    heading: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "Installation", href: "/docs/installation" },
      { label: "Theming", href: "/docs/theming" },
    ],
  },
  {
    heading: "Layout",
    items: [
      { label: "Terminal Box", href: "/docs/components/terminal-box" },
      { label: "Card", href: "/docs/components/card" },
      { label: "Modal", href: "/docs/components/modal" },
      { label: "Drawer", href: "/docs/components/drawer" },
      { label: "Code Block", href: "/docs/components/code-block" },
      { label: "Command Line", href: "/docs/components/command-line" },
    ],
  },
  {
    heading: "Data Display",
    items: [
      { label: "KPI Card", href: "/docs/components/kpi-card" },
      { label: "Sparkline", href: "/docs/components/sparkline" },
      { label: "Donut", href: "/docs/components/donut" },
      { label: "Gauge", href: "/docs/components/gauge" },
      { label: "HeatMap", href: "/docs/components/heatmap" },
      { label: "MiniBarChart", href: "/docs/components/mini-bar-chart" },
      { label: "Data List", href: "/docs/components/data-list" },
      { label: "Log Viewer", href: "/docs/components/log-viewer" },
      { label: "Timeline", href: "/docs/components/timeline" },
      { label: "Table", href: "/docs/components/table" },
    ],
  },
  {
    heading: "Feedback",
    items: [
      { label: "Alert", href: "/docs/components/alert" },
      { label: "Toast", href: "/docs/components/toast" },
      { label: "Progress Bar", href: "/docs/components/progress-bar" },
      { label: "Status Dot", href: "/docs/components/status-dot" },
      { label: "Status Badge", href: "/docs/components/status-badge" },
      { label: "Spinner", href: "/docs/components/spinner" },
    ],
  },
  {
    heading: "Animation",
    items: [
      { label: "AnimateIn", href: "/docs/components/animate-in" },
      { label: "Typewriter", href: "/docs/components/typewriter" },
      { label: "CountUp", href: "/docs/components/count-up" },
      { label: "Glow", href: "/docs/components/glow" },
    ],
  },
  {
    heading: "Navigation",
    items: [
      { label: "Command Palette", href: "/docs/components/command-palette" },
      { label: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { label: "Stepper", href: "/docs/components/stepper" },
      { label: "Dropdown", href: "/docs/components/dropdown" },
      { label: "Tabs", href: "/docs/components/tabs" },
    ],
  },
  {
    heading: "Forms",
    items: [
      { label: "Button", href: "/docs/components/button" },
      { label: "Input", href: "/docs/components/input" },
      { label: "Textarea", href: "/docs/components/textarea" },
      { label: "Select", href: "/docs/components/select" },
      { label: "Checkbox", href: "/docs/components/checkbox" },
      { label: "Switch", href: "/docs/components/switch" },
      { label: "Slider", href: "/docs/components/slider" },
      { label: "Toggle Group", href: "/docs/components/toggle-group" },
    ],
  },
  {
    heading: "Decorative",
    items: [
      { label: "Matrix Rain", href: "/docs/components/matrix-rain" },
      { label: "Grid Pattern", href: "/docs/components/grid-pattern" },
      { label: "Gradient Text", href: "/docs/components/gradient-text" },
      { label: "Scanline Overlay", href: "/docs/components/scanline-overlay" },
      { label: "Tag", href: "/docs/components/tag" },
    ],
  },
  {
    heading: "Primitives",
    items: [
      { label: "Badge", href: "/docs/components/badge" },
      { label: "Led", href: "/docs/components/led" },
      { label: "Tooltip", href: "/docs/components/tooltip" },
      { label: "Avatar", href: "/docs/components/avatar" },
      { label: "Skeleton", href: "/docs/components/skeleton" },
      { label: "Separator", href: "/docs/components/separator" },
    ],
  },
  {
    heading: "Hooks",
    items: [
      { label: "useMediaQuery", href: "/docs/hooks/use-media-query" },
      { label: "useCopyToClipboard", href: "/docs/hooks/use-copy-to-clipboard" },
      { label: "useHotkey", href: "/docs/hooks/use-hotkey" },
      { label: "useToggle", href: "/docs/hooks/use-toggle" },
      { label: "useToast", href: "/docs/hooks/use-toast" },
    ],
  },
  {
    heading: "Utilities",
    items: [
      { label: "cn", href: "/docs/utilities/cn" },
      { label: "Formatters", href: "/docs/utilities/formatters" },
    ],
  },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`block text-sm py-1 px-2 rounded transition-colors ${
        active
          ? "text-neon glow-green font-medium bg-neon/5"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* ── Top bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-border bg-background/80 backdrop-blur flex items-center px-6 gap-6">
        <Link href="/" className="text-neon font-mono font-bold tracking-wider text-sm glow-green">
          NeoTerm UI
        </Link>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/docs"      className="hover:text-foreground transition-colors">Docs</Link>
          <Link href="/showcase"   className="hover:text-foreground transition-colors">Showcase</Link>
          <Link href="/"           className="hover:text-foreground transition-colors">Home</Link>
          <a href="https://github.com/Satcomx00-x00/NeoTerm" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
        </nav>
      </header>

      {/* ── Sidebar ── */}
      <aside className="fixed top-14 left-0 bottom-0 w-64 border-r border-border overflow-y-auto p-4 bg-background hidden md:block">
        <nav className="space-y-6">
          {nav.map((group) => (
            <div key={group.heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 px-2">
                {group.heading}
              </h4>
              <div className="space-y-0.5">
                {group.items.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* ── Content ── */}
      <main className="flex-1 md:ml-64 mt-14 p-6 md:p-10 max-w-4xl">
        {children}
      </main>
    </div>
  );
}
