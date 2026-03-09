import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function LogViewerPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Log Viewer" description="Terminal-style log viewer with colored severity levels and auto-scroll." />
      <ImportBlock code={`import { LogViewer } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<LogViewer lines={[
  { timestamp: "12:00:01", level: "info", message: "Server started on :3000" },
  { timestamp: "12:00:02", level: "warn", message: "Deprecated API call detected" },
  { timestamp: "12:00:03", level: "error", message: "Connection refused" },
]} />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "lines", type: "LogLine[]", description: 'Array of { timestamp?, level?, message }.' },
          { name: "maxHeight", type: "number", default: "300", description: "Container max height in px." },
          { name: "autoScroll", type: "boolean", default: "true", description: "Auto-scroll to latest entry." },
          { name: "showTimestamp", type: "boolean", default: "true", description: "Display timestamps." },
        ]} />
      </DocSection>
      <DocSection title="Log levels">
        <p className="text-sm text-muted-foreground">
          Supported levels: <code>info</code>, <code>warn</code>, <code>error</code>, <code>debug</code>, <code>success</code>.
          Each level maps to a distinct neon color.
        </p>
      </DocSection>
    </article>
  );
}
