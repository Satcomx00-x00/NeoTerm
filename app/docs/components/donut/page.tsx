import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function DonutPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Donut" description="Circular donut / ring progress indicator." />
      <ImportBlock code={`import { Donut } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Donut value={72} label="CPU" />
<Donut value={45} max={100} color="var(--cyan)" size={80} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "value", type: "number", description: "Current value." },
          { name: "max", type: "number", default: "100", description: "Maximum value." },
          { name: "size", type: "number", default: "64", description: "Diameter in px." },
          { name: "strokeWidth", type: "number", default: "4", description: "Ring thickness." },
          { name: "color", type: "string", default: "var(--chart-1)", description: "Ring fill color." },
          { name: "trackColor", type: "string", default: "var(--border)", description: "Background ring color." },
          { name: "label", type: "string", description: "Center label text." },
        ]} />
      </DocSection>
    </article>
  );
}
