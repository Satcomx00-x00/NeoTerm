import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function KpiCardPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="KPI Card" description="Key performance indicator card with optional sparkline and trend arrow." />
      <ImportBlock code={`import { KpiCard } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<KpiCard
  label="Revenue"
  value="$12,450"
  change={5.2}
  trend="up"
  sparkData={[10, 15, 12, 18, 22, 20, 25]}
/>`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "label", type: "string", description: "KPI label text." },
          { name: "value", type: "string | number", description: "Primary display value." },
          { name: "change", type: "number", description: "Percentage change." },
          { name: "trend", type: '"up" | "down" | "flat"', description: "Trend direction." },
          { name: "unit", type: "string", description: "Unit suffix." },
          { name: "sparkData", type: "number[]", description: "Data points for inline sparkline." },
          { name: "sparkColor", type: "string", description: "Sparkline color." },
          { name: "className", type: "string", description: "Additional CSS classes." },
        ]} />
      </DocSection>
    </article>
  );
}
