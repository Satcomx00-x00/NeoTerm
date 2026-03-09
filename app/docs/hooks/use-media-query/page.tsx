import { DocHeader, DocSection, ImportBlock, PropsTable, CodeBlock } from "../../_components/doc-parts";

export default function UseMediaQueryPage() {
  return (
    <article className="space-y-8">
      <DocHeader title="useMediaQuery" description="Track whether a CSS media query matches." />
      <ImportBlock code={`import { useMediaQuery } from "neoterm-ui";`} />
      <DocSection title="Usage">
        <CodeBlock>{`const isMobile = useMediaQuery("(max-width: 768px)");
const prefersLight = useMediaQuery("(prefers-color-scheme: light)");

return isMobile ? <MobileNav /> : <DesktopNav />;`}</CodeBlock>
      </DocSection>
      <DocSection title="Signature">
        <CodeBlock>{`function useMediaQuery(query: string): boolean`}</CodeBlock>
      </DocSection>
      <DocSection title="Parameters">
        <PropsTable rows={[
          { name: "query", type: "string", description: "CSS media query string." },
        ]} />
      </DocSection>
      <DocSection title="Returns">
        <p className="text-sm text-muted-foreground"><code>boolean</code> — true when the media query matches.</p>
      </DocSection>
    </article>
  );
}
