import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function AnimateInPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="AnimateIn" description="Animate any content on mount with fade + slide/scale entrance." />
      <ImportBlock code={`import { AnimateIn, Stagger } from "neoterm-ui";`} />
      <DocSection title="AnimateIn">
        <CodeBlock>{`<AnimateIn direction="up" delay={0.1}>
  <Card>Slides up on mount</Card>
</AnimateIn>

<AnimateIn direction="scale" duration={0.4}>
  <Badge>Scales in</Badge>
</AnimateIn>`}</CodeBlock>
      </DocSection>
      <DocSection title="AnimateIn Props">
        <PropsTable rows={[
          { name: "direction", type: '"up" | "down" | "left" | "right" | "scale"', default: '"up"', description: "Entrance direction." },
          { name: "delay", type: "number", default: "0", description: "Delay in seconds." },
          { name: "duration", type: "number", default: "0.3", description: "Duration in seconds." },
          { name: "as", type: "ElementType", default: '"div"', description: "Wrapper element type." },
          { name: "children", type: "ReactNode", description: "Content to animate." },
        ]} />
      </DocSection>
      <DocSection title="Stagger">
        <CodeBlock>{`<Stagger stagger={0.05} direction="up">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Stagger>`}</CodeBlock>
      </DocSection>
      <DocSection title="Stagger Props">
        <PropsTable rows={[
          { name: "stagger", type: "number", default: "0.05", description: "Delay between each child (seconds)." },
          { name: "direction", type: '"up" | "down" | "left" | "right" | "scale"', default: '"up"', description: "Entrance direction." },
          { name: "duration", type: "number", default: "0.3", description: "Duration per item." },
          { name: "children", type: "ReactNode", description: "Items to stagger." },
        ]} />
      </DocSection>
    </article>
  );
}
