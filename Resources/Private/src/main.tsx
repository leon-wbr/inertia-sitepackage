// Sets up React Fast Refresh when the page is served by TYPO3 instead of
// Vite's index.html. It is a no-op in production builds.
import "@vitejs/plugin-react/preamble";
import { createInertiaApp, type ResolvedComponent } from "@inertiajs/react";
import { createRoot } from "react-dom/client";

import "./index.css";

const pages = import.meta.glob<{ default: ResolvedComponent }>("./Pages/**/*.tsx", {
  eager: true,
});

void createInertiaApp({
  resolve: (name) => {
    const page = pages[`./Pages/${name}.tsx`];
    if (!page) {
      throw new Error(`Unknown page component: ${name}`);
    }
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
