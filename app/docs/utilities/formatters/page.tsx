import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function FormattersPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Formatters" description="Number and date formatting utilities." />
      <ImportBlock code={`import { formatUsd, formatPct, formatDuration, timeAgo } from "neoterm-ui";`} />

      <DocSection title="formatUsd">
        <CodeBlock>{`formatUsd(1234.5)   // "$1,234.50"
formatUsd(0.5)      // "$0.50"`}</CodeBlock>
        <PropsTable rows={[
          { name: "value", type: "number", description: "Dollar amount." },
        ]} />
      </DocSection>

      <DocSection title="formatPct">
        <CodeBlock>{`formatPct(5.23)    // "+5.23%"
formatPct(-2.1)    // "−2.10%"`}</CodeBlock>
        <PropsTable rows={[
          { name: "value", type: "number", description: "Percentage value." },
        ]} />
      </DocSection>

      <DocSection title="formatDuration">
        <CodeBlock>{`formatDuration(90000)     // "1m 30s"
formatDuration(9000000)   // "2h 30m"`}</CodeBlock>
        <PropsTable rows={[
          { name: "ms", type: "number", description: "Duration in milliseconds." },
        ]} />
      </DocSection>

      <DocSection title="timeAgo">
        <CodeBlock>{`timeAgo(Date.now() - 300000)  // "5m ago"
timeAgo(Date.now() - 86400000) // "1d ago"`}</CodeBlock>
        <PropsTable rows={[
          { name: "timestamp", type: "number", description: "Unix timestamp in ms." },
        ]} />
      </DocSection>
    </article>
  );
}
