import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function CardPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Card" description="A composable card container with header, content, and footer slots." />
      <ImportBlock code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "neoterm-ui";`} />

      <DocSection title="Usage">
        <CodeBlock>{`<Card>
  <CardHeader>
    <CardTitle>System Status</CardTitle>
    <CardDescription>All services operational</CardDescription>
  </CardHeader>
  <CardContent>
    <p>CPU usage: 42%</p>
  </CardContent>
  <CardFooter>
    <Button>Refresh</Button>
  </CardFooter>
</Card>`}</CodeBlock>
      </DocSection>

      <DocSection title="Subcomponents">
        <PropsTable rows={[
          { name: "Card", type: "div wrapper", description: "Root card container with terminal styling." },
          { name: "CardHeader", type: "div", description: "Header section." },
          { name: "CardTitle", type: "h3", description: "Title text." },
          { name: "CardDescription", type: "p", description: "Description / subtitle." },
          { name: "CardContent", type: "div", description: "Main content area." },
          { name: "CardFooter", type: "div", description: "Footer with actions." },
        ]} />
      </DocSection>
    </article>
  );
}
