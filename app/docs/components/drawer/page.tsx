import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function DrawerPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Drawer" description="A slide-in panel from the left or right edge." />
      <ImportBlock code={`import { Drawer } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Drawer open={open} onClose={() => setOpen(false)} title="Settings" side="right">
  <p>Drawer content here</p>
</Drawer>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "open", type: "boolean", description: "Whether the drawer is visible." },
          { name: "onClose", type: "() => void", description: "Close callback." },
          { name: "side", type: '"left" | "right"', default: '"right"', description: "Which edge the drawer slides from." },
          { name: "title", type: "string", description: "Drawer header title." },
          { name: "width", type: "string", default: '"w-80"', description: "Tailwind width class." },
          { name: "children", type: "ReactNode", description: "Drawer body." },
        ]} />
      </DocSection>
    </article>
  );
}
