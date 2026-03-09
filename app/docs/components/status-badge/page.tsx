import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function StatusBadgePage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Status Badge" description="Inline status badge with colored border and tinted background." />
      <ImportBlock code={`import { StatusBadge } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<StatusBadge status="success">Deployed</StatusBadge>
<StatusBadge status="error">Failed</StatusBadge>
<StatusBadge status="warning">Pending</StatusBadge>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "status", type: '"success" | "warning" | "error" | "info" | "neutral"', description: "Color variant." },
          { name: "children", type: "ReactNode", description: "Badge label." },
        ]} />
      </DocSection>
    </article>
  );
}
