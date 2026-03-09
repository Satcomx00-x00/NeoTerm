import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function LedPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Led" description="Small LED indicator light with optional pulse animation." />
      <ImportBlock code={`import { Led } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Led color="green" pulse />
<Led color="red" />
<Led color="amber" />
<Led color="off" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "color", type: '"green" | "red" | "amber" | "cyan" | "magenta" | "off"', default: '"green"', description: "LED color." },
          { name: "pulse", type: "boolean", default: "false", description: "Animated pulse." },
        ]} />
      </DocSection>
    </article>
  );
}
