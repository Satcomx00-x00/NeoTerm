import React from "react";

/* ────── Shared doc-page building blocks ────── */

export function DocHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold font-mono tracking-tight">{title}</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

export function DocSection({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      {title && <h2 className="text-xl font-bold font-mono">{title}</h2>}
      {children}
    </section>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="bg-card border border-border rounded p-4 text-sm font-mono overflow-x-auto whitespace-pre">
      {children}
    </pre>
  );
}

export function PropsTable({ rows }: { rows: { name: string; type: string; default?: string; description: string }[] }) {
  return (
    <div className="border border-border rounded overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-card">
            <th className="text-left p-3 font-mono font-medium">Prop</th>
            <th className="text-left p-3 font-mono font-medium">Type</th>
            <th className="text-left p-3 font-mono font-medium">Default</th>
            <th className="text-left p-3 font-mono font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-border last:border-0">
              <td className="p-3 font-mono text-neon">{r.name}</td>
              <td className="p-3 font-mono">{r.type}</td>
              <td className="p-3 font-mono text-muted-foreground">{r.default ?? "—"}</td>
              <td className="p-3 text-muted-foreground">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ImportBlock({ code }: { code: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold font-mono">Import</h2>
      <CodeBlock>{code}</CodeBlock>
    </div>
  );
}
