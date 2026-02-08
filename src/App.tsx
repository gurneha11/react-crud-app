import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import type { User } from "./types/User";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "./api/userApi";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (user: User) => {
    if (editingUser?.id) {
      await updateUser(editingUser.id, user);

      setUsers(prev =>
        prev.map(u =>
          u.id === editingUser.id
            ? { ...user, id: editingUser.id }
            : u
        )
      );

      setEditingUser(null);
    } else {
      const res = await createUser(user);

      setUsers(prev => [...prev, res.data]);
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);

    setUsers(prev => prev.filter(u => u.id !== id));

    if (editingUser?.id === id) {
      setEditingUser(null);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>

      <UserForm
        onSubmit={handleSubmit}
        defaultValues={editingUser || undefined}
      />

      <UserList
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Container>
  );
}

export default App;




// import { useEffect, useState } from "react";
// import { Container, Typography } from "@mui/material";
// import type { User } from "./types/User";
// import UserForm from "./components/UserForm";
// import UserList from "./components/UserList";
// import {
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser
// } from "./api/userApi";

// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [editingUser, setEditingUser] = useState<User | null>(null);

//   const loadUsers = async () => {
//     const res = await getUsers();
//     setUsers(res.data);
//   };

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const handleSubmit = async (user: User) => {
//     if (editingUser?.id) {
//       await updateUser(editingUser.id, user);
//       setEditingUser(null);
//     } else {
//       await createUser(user);
//     }
//     loadUsers();
//   };

//   const handleEdit = (user: User) => {
//     setEditingUser(user);
//   };

//   const handleDelete = async (id: number) => {
//     await deleteUser(id);

//     if (editingUser?.id === id) {
//       setEditingUser(null);
//     }

//     loadUsers();
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         User Management
//       </Typography>

//       <UserForm
//         onSubmit={handleSubmit}
//         defaultValues={editingUser || undefined}
//       />

//       <UserList
//         users={users}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />
//     </Container>
//   );
// }

// export default App;












