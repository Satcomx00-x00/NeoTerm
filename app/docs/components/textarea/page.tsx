import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function TextareaPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Textarea" description="Terminal-styled multi-line text input." />
      <ImportBlock code={`import { Textarea } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Textarea placeholder="Write your message…" rows={4} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "...rest", type: "TextareaHTMLAttributes", description: "All standard textarea attributes." },
        ]} />
      </DocSection>
    </article>
  );
}
