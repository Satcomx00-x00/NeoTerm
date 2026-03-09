import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function GridPatternPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Grid Pattern" description="SVG grid pattern background." />
      <ImportBlock code={`import { GridPattern } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<div className="relative h-48">
  <GridPattern size={24} color="var(--border)" />
</div>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "size", type: "number", default: "32", description: "Grid cell size in px." },
          { name: "color", type: "string", default: "var(--border)", description: "Line color." },
        ]} />
      </DocSection>
    </article>
  );
}
