import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function AvatarPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Avatar" description="User avatar with optional status indicator and grouping." />
      <ImportBlock code={`import { Avatar, AvatarGroup } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Avatar src="/photo.jpg" alt="User" size="md" status="online" />
<Avatar fallback="JD" size="lg" />

<AvatarGroup max={3}>
  <Avatar src="/a.jpg" alt="A" />
  <Avatar src="/b.jpg" alt="B" />
  <Avatar src="/c.jpg" alt="C" />
  <Avatar src="/d.jpg" alt="D" />
</AvatarGroup>`}</CodeBlock>
      </DocSection>
      <DocSection title="Avatar Props">
        <PropsTable rows={[
          { name: "src", type: "string | null", description: "Image URL." },
          { name: "alt", type: "string", description: "Alt text." },
          { name: "fallback", type: "string", description: "Initials when no image." },
          { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Avatar size." },
          { name: "status", type: '"online" | "offline" | "away" | "busy" | null', description: "Status indicator dot." },
        ]} />
      </DocSection>
      <DocSection title="AvatarGroup Props">
        <PropsTable rows={[
          { name: "max", type: "number", description: "Max avatars to show before +N." },
          { name: "size", type: "AvatarSize", description: "Uniform size for all avatars." },
          { name: "children", type: "ReactNode", description: "Avatar elements." },
        ]} />
      </DocSection>
    </article>
  );
}
