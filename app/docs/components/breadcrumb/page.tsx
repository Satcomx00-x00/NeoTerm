import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function BreadcrumbPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Breadcrumb" description="Navigation breadcrumb trail with customizable separator." />
      <ImportBlock code={`import { Breadcrumb } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Breadcrumb" },
]} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "items", type: "BreadcrumbItem[]", description: 'Array of { label, href?, onClick? }.' },
          { name: "separator", type: "ReactNode", default: '"/"', description: "Separator between items." },
        ]} />
      </DocSection>
    </article>
  );
}
