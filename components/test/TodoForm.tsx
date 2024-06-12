"use client";
import { useQuery } from "@tanstack/react-query";

export default function Todo() {
  const { data, isError, isSuccess } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
  });
  console.log(data);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24"></div>
  );
}
