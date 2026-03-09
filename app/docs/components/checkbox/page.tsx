import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function CheckboxPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Checkbox" description="Terminal-styled checkbox control." />
      <ImportBlock code={`import { Checkbox } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Checkbox checked={agreed} onChange={setAgreed} label="I agree to the terms" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "checked", type: "boolean", description: "Checked state." },
          { name: "onChange", type: "(checked: boolean) => void", description: "Change callback." },
          { name: "label", type: "string", description: "Label text." },
          { name: "disabled", type: "boolean", description: "Disable the checkbox." },
        ]} />
      </DocSection>
    </article>
  );
}
