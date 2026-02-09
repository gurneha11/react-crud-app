import axios from "axios";
import type { User } from "../types/User";

//const API_URL = "http://localhost:3002/users";

//const API_URL = "https://react-crud-app-mock-api.vercel.app/users";
// src/api/userApi.ts
const API_URL = "https://react-crud-app-zf2x.vercel.app/users";



//const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => axios.get<User[]>(API_URL);
export const createUser = (user: User) => axios.post(API_URL, user);
export const updateUser = (id: number, user: User) =>
    axios.put(`${API_URL}/${id}`, user);
export const deleteUser = (id: number) =>
    axios.delete(`${API_URL}/${id}`);
