import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function SkeletonPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Skeleton" description="Animated loading placeholder with shimmer effect." />
      <ImportBlock code={`import { Skeleton } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Skeleton className="h-4 w-48" />
<Skeleton className="h-8 w-full" />
<Skeleton className="h-24 w-24 rounded-full" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "className", type: "string", description: "Size and shape via Tailwind classes." },
        ]} />
      </DocSection>
    </article>
  );
}
