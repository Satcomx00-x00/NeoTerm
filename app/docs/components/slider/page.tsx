import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function SliderPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Slider" description="Range slider with neon thumb and track fill." />
      <ImportBlock code={`import { Slider } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Slider value={volume} onChange={setVolume} label="Volume" />
<Slider value={50} min={0} max={200} step={5} showValue />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "value", type: "number", description: "Current value." },
          { name: "min", type: "number", default: "0", description: "Minimum value." },
          { name: "max", type: "number", default: "100", description: "Maximum value." },
          { name: "step", type: "number", default: "1", description: "Step increment." },
          { name: "onChange", type: "(value: number) => void", description: "Change callback." },
          { name: "label", type: "string", description: "Label text." },
          { name: "showValue", type: "boolean", default: "true", description: "Display numeric value." },
          { name: "disabled", type: "boolean", description: "Disable the slider." },
        ]} />
      </DocSection>
    </article>
  );
}
