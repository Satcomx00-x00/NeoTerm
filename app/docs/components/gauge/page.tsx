import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function GaugePage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Gauge" description="Semi-circular gauge meter for displaying a value within a range." />
      <ImportBlock code={`import { Gauge } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Gauge value={67} label="Memory" />
<Gauge value={90} max={100} color="var(--destructive)" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "value", type: "number", description: "Current value." },
          { name: "max", type: "number", default: "100", description: "Maximum value." },
          { name: "size", type: "number", default: "80", description: "Diameter in px." },
          { name: "strokeWidth", type: "number", default: "5", description: "Arc thickness." },
          { name: "color", type: "string", default: "var(--chart-1)", description: "Arc fill color." },
          { name: "label", type: "string", description: "Label below the gauge." },
          { name: "showValue", type: "boolean", default: "true", description: "Display the numeric value." },
        ]} />
      </DocSection>
    </article>
  );
}
