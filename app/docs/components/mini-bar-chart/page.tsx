import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function MiniBarChartPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="MiniBarChart" description="Minimal vertical bar chart — no external dependencies." />
      <ImportBlock code={`import { MiniBarChart } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<MiniBarChart items={[
  { label: "Mon", value: 12 },
  { label: "Tue", value: 19 },
  { label: "Wed", value: 8 },
  { label: "Thu", value: 15 },
]} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "items", type: "BarChartItem[]", description: "Array of { label, value, color? }." },
          { name: "maxHeight", type: "number", default: "80", description: "Maximum bar height in px." },
        ]} />
      </DocSection>
    </article>
  );
}
