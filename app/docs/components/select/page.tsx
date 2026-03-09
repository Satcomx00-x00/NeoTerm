import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function SelectPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Select" description="Terminal-styled select dropdown." />
      <ImportBlock code={`import { Select } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Select
  placeholder="Choose region"
  options={[
    { value: "us-east", label: "US East" },
    { value: "eu-west", label: "EU West" },
    { value: "ap-south", label: "AP South" },
  ]}
  value={region}
  onChange={setRegion}
/>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "options", type: "SelectOption[]", description: 'Array of { value, label }.' },
          { name: "value", type: "string", description: "Selected value." },
          { name: "onChange", type: "(value: string) => void", description: "Change callback." },
          { name: "placeholder", type: "string", description: "Placeholder text." },
          { name: "disabled", type: "boolean", description: "Disable the select." },
        ]} />
      </DocSection>
    </article>
  );
}
