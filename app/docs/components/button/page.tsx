import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function ButtonPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Button" description="Terminal-styled button with multiple variants and sizes." />
      <ImportBlock code={`import { Button } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline" size="sm">Small outline</Button>
<Button variant="ghost" size="icon"><Icon /></Button>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "variant", type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"', default: '"default"', description: "Visual style." },
          { name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"', description: "Button size." },
          { name: "asChild", type: "boolean", default: "false", description: "Render as child element via Radix Slot." },
          { name: "...rest", type: "ButtonHTMLAttributes", description: "Standard button props." },
        ]} />
      </DocSection>
    </article>
  );
}
