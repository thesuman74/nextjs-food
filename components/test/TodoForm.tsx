"use client";

import React from "react";
import { ParallelQuery } from "@/services/queries"; // Ensure these functions are properly exported from "@/services/queries"
import { Todotypes, Usertypes } from "@/Type";
import { register } from "module";

export default function Todo() {
  const results = ParallelQuery();

  const todoResult = results[0];
  const userResult = results[1];

  if (todoResult.isLoading || userResult.isLoading) {
    return <div>Loading...</div>;
  }
  if (todoResult.isError || userResult.isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <>
      <form action="" className=" container mx-auto">
        <h4>New todo: </h4>
        <input type="text" name="title" placeholder="Title" />
        <br />
        <input type="text" name="description" placeholder="description" id="" />
        <br />
        <button type="submit" className="border">
          Submit
        </button>
      </form>
      <div className="container mx-auto">
        <h1 className="text-2xl">ToDo Data Fetched From API</h1>
        {todoResult.data?.map((todo: Todotypes) => (
          <div key={todo.id}>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
          </div>
        ))}

        {/* <h1 className="text-2xl mt-10">User Data Fetched From API</h1>
        {userResult.data?.map((user: Usertypes) => (
          <div key={user.id}>
            <p>{user.id}</p>
            <p>{user.name}</p>
          </div>
        ))} */}
      </div>
    </>
  );
}
