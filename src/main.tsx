import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import App from "./App.tsx";

import "./index.css";

const element = document.getElementById("root");

if (element !== null) {
  const queryClient = new QueryClient({
    // defaultOptions: {
    //   queries: {
    //     refetchOnWindowFocus: false
    //   }
    // }
  });

  createRoot(element).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  );
}
