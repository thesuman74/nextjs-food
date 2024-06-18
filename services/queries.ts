"use client";

import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchTodos, fetchUsers } from "./api";

export function TodoQuery() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
}

export function UsersQuery() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: fetchUsers,
  });
}

export function ParallelQuery() {
  return useQueries({
    queries: [
      {
        queryKey: ["newtodos"],
        queryFn: fetchTodos,
      },
      {
        queryKey: ["newusers"],
        queryFn: fetchUsers,
      },
    ],
  });
}

console.log("parallel query ", ParallelQuery);
