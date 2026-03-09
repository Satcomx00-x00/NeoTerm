import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function CodeBlockPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Code Block" description="Terminal-styled code block with optional line numbers." />
      <ImportBlock code={`import { CodeBlock } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<CodeBlock language="ts" showLineNumbers>
{\`const x = 42;
console.log(x);\`}
</CodeBlock>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "children", type: "string", description: "The code string to display." },
          { name: "language", type: "string", description: "Language label (decorative)." },
          { name: "showLineNumbers", type: "boolean", default: "false", description: "Show line numbers." },
          { name: "className", type: "string", description: "Additional CSS classes." },
        ]} />
      </DocSection>
    </article>
  );
}
