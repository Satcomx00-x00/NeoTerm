import { DocHeader, DocSection, ImportBlock, CodeBlock } from "../../_components/doc-parts";

export default function CnPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="cn" description="Class name merge utility — combines clsx and tailwind-merge." />
      <ImportBlock code={`import { cn } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`// Merge conditional classes without conflicts
cn("px-4 py-2", active && "bg-neon/10 text-neon", className)

// Tailwind-merge resolves conflicts:
cn("px-4", "px-8") // → "px-8"
cn("text-red-500", "text-neon") // → "text-neon"`}</CodeBlock>
      </DocSection>
      <DocSection title="Signature">
        <CodeBlock>{`function cn(...inputs: ClassValue[]): string`}</CodeBlock>
        <p className="text-sm text-muted-foreground">
          Powered by <code>clsx</code> for conditional resolution + <code>tailwind-merge</code> for deduplication.
        </p>
      </DocSection>
    </article>
  );
}
