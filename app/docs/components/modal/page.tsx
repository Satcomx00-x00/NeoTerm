import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function ModalPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Modal" description="Terminal-styled modal dialog with backdrop overlay." />
      <ImportBlock code={`import { Modal } from "neoterm-ui";`} />

      <DocSection title="Usage">
        <CodeBlock>{`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)} title="Confirm">
  <p>Are you sure you want to continue?</p>
</Modal>`}</CodeBlock>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={[
          { name: "open", type: "boolean", description: "Whether the modal is visible." },
          { name: "onClose", type: "() => void", description: "Called when closing (backdrop click or Escape)." },
          { name: "title", type: "string", description: "Optional modal title." },
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Width preset." },
          { name: "children", type: "ReactNode", description: "Modal body content." },
          { name: "className", type: "string", description: "Additional CSS classes." },
        ]} />
      </DocSection>
    </article>
  );
}
