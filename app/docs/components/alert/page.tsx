import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function AlertPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Alert" description="Alert banner with severity variants and optional dismiss." />
      <ImportBlock code={`import { Alert, Callout } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Alert variant="info" title="Heads up">
  This is an informational alert.
</Alert>

<Alert variant="error" title="Error" dismissible onDismiss={() => {}}>
  Something went wrong.
</Alert>

<Callout icon={<span>💡</span>}>
  This is a highlighted callout block.
</Callout>`}</CodeBlock>
      </DocSection>
      <DocSection title="Alert Props">
        <PropsTable rows={[
          { name: "variant", type: '"info" | "success" | "warning" | "error"', default: '"info"', description: "Severity style." },
          { name: "title", type: "string", description: "Alert headline." },
          { name: "icon", type: "ReactNode", description: "Custom icon override." },
          { name: "dismissible", type: "boolean", default: "false", description: "Show dismiss button." },
          { name: "onDismiss", type: "() => void", description: "Dismiss callback." },
          { name: "children", type: "ReactNode", description: "Alert body content." },
        ]} />
      </DocSection>
      <DocSection title="Callout Props">
        <PropsTable rows={[
          { name: "icon", type: "ReactNode", description: "Leading icon." },
          { name: "color", type: "string", description: "Border accent color." },
          { name: "children", type: "ReactNode", description: "Callout content." },
        ]} />
      </DocSection>
    </article>
  );
}
