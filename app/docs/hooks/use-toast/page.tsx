import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function UseToastPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="useToast" description="Toast state management hook for triggering notifications." />
      <ImportBlock code={`import { useToast, ToastStack } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`const { toasts, addToast, dismissToast, dismissAll } = useToast();

addToast({ title: "Saved", status: "success", duration: 3000 });

// Render the stack somewhere in your layout:
<ToastStack toasts={toasts} onDismiss={dismissToast} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Returns">
        <PropsTable rows={[
          { name: "toasts", type: "ToastData[]", description: "Active toasts array." },
          { name: "addToast", type: "(toast) => string", description: "Add a toast; returns its id." },
          { name: "dismissToast", type: "(id: string) => void", description: "Remove a specific toast." },
          { name: "dismissAll", type: "() => void", description: "Clear all toasts." },
        ]} />
      </DocSection>
    </article>
  );
}
