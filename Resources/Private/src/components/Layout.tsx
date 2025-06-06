import { Head, usePage } from "@inertiajs/react";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const {
    site: { title: siteTitle },
    title,
  } = usePage().props;

  return (
    <>
      <Head title={`${title} – ${siteTitle}`} />
      <main className="flex-1 flex flex-col justify-center items-center text-center">
        {children}
      </main>
    </>
  );
}
