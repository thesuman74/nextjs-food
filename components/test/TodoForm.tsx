"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos, fetchUsers } from "@/services/api"; // Ensure these functions are properly exported from "@/services/api"
import { Usertypes } from "@/Type";

export default function Todo() {
  const {
    data: todosData,
    isError: isTodosError,
    isLoading: isTodosLoading,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  const {
    data: usersData,
    isError: isUsersError,
    isLoading: isUsersLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Handle loading state for either todos or users
  if (isTodosLoading || isUsersLoading) {
    return <span>Loading...</span>;
  }

  // Handle errors for either todos or users
  if (isTodosError || isUsersError) {
    return <span>Error loading data...</span>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">ToDo Data Fetched From API</h1>
      {todosData?.map((todo) => (
        <div key={todo.id}>
          <p>{todo.id}</p>
          <p>{todo.title}</p>
        </div>
      ))}

      <h1 className="text-2xl mt-10">User Data Fetched From API</h1>
      {usersData?.map((user: Usertypes) => (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}
