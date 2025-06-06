import ContentElements from "../components/ContentElements";
import Layout from "../components/Layout";

export default function Default({
  contentElements,
}: {
  contentElements?: any[];
}) {
  return (
    <Layout>
      <ContentElements contentElements={contentElements} />
    </Layout>
  );
}
