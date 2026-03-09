import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function CountUpPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="CountUp" description="Animated number counter that interpolates from one value to another." />
      <ImportBlock code={`import { CountUp } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<CountUp to={1234} />
<CountUp from={0} to={99.9} decimals={1} prefix="$" suffix="M" duration={2000} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "to", type: "number", description: "Target value." },
          { name: "from", type: "number", default: "0", description: "Starting value." },
          { name: "duration", type: "number", default: "1000", description: "Animation duration in ms." },
          { name: "decimals", type: "number", default: "0", description: "Decimal places." },
          { name: "prefix", type: "string", description: "Text before the number." },
          { name: "suffix", type: "string", description: "Text after the number." },
        ]} />
      </DocSection>
    </article>
  );
}
