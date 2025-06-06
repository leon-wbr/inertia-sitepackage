export default function Header({ data }: { data: Record<string, any> }) {
  return <h2 className="text-3xl font-bold mb-6">{data.header}</h2>;
}
