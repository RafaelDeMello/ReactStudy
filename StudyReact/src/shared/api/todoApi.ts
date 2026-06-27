import axios from "axios";

const axiosInstance = axios.create();

interface ITodo {
  id: string;
  label: string;
  complete: boolean;
}

interface ITodoWithOut {
  label: string;
  complete: boolean;
}

export const TodoApi = {
  async getAll() {
    const response = await axiosInstance.get("/api/todos");

    return response.data.todos as ITodo[];
  },

  async create(data: ITodoWithOut) {
    const response = await axiosInstance.post("/api/todos", data);

    return response.data.todos as ITodo;
  },

  async updateById(id: string, data: Partial<ITodoWithOut>) {
    return await axiosInstance.put(`/api/todos/${id}`, data);
  },

  async deleteById(id: string) {
    return await axiosInstance.delete(`/api/todos/${id}`);
  },
};
