import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function StepperPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Stepper" description="Horizontal step indicator for multi-step workflows." />
      <ImportBlock code={`import { Stepper } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Stepper steps={["Connect", "Configure", "Deploy"]} current={1} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "steps", type: "string[]", description: "Step labels." },
          { name: "current", type: "number", description: "Active step index (0-based)." },
        ]} />
      </DocSection>
    </article>
  );
}
