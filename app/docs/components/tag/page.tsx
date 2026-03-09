import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function TagPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Tag" description="Small colored tag / chip with optional remove button." />
      <ImportBlock code={`import { Tag, TagGroup } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<TagGroup>
  <Tag>frontend</Tag>
  <Tag color="var(--cyan)">react</Tag>
  <Tag removable onRemove={() => {}}>draft</Tag>
</TagGroup>`}</CodeBlock>
      </DocSection>
      <DocSection title="Tag Props">
        <PropsTable rows={[
          { name: "color", type: "string", description: "Accent color." },
          { name: "removable", type: "boolean", default: "false", description: "Show remove button." },
          { name: "onRemove", type: "() => void", description: "Remove callback." },
          { name: "children", type: "ReactNode", description: "Tag label." },
        ]} />
      </DocSection>
    </article>
  );
}
