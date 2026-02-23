import axios from "axios"



const axiosInstance = axios.create();

interface ITodo{
    id: string;
    label: string;
    complete: boolean;
}

interface ITodoWithoutId {
    label: string;
    complete: boolean;
}

export const TodoApi = {
    async getAll() {
       const response = await axiosInstance.get("/api/todos")
       return response.data.todos as ITodo[]
    },

    async create(data: ITodoWithoutId) {
        const response = await axiosInstance.post("/api/todos", data)

        return response.data.todo as ITodo;
    },

    async complete(id: string, data: Partial<ITodoWithoutId>) {
        await axiosInstance.put(`/api/todos/${id}`, data)

        return
    },

    async remove(id: string) {
        await axiosInstance.delete(`/api/todos/${id}`)

        return
    }
}