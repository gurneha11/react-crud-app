import axios from "axios";
import type { User } from "../types/User";

const API_URL = "https://jsonplaceholder.typicode.com/users";

/**
 * Normalize API user -> App User
 */
const normalizeUser = (apiUser: any): User => {
  const [firstName, ...lastNameParts] = apiUser.name.split(" ");

  return {
    id: apiUser.id,
    firstName,
    lastName: lastNameParts.join(" "),
    email: apiUser.email,
    phone: apiUser.phone
  };
};

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return { data: res.data.map(normalizeUser) };
};

/**
 * Simulated create (JSONPlaceholder is read-only)
 * Always generates a valid id
 */
export const createUser = async (user: User) => {
  return {
    data: {
      ...user,
      id: Date.now()
    }
  };
};





// import axios from "axios";
// import type { User } from "../types/User";

// const API_URL = "https://jsonplaceholder.typicode.com/users";

// const normalizeUser = (apiUser: any): User => {
//   const [firstName, ...lastNameParts] = apiUser.name.split(" ");

//   return {
//     id: apiUser.id,
//     firstName,
//     lastName: lastNameParts.join(" "),
//     email: apiUser.email,
//     phone: apiUser.phone
//   };
// };

// export const getUsers = async () => {
//   const res = await axios.get(API_URL);
//   return { data: res.data.map(normalizeUser) };
// };

// export const createUser = async (user: User) => {
//   const res = await axios.post(API_URL, user);
//   return {
//     data: {
//       ...user,
//       id: res.data.id || Date.now()
//     }
//   };
// };

// export const updateUser = async (id: number, user: User) => {
//   await axios.put(`${API_URL}/${id}`, user);
// };

// export const deleteUser = async (id: number) => {
//   await axios.delete(`${API_URL}/${id}`);
// };















// import axios from "axios";
// import type { User } from "../types/User";

// const API_URL = "https://jsonplaceholder.typicode.com/users";

// const normalizeUser = (apiUser: any): User => {
//   const [firstName, ...lastNameParts] = apiUser.name.split(" ");

//   return {
//     id: apiUser.id,
//     firstName: firstName || "",
//     lastName: lastNameParts.join(" ") || "",
//     email: apiUser.email || "",
//     phone: apiUser.phone || ""
//   };
// };

// export const getUsers = async () => {
//   const res = await axios.get(API_URL);

//   return {
//     data: res.data.map(normalizeUser)
//   };
// };

// export const createUser = async (user: User) => {
//   const res = await axios.post(API_URL, user);

//   return {
//     data: {
//       ...user,
//       id: res.data.id || Math.floor(Math.random() * 100000)
//     }
//   };
// };

// export const updateUser = async (id: number, user: User) => {
//   await axios.put(`${API_URL}/${id}`, user);

//   return {
//     data: {
//       ...user,
//       id
//     }
//   };
// };

// export const deleteUser = async (id: number) => {
//   await axios.delete(`${API_URL}/${id}`);
// };



// import axios from "axios";
// import type { User } from "../types/User";

// //const API_URL = "http://localhost:3001/users";
// const API_URL = "https://jsonplaceholder.typicode.com/users";

// export const getUsers = () => axios.get<User[]>(API_URL);
// export const createUser = (user: User) => axios.post(API_URL, user);
// export const updateUser = (id: number, user: User) =>
//     axios.put(`${API_URL}/${id}`, user);
// export const deleteUser = (id: number) =>
//     axios.delete(`${API_URL}/${id}`);
