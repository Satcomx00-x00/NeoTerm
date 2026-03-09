import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function SwitchPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Switch" description="Toggle switch with neon active state." />
      <ImportBlock code={`import { Switch } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Switch checked={enabled} onCheckedChange={setEnabled} label="Dark mode" />
<Switch checked={true} size="sm" disabled />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "checked", type: "boolean", description: "On/off state." },
          { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Toggle callback." },
          { name: "size", type: '"sm" | "md"', default: '"md"', description: "Switch size." },
          { name: "label", type: "string", description: "Label text." },
          { name: "disabled", type: "boolean", description: "Disable the switch." },
        ]} />
      </DocSection>
    </article>
  );
}
