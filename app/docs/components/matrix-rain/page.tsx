import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function MatrixRainPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Matrix Rain" description="Decorative Matrix-style digital rain background animation." />
      <ImportBlock code={`import { MatrixRain } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<div className="relative h-64">
  <MatrixRain columns={30} speed="fast" />
  <div className="relative z-10">Content over rain</div>
</div>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "columns", type: "number", default: "20", description: "Number of rain columns." },
          { name: "chars", type: "string", default: '"01"', description: "Character set to use." },
          { name: "speed", type: '"slow" | "normal" | "fast"', default: '"normal"', description: "Animation speed." },
        ]} />
      </DocSection>
    </article>
  );
}
