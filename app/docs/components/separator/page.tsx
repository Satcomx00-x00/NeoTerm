import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function SeparatorPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Separator" description="Horizontal or vertical divider line built on Radix UI." />
      <ImportBlock code={`import { Separator } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Separator />
<Separator orientation="vertical" className="h-6" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direction." },
          { name: "className", type: "string", description: "Additional CSS classes." },
        ]} />
      </DocSection>
    </article>
  );
}
