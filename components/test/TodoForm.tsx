"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTodos, fetchUsers } from "@/services/api"; // Ensure these functions are properly exported from "@/services/api"
import { Todotypes, Usertypes } from "@/Type";
import { TodoQuery, UsersQuery } from "@/services/queries";

export default function Todo() {
  const {
    data: todoData,
    isLoading: isTodoLoading,
    isError: isTodoError,
  } = TodoQuery();

  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
  } = UsersQuery();

  if (isTodoLoading || isUserLoading) {
    return <div>Loading...</div>;
  }

  if (isTodoError || isUserError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">ToDo Data Fetched From API</h1>
      {todoData?.map((todo: Todotypes) => (
        <div key={todo.id}>
          <p>{todo.id}</p>
          <p>{todo.title}</p>
        </div>
      ))}

      <h1 className="text-2xl mt-10">User Data Fetched From API</h1>
      {userData?.map((user: Usertypes) => (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}
