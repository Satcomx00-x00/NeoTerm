import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function HeatMapPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="HeatMap" description="Grid-based heatmap visualization with positive/negative color mapping." />
      <ImportBlock code={`import { HeatMap } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<HeatMap
  data={[[1, 3, -2], [0, 5, -1], [2, -3, 4]]}
  rowLabels={["Mon", "Tue", "Wed"]}
  colLabels={["09:00", "12:00", "18:00"]}
/>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "data", type: "number[][]", description: "2D grid of values." },
          { name: "rowLabels", type: "string[]", description: "Labels for rows." },
          { name: "colLabels", type: "string[]", description: "Labels for columns." },
          { name: "colorPositive", type: "string", default: '"#39ff14"', description: "Color for positive values." },
          { name: "colorNegative", type: "string", default: '"#ff3535"', description: "Color for negative values." },
        ]} />
      </DocSection>
    </article>
  );
}
