import { Head, usePage } from "@inertiajs/react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const page = usePage();
  return (
    <>
      <Head title={page.props.title as string} />
      <Navbar />
      <main className="p-6 min-h-full flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
    </>
  );
}
