import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function TooltipPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Tooltip" description="Hover-triggered tooltip overlay." />
      <ImportBlock code={`import { Tooltip } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Tooltip content="Copy to clipboard">
  <Button variant="ghost" size="icon"><CopyIcon /></Button>
</Tooltip>

<Tooltip content="Bottom tooltip" side="bottom">
  <span>Hover me</span>
</Tooltip>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "content", type: "string", description: "Tooltip text." },
          { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "Tooltip position." },
          { name: "children", type: "ReactNode", description: "Trigger element." },
        ]} />
      </DocSection>
    </article>
  );
}
