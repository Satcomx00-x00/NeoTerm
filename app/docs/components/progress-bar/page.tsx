import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function ProgressBarPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Progress Bar" description="Horizontal progress bar with neon, gradient, and striped variants." />
      <ImportBlock code={`import { ProgressBar } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<ProgressBar value={65} />
<ProgressBar value={80} variant="neon" label="Upload" showValue />
<ProgressBar value={45} variant="striped" size="lg" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "value", type: "number", description: "Current progress value." },
          { name: "max", type: "number", default: "100", description: "Maximum value." },
          { name: "variant", type: '"default" | "neon" | "gradient" | "striped"', default: '"default"', description: "Visual style." },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Bar height." },
          { name: "label", type: "string", description: "Label text above the bar." },
          { name: "showValue", type: "boolean", default: "false", description: "Show numeric value." },
        ]} />
      </DocSection>
    </article>
  );
}
