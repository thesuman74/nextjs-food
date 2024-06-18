"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const TanstackProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>{children}</div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackProvider;
