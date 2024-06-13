import axios from "axios";
import { Todotypes } from "../Type";

export const todosApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

export const usersApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

export const fetchTodos = async () => {
  const response = await todosApi.get<Todotypes[]>("");
  return response.data.slice(0, 5).map((todo) => ({
    id: todo.id,
    title: todo.title,
  }));
};

export const fetchUsers = async () => {
  const response = await usersApi.get("");
  return response.data; // assuming you want to return the full user objects
};
