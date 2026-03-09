import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function TimelinePage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Timeline" description="Vertical timeline with neon-styled status dots." />
      <ImportBlock code={`import { Timeline } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Timeline items={[
  { id: "1", title: "Deploy started", status: "info", timestamp: "12:00" },
  { id: "2", title: "Tests passed", status: "success", timestamp: "12:02" },
  { id: "3", title: "Build failed", status: "error", timestamp: "12:05" },
]} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "items", type: "TimelineItem[]", description: "Array of timeline entries." },
          { name: "className", type: "string", description: "Additional CSS classes." },
        ]} />
      </DocSection>
      <DocSection title="TimelineItem">
        <PropsTable rows={[
          { name: "id", type: "string", description: "Unique identifier." },
          { name: "title", type: "string", description: "Event title." },
          { name: "description", type: "string", description: "Optional detail text." },
          { name: "timestamp", type: "string", description: "Time label." },
          { name: "status", type: '"success" | "warning" | "error" | "info" | "neutral"', description: "Dot color." },
          { name: "icon", type: "ReactNode", description: "Custom icon override." },
        ]} />
      </DocSection>
    </article>
  );
}
