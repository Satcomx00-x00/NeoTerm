import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function InputPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Input" description="Terminal-styled text input with monospace font." />
      <ImportBlock code={`import { Input } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Input placeholder="Enter hostname…" />
<Input type="password" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "...rest", type: "InputHTMLAttributes", description: "All standard input attributes (type, value, onChange, placeholder, etc.)." },
        ]} />
      </DocSection>
    </article>
  );
}
