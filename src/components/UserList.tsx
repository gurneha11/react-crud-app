import type { User } from "../types/User";
import {
    List,
    ListItem,
    ListItemText,
    Button,
    Stack
} from "@mui/material";

interface Props {
    users: User[];
    onDelete: (id: number) => void;
    onEdit: (user: User) => void;
}

const UserList = ({ users, onDelete, onEdit }: Props) => {
    return (
        <List>
            {users.map(user => (
                <ListItem key={user.id}>
                    <ListItemText
                        primary={`${user.firstName} ${user.lastName}`}
                        secondary={`${user.email} | ${user.phone}`}
                    />
                    <Stack direction="row" spacing={1}>
                        <Button onClick={() => onEdit(user)}>Edit</Button>
                        <Button
                            color="error"
                            onClick={() => onDelete(user.id!)}
                        >
                            Delete
                        </Button>
                    </Stack>
                </ListItem>
            ))}
        </List>
    );
};

export default UserList;
