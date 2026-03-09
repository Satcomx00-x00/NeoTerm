import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function BadgePage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Badge" description="Inline badge with multiple color variants." />
      <ImportBlock code={`import { Badge } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Badge>Default</Badge>
<Badge variant="success">Online</Badge>
<Badge variant="destructive">Critical</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="outline">v1.2.0</Badge>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "success" | "warning"', default: '"default"', description: "Color variant." },
          { name: "children", type: "ReactNode", description: "Badge content." },
        ]} />
      </DocSection>
    </article>
  );
}
