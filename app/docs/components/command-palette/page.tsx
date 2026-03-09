import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function CommandPalettePage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Command Palette" description="Terminal-styled command palette (Ctrl+K style) with search filtering." />
      <ImportBlock code={`import { CommandPalette } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`const [open, setOpen] = useState(false);

<CommandPalette
  open={open}
  onClose={() => setOpen(false)}
  placeholder="Type a command…"
  items={[
    { id: "1", label: "Go to Dashboard", shortcut: "⌘D", group: "Navigation", onSelect: () => {} },
    { id: "2", label: "Toggle Dark Mode", shortcut: "⌘T", group: "Settings", onSelect: () => {} },
    { id: "3", label: "Search Logs", group: "Tools", onSelect: () => {} },
  ]}
/>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "open", type: "boolean", description: "Palette visibility." },
          { name: "onClose", type: "() => void", description: "Close callback." },
          { name: "items", type: "CommandItem[]", description: "Array of command items." },
          { name: "placeholder", type: "string", description: "Search input placeholder." },
        ]} />
      </DocSection>
      <DocSection title="CommandItem">
        <PropsTable rows={[
          { name: "id", type: "string", description: "Unique identifier." },
          { name: "label", type: "string", description: "Command label." },
          { name: "shortcut", type: "string", description: "Keyboard shortcut hint." },
          { name: "icon", type: "ReactNode", description: "Leading icon." },
          { name: "group", type: "string", description: "Group heading." },
          { name: "onSelect", type: "() => void", description: "Selection handler." },
        ]} />
      </DocSection>
    </article>
  );
}
