import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function UseHotkeyPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="useHotkey" description="Listen for keyboard shortcut combos." />
      <ImportBlock code={`import { useHotkey } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`useHotkey("Meta+k", () => setCommandPaletteOpen(true));
useHotkey("Ctrl+Shift+p", () => togglePreview());
useHotkey("Escape", () => closeModal());`}</CodeBlock>
      </DocSection>
      <DocSection title="Signature">
        <CodeBlock>{`function useHotkey(combo: string, callback: () => void): void`}</CodeBlock>
      </DocSection>
      <DocSection title="Parameters">
        <PropsTable rows={[
          { name: "combo", type: "string", description: 'Key combo string, e.g. "Meta+k", "Ctrl+Shift+p".' },
          { name: "callback", type: "() => void", description: "Function called when the combo is pressed." },
        ]} />
      </DocSection>
    </article>
  );
}
