import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function ScanlineOverlayPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Scanline Overlay" description="CRT scanline effect overlay and noise texture." />
      <ImportBlock code={`import { ScanlineOverlay, NoiseOverlay, DotGrid } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<div className="relative">
  <ScanlineOverlay />
  <NoiseOverlay />
  <DotGrid />
  <div className="relative z-10">Content with CRT effects</div>
</div>`}</CodeBlock>
      </DocSection>
      <DocSection title="Components">
        <PropsTable rows={[
          { name: "ScanlineOverlay", type: "—", description: "Horizontal scanline effect via CSS ::after." },
          { name: "NoiseOverlay", type: "—", description: "Subtle SVG noise grain texture." },
          { name: "DotGrid", type: "—", description: "Radial-gradient dot pattern background." },
        ]} />
      </DocSection>
    </article>
  );
}
