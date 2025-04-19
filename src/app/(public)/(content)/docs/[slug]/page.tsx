import CodeBlock from "../../components/demo-codeblock";

export default function Docs({ params }: { params: { slug: string } }) {
  return (
    <div>
      {params.slug} components
      <CodeBlock />
    </div>
  );
}
