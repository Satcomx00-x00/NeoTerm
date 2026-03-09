import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function SparklinePage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Sparkline" description="Tiny inline SVG sparkline chart — no external dependencies." />
      <ImportBlock code={`import { Sparkline } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Sparkline data={[5, 12, 8, 20, 14, 18]} />
<Sparkline data={[5, 12, 8, 20]} width={120} height={32} color="var(--cyan)" fill={false} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "data", type: "number[] | SparklinePoint[]", description: "Data points." },
          { name: "width", type: "number", default: "80", description: "SVG width." },
          { name: "height", type: "number", default: "24", description: "SVG height." },
          { name: "color", type: "string", default: "var(--chart-1)", description: "Stroke color." },
          { name: "fill", type: "boolean", default: "true", description: "Show area fill." },
          { name: "strokeWidth", type: "number", default: "1.5", description: "Line stroke width." },
        ]} />
      </DocSection>
    </article>
  );
}
