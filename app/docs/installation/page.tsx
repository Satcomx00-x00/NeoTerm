export default function InstallationPage() {
  return (
    <article className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-mono tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground">Get NeoTerm UI running in your project.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">1. Install the package</h2>
        <pre className="bg-card border border-border rounded p-4 text-sm font-mono overflow-x-auto">
{`npm install neoterm-ui
# or
pnpm add neoterm-ui
# or
bun add neoterm-ui`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">2. Import the styles</h2>
        <p className="text-muted-foreground">Add the base stylesheet to your root layout or global CSS file:</p>
        <pre className="bg-card border border-border rounded p-4 text-sm font-mono overflow-x-auto">
{`// app/layout.tsx or app/globals.css
import "neoterm-ui/styles";`}
        </pre>
        <p className="text-sm text-muted-foreground">
          This provides CSS custom properties (colors, neon accents, fonts), animation keyframes, and base utility classes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">3. Use components</h2>
        <pre className="bg-card border border-border rounded p-4 text-sm font-mono overflow-x-auto">
{`import { TerminalBox, GlowText, Button } from "neoterm-ui";

export default function Page() {
  return (
    <TerminalBox title="hello.sh">
      <GlowText color="green">Hello, NeoTerm!</GlowText>
      <Button>Click me</Button>
    </TerminalBox>
  );
}`}
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">Peer dependencies</h2>
        <p className="text-muted-foreground">NeoTerm UI requires:</p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          <li><code className="text-foreground">react</code> ^18.0.0 || ^19.0.0</li>
          <li><code className="text-foreground">react-dom</code> ^18.0.0 || ^19.0.0</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold font-mono">Tailwind CSS configuration</h2>
        <p className="text-muted-foreground">
          NeoTerm UI uses Tailwind CSS 4 with CSS custom properties. If your project uses Tailwind, the library&rsquo;s
          styles integrate automatically via the imported stylesheet. No extra Tailwind config is needed.
        </p>
      </section>
    </article>
  );
}
