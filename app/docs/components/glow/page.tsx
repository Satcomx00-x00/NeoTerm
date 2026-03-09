import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function GlowPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Glow" description="Neon glow effects for text, containers, and lines." />
      <ImportBlock code={`import { GlowText, GlowBox, NeonLine, RippleButton } from "neoterm-ui";`} />

      <DocSection title="GlowText">
        <CodeBlock>{`<GlowText color="green">Neon green text</GlowText>
<GlowText color="cyan" as="h1">Cyan heading</GlowText>`}</CodeBlock>
        <PropsTable rows={[
          { name: "color", type: '"green" | "cyan" | "red" | "amber" | "magenta"', default: '"green"', description: "Glow color." },
          { name: "as", type: "ElementType", default: '"span"', description: "HTML element to render." },
          { name: "children", type: "ReactNode", description: "Text content." },
        ]} />
      </DocSection>

      <DocSection title="GlowBox">
        <CodeBlock>{`<GlowBox color="cyan" pulse>
  <p>Glowing container with pulse</p>
</GlowBox>`}</CodeBlock>
        <PropsTable rows={[
          { name: "color", type: '"green" | "cyan" | "red" | "amber" | "magenta"', default: '"green"', description: "Border glow color." },
          { name: "pulse", type: "boolean", default: "false", description: "Animated pulse effect." },
          { name: "children", type: "ReactNode", description: "Box content." },
        ]} />
      </DocSection>

      <DocSection title="NeonLine">
        <CodeBlock>{`<NeonLine color="magenta" />`}</CodeBlock>
        <PropsTable rows={[
          { name: "color", type: '"green" | "cyan" | "red" | "amber" | "magenta"', default: '"green"', description: "Line glow color." },
        ]} />
      </DocSection>

      <DocSection title="RippleButton">
        <CodeBlock>{`<RippleButton>Click me</RippleButton>`}</CodeBlock>
        <PropsTable rows={[
          { name: "rippleColor", type: "string", description: "Ripple animation color." },
          { name: "...rest", type: "ButtonHTMLAttributes", description: "Standard button props." },
        ]} />
      </DocSection>
    </article>
  );
}
