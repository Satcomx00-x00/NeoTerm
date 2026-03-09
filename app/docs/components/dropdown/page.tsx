import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function DropdownPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Dropdown" description="Simple dropdown menu triggered by any element." />
      <ImportBlock code={`import { Dropdown } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Dropdown
  trigger={<Button>Actions</Button>}
  items={[
    { id: "edit", label: "Edit", onSelect: () => {} },
    { id: "copy", label: "Copy", shortcut: "⌘C", onSelect: () => {} },
    "separator",
    { id: "delete", label: "Delete", danger: true, onSelect: () => {} },
  ]}
/>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "trigger", type: "ReactNode", description: "Element that opens the dropdown." },
          { name: "items", type: '(DropdownItem | "separator")[]', description: "Menu items." },
          { name: "align", type: '"start" | "end"', default: '"start"', description: "Horizontal alignment." },
        ]} />
      </DocSection>
      <DocSection title="DropdownItem">
        <PropsTable rows={[
          { name: "id", type: "string", description: "Unique identifier." },
          { name: "label", type: "string", description: "Item text." },
          { name: "icon", type: "ReactNode", description: "Leading icon." },
          { name: "shortcut", type: "string", description: "Shortcut hint." },
          { name: "disabled", type: "boolean", description: "Disable the item." },
          { name: "danger", type: "boolean", description: "Destructive styling." },
          { name: "onSelect", type: "() => void", description: "Selection handler." },
        ]} />
      </DocSection>
    </article>
  );
}
