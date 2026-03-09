import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function CommandLinePage() {
  return (
    <article className="space-y-8">
      <DocHeader title="Command Line" description="Single terminal command with prompt symbol and optional output." />
      <ImportBlock code={`import { CommandLine } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`<CommandLine command="npm install neoterm-ui" />
<CommandLine prompt=">" command="git status" output="On branch main\\nNothing to commit" />`}</CodeBlock>
      </DocSection>
      <DocSection title="Props">
        <PropsTable rows={[
          { name: "command", type: "string", description: "The command text." },
          { name: "prompt", type: "string", default: '"$"', description: "Prompt character." },
          { name: "output", type: "string", description: "Command output below the prompt line." },
          { name: "className", type: "string", description: "Additional CSS classes." },
        ]} />
      </DocSection>
    </article>
  );
}
