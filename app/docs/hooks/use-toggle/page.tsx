import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function UseTogglePage() {
  return (
    <article className="space-y-8">
      <DocHeader title="useToggle" description="Boolean state toggle helper with convenience methods." />
      <ImportBlock code={`import { useToggle } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`const sidebar = useToggle(true);

<Button onClick={sidebar.toggle}>Toggle Sidebar</Button>
<Button onClick={sidebar.setOff}>Close</Button>
{sidebar.value && <Sidebar />}`}</CodeBlock>
      </DocSection>
      <DocSection title="Signature">
        <CodeBlock>{`function useToggle(initial?: boolean): {
  value: boolean;
  toggle: () => void;
  setOn: () => void;
  setOff: () => void;
  setValue: (v: boolean) => void;
}`}</CodeBlock>
      </DocSection>
      <DocSection title="Returns">
        <PropsTable rows={[
          { name: "value", type: "boolean", description: "Current state." },
          { name: "toggle", type: "() => void", description: "Flip the value." },
          { name: "setOn", type: "() => void", description: "Set to true." },
          { name: "setOff", type: "() => void", description: "Set to false." },
          { name: "setValue", type: "(v: boolean) => void", description: "Set to explicit value." },
        ]} />
      </DocSection>
    </article>
  );
}
