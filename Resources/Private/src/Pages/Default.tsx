import ContentElements from "../components/ContentElements";

export default function Default({
  contentElements,
}: {
  contentElements?: any[];
}) {
  return <ContentElements contentElements={contentElements} />;
}
