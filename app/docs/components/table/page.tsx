import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function TablePage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Table" description="Terminal-styled data table built on HTML table elements." />
      <ImportBlock code={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Uptime</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>api-server</TableCell>
      <TableCell>Online</TableCell>
      <TableCell>14d 6h</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</CodeBlock>
      </DocSection>
      <DocSection title="Subcomponents">
        <PropsTable rows={[
          { name: "Table", type: "table", description: "Root table element with terminal styles." },
          { name: "TableHeader", type: "thead", description: "Table header group." },
          { name: "TableBody", type: "tbody", description: "Table body group." },
          { name: "TableFooter", type: "tfoot", description: "Table footer group." },
          { name: "TableRow", type: "tr", description: "Table row." },
          { name: "TableHead", type: "th", description: "Header cell." },
          { name: "TableCell", type: "td", description: "Body cell." },
          { name: "TableCaption", type: "caption", description: "Table caption." },
        ]} />
      </DocSection>
    </article>
  );
}
