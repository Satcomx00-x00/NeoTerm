import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function SpinnerPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Spinner" description="Neon spinning loader indicator." />
      <ImportBlock code={`import { Spinner } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Spinner />
<Spinner size="lg" color="var(--cyan)" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Spinner diameter." },
          { name: "color", type: "string", default: "var(--neon)", description: "Spinner color." },
        ]} />
      </DocSection>
    </article>
  );
}
