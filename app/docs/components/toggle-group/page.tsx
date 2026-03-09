import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function ToggleGroupPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Toggle Group" description="Segmented toggle — single selection from N options." />
      <ImportBlock code={`import { ToggleGroup } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<ToggleGroup
  value={view}
  onChange={setView}
  items={[
    { value: "grid", label: "Grid" },
    { value: "list", label: "List" },
    { value: "table", label: "Table" },
  ]}
/>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "items", type: "ToggleGroupItem[]", description: 'Array of { value, label, icon? }.' },
          { name: "value", type: "string", description: "Currently selected value." },
          { name: "onChange", type: "(value: string) => void", description: "Selection callback." },
          { name: "size", type: '"sm" | "md"', default: '"md"', description: "Size variant." },
          { name: "variant", type: '"default" | "neon" | "ghost"', default: '"default"', description: "Visual style." },
        ]} />
      </DocSection>
    </article>
  );
}
