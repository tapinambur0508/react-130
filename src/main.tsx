import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App.tsx";

import "./index.css";

const element = document.getElementById("root");

if (element !== null) {
  const queryClient = new QueryClient({
    // defaultOptions: {
    //   queries: {
    //     staleTime: 60 * 1000, // 1 minute in milliseconds
    //   }
    // }
  });

  createRoot(element).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>,
  );
}
