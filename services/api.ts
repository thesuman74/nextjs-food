import axios from "axios";
import { Todotypes } from "../Type";

const BASE_URL = "http://localhost:8000";
const axiosInstance = axios.create({ baseURL: BASE_URL });

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

export const createTodo = async (data: Todotypes) => {
  await axiosInstance.post("todos", data);
};
