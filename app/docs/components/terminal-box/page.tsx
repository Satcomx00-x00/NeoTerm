import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function TerminalBoxPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Terminal Box" description="A terminal-styled container with optional title bar and traffic-light dots." />
      <ImportBlock code={`import { TerminalBox } from "neoterm-ui";`} />

      <DocSection title="Usage">
        <CodeBlock>{`<TerminalBox title="server.log">
  <p>Log output here…</p>
</TerminalBox>

<TerminalBox variant="glass" title="config.yml">
  <p>Glass variant with blur backdrop</p>
</TerminalBox>`}</CodeBlock>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={[
          { name: "title", type: "string", description: "Title shown in the header bar." },
          { name: "variant", type: '"default" | "raised" | "glass"', default: '"default"', description: "Visual style variant." },
          { name: "headerExtra", type: "ReactNode", description: "Extra content rendered in the title bar." },
          { name: "className", type: "string", description: "Additional CSS classes." },
          { name: "children", type: "ReactNode", description: "Box content." },
        ]} />
      </DocSection>
    </article>
  );
}
