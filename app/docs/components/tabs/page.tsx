import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function TabsPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Tabs" description="Tabbed interface built on Radix UI Tabs." />
      <ImportBlock code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="logs">Logs</TabsTrigger>
    <TabsTrigger value="config">Config</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Dashboard content…</TabsContent>
  <TabsContent value="logs">Log viewer here…</TabsContent>
  <TabsContent value="config">Settings form…</TabsContent>
</Tabs>`}</CodeBlock>
      </DocSection>
      <DocSection title="Components">
        <PropsTable rows={[
          { name: "Tabs", type: "Root", description: "Container. Accepts defaultValue or value + onValueChange." },
          { name: "TabsList", type: "List", description: "Tab trigger group." },
          { name: "TabsTrigger", type: "Trigger", description: "Individual tab button. Requires value prop." },
          { name: "TabsContent", type: "Content", description: "Panel rendered when its value is active." },
        ]} />
      </DocSection>
    </article>
  );
}
