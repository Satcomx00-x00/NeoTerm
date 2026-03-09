export default function ThemingPage() {
  const colors = [
    { name: "--neon", value: "#39ff14", desc: "Primary neon green" },
    { name: "--cyan", value: "#00d4ff", desc: "Cyan accent" },
    { name: "--magenta", value: "#ff2d95", desc: "Magenta accent" },
    { name: "--amber", value: "#ffa629", desc: "Amber accent" },
    { name: "--destructive", value: "#ff3535", desc: "Error / destructive red" },
    { name: "--background", value: "#07070d", desc: "Page background (dark)" },
    { name: "--foreground", value: "#f7f8fb", desc: "Primary text (dark)" },
    { name: "--card", value: "#0d0d15", desc: "Card / surface (dark)" },
    { name: "--border", value: "#1c1c2e", desc: "Borders (dark)" },
    { name: "--muted-foreground", value: "#a8adc8", desc: "Secondary text (dark)" },
  ];

  const animations = [
    { name: ".cursor-blink", desc: "Blinking text cursor" },
    { name: ".pulse-neon", desc: "Pulsing opacity effect (2s)" },
    { name: ".shimmer", desc: "Skeleton loading shimmer" },
    { name: ".neo-spin", desc: "360° rotation (1s)" },
    { name: ".glass", desc: "Glass-morphism blur + border" },
    { name: ".scanlines", desc: "CRT scanline overlay via ::after" },
    { name: ".dot-grid", desc: "Radial dot pattern background" },
    { name: ".glow-green/.glow-cyan/…", desc: "Neon text-shadow glow" },
  ];

  return (
    <article className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-mono tracking-tight">Theming</h1>
        <p className="text-lg text-muted-foreground">
          NeoTerm UI uses CSS custom properties for all colors, making it fully customizable.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">Color tokens</h2>
        <p className="text-muted-foreground text-sm">Override any variable on <code>:root</code> or <code>.dark</code> to customize the palette.</p>
        <div className="border border-border rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="text-left p-3 font-mono font-medium">Variable</th>
                <th className="text-left p-3 font-mono font-medium">Default</th>
                <th className="text-left p-3 font-mono font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {colors.map((c) => (
                <tr key={c.name} className="border-b border-border last:border-0">
                  <td className="p-3 font-mono text-neon">{c.name}</td>
                  <td className="p-3 font-mono flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-sm border border-border" style={{ background: c.value }} />
                    {c.value}
                  </td>
                  <td className="p-3 text-muted-foreground">{c.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">Customization</h2>
        <pre className="bg-card border border-border rounded p-4 text-sm font-mono overflow-x-auto">
{`:root {
  --neon: #00ffcc;       /* swap green for teal */
  --radius: 6px;         /* rounder corners */
  --font-mono: "Fira Code", monospace;
}`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">Utility classes</h2>
        <div className="border border-border rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="text-left p-3 font-mono font-medium">Class</th>
                <th className="text-left p-3 font-mono font-medium">Effect</th>
              </tr>
            </thead>
            <tbody>
              {animations.map((a) => (
                <tr key={a.name} className="border-b border-border last:border-0">
                  <td className="p-3 font-mono text-neon">{a.name}</td>
                  <td className="p-3 text-muted-foreground">{a.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">Dark / Light mode</h2>
        <p className="text-muted-foreground text-sm">
          Add <code className="text-foreground">className=&quot;dark&quot;</code> to <code className="text-foreground">&lt;html&gt;</code> for dark mode.
          NeoTerm ships both palettes; light mode uses inverted terminal colors (light background, dark text).
        </p>
      </section>
    </article>
  );
}
