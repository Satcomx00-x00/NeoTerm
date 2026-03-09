import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function DataListPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Data List" description="Key-value data list for detail panes and info panels." />
      <ImportBlock code={`import { DataList } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<DataList items={[
  { label: "Status", value: "Online" },
  { label: "Uptime", value: "14d 6h 32m" },
  { label: "CPU", value: "42%", color: "var(--neon)" },
]} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "items", type: "DataListItem[]", description: 'Array of { label, value, color? }.' },
          { name: "variant", type: '"inline" | "stacked"', default: '"stacked"', description: "Layout direction." },
          { name: "separator", type: "boolean", default: "true", description: "Show divider between items." },
        ]} />
      </DocSection>
    </article>
  );
}
