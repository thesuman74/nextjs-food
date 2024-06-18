import { Todotypes } from "@/Type";
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "./api";

export function useCreateTodo() {
  return useMutation({
    mutationFn: (data: Todotypes) => createTodo(data),
    onMutate: () => {
      console.log("mutate");
    },
    onError: () => {
      console.log("Error");
    },
    onSuccess: () => {
      console.log("success");
    },
    onSettled: () => {
      console.log("settled");
    },
  });
}
