import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import type { User } from "./types/User";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { getUsers, createUser } from "./api/userApi";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  // Initial fetch only
  useEffect(() => {
    const loadUsers = async () => {
      const res = await getUsers();
      setUsers(res.data);
    };
    loadUsers();
  }, []);

  const handleSubmit = async (user: User) => {
    if (editingUser?.id) {
      // LOCAL UPDATE
      setUsers(prev =>
        prev.map(u =>
          u.id === editingUser.id
            ? { ...user, id: editingUser.id }
            : u
        )
      );
      setEditingUser(null);
    } else {
      // LOCAL CREATE
      const res = await createUser(user);
      setUsers(prev => [res.data, ...prev]);
    }
  };

  const handleEdit = (user: User) => {
    if (!user.id) return;
    setEditingUser(user);
  };

  const handleDelete = (id: number) => {
    // LOCAL DELETE
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

//   // Fetch ONLY once
//   useEffect(() => {
//     const loadUsers = async () => {
//       const res = await getUsers();
//       setUsers(res.data);
//     };

//     loadUsers();
//   }, []);

//   const handleSubmit = async (user: User) => {
//     if (editingUser?.id) {
//       await updateUser(editingUser.id, user);

//       // Update locally
//       setUsers(prev =>
//         prev.map(u =>
//           u.id === editingUser.id
//             ? { ...user, id: editingUser.id }
//             : u
//         )
//       );

//       setEditingUser(null);
//     } else {
//       const res = await createUser(user);

//       // Add new user at TOP so it's visible
//       setUsers(prev => [res.data, ...prev]);
//     }
//   };

//   const handleEdit = (user: User) => {
//     setEditingUser(user);
//   };

//   const handleDelete = async (id: number) => {
//     await deleteUser(id);

//     // Remove locally
//     setUsers(prev => prev.filter(u => u.id !== id));

//     if (editingUser?.id === id) {
//       setEditingUser(null);
//     }
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












