import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

import Layout from "./components/Layout";

import "./index.css";

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/**/*.tsx", { eager: true });
    let page = pages[`./Pages/${name}.tsx`] as unknown as {
      default: {
        layout?: React.ComponentType<React.ReactNode>;
      } & React.ComponentType<any>;
    };
    page.default.layout =
      page.default.layout || ((page) => <Layout children={page} />);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
