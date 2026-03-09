import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function StatusDotPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Status Dot" description="Small colored status indicator with optional pulse and label." />
      <ImportBlock code={`import { StatusDot } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<StatusDot status="success" label="Online" pulse />
<StatusDot status="error" size="lg" />
<StatusDot status="warning" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "status", type: '"success" | "warning" | "error" | "info" | "neutral"', description: "Color variant." },
          { name: "pulse", type: "boolean", default: "false", description: "Animated pulse ring." },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Dot size." },
          { name: "label", type: "string", description: "Text label next to the dot." },
        ]} />
      </DocSection>
    </article>
  );
}
