"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StoreProvider from "@/providers/StoreProvider";

const Provider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <div>{children}</div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StoreProvider>
  );
};

export default Provider;
