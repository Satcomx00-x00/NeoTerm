import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function UseCopyToClipboardPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="useCopyToClipboard" description="Copy text to clipboard with a brief 'copied' flash state." />
      <ImportBlock code={`import { useCopyToClipboard } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`const { copied, copy } = useCopyToClipboard();

<Button onClick={() => copy("npm install neoterm-ui")}>
  {copied ? "Copied!" : "Copy"}
</Button>`}</CodeBlock>
      </DocSection>
      <DocSection title="Signature">
        <CodeBlock>{`function useCopyToClipboard(resetMs?: number): {
  copied: boolean;
  copy: (text: string) => Promise<void>;
}`}</CodeBlock>
      </DocSection>
      <DocSection title="Parameters">
        <PropsTable rows={[
          { name: "resetMs", type: "number", default: "2000", description: "Time in ms before copied resets to false." },
        ]} />
      </DocSection>
    </article>
  );
}
