import axios from "axios";
import { Todotypes } from "../Type";

const BASE_URL = "http://localhost:8000";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodosIds = async () => {
  return (await axiosInstance.get<Todotypes[]>("todos")).data.map(
    (todo) => todo.id
  );
};
