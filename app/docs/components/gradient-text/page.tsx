import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function GradientTextPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Gradient Text" description="Gradient-colored text with preset palettes." />
      <ImportBlock code={`import { GradientText } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<GradientText variant="neon">Neon gradient</GradientText>
<GradientText variant="fire" as="h2">Fire heading</GradientText>
<GradientText variant="ice">Ice cool text</GradientText>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "variant", type: '"neon" | "fire" | "ice"', default: '"neon"', description: "Gradient palette." },
          { name: "as", type: "ElementType", default: '"span"', description: "HTML element to render." },
          { name: "children", type: "ReactNode", description: "Text content." },
        ]} />
      </DocSection>
    </article>
  );
}
