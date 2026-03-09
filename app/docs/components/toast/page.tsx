import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function ToastPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Toast" description="Toast notification system with auto-dismiss and stacking." />
      <ImportBlock code={`import { ToastStack, useToast } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`function App() {
  const { toasts, addToast, dismissToast } = useToast();

  return (
    <>
      <Button onClick={() => addToast({
        title: "Saved",
        description: "Changes saved successfully.",
        status: "success",
      })}>
        Save
      </Button>
      <ToastStack toasts={toasts} onDismiss={dismissToast} position="bottom-right" />
    </>
  );
}`}</CodeBlock>
      </DocSection>
      <DocSection title="useToast return">
        <PropsTable rows={[
          { name: "toasts", type: "ToastData[]", description: "Current toast array." },
          { name: "addToast", type: "(toast) => string", description: "Add a toast, returns its id." },
          { name: "dismissToast", type: "(id: string) => void", description: "Remove a toast by id." },
          { name: "dismissAll", type: "() => void", description: "Clear all toasts." },
        ]} />
      </DocSection>
      <DocSection title="ToastStack Props">
        <PropsTable rows={[
          { name: "toasts", type: "ToastData[]", description: "Toasts to display." },
          { name: "onDismiss", type: "(id: string) => void", description: "Dismiss callback." },
          { name: "position", type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"', default: '"top-right"', description: "Stack position." },
        ]} />
      </DocSection>
      <DocSection title="ToastData">
        <PropsTable rows={[
          { name: "id", type: "string", description: "Unique id." },
          { name: "title", type: "string", description: "Toast headline." },
          { name: "description", type: "string", description: "Detail text." },
          { name: "status", type: '"success" | "warning" | "error" | "info"', description: "Color variant." },
          { name: "duration", type: "number", description: "Auto-dismiss ms." },
        ]} />
      </DocSection>
    </article>
  );
}
