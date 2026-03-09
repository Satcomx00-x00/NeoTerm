import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function TypewriterPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Typewriter" description="Text typing animation — characters appear one by one." />
      <ImportBlock code={`import { Typewriter } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Typewriter text="Hello, World!" speed={50} cursor />
<Typewriter text="System ready." delay={1000} onComplete={() => console.log("done")} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "text", type: "string", description: "Text to type out." },
          { name: "speed", type: "number", default: "50", description: "Milliseconds per character." },
          { name: "delay", type: "number", default: "0", description: "Initial delay in ms." },
          { name: "cursor", type: "boolean", default: "true", description: "Show blinking cursor." },
          { name: "cursorChar", type: "string", default: '"▊"', description: "Cursor character." },
          { name: "onComplete", type: "() => void", description: "Callback when typing completes." },
        ]} />
      </DocSection>
    </article>
  );
}
