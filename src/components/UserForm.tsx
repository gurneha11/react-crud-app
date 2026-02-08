import { Button, Stack, TextField } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { User } from "../types/User";
import { userFormSchema } from "../config/userFormSchema";

interface Props {
    onSubmit: (data: User) => void;
    defaultValues?: User;
}

const EMPTY_USER: User = {
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
};

const UserForm = ({ onSubmit, defaultValues }: Props) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<User>({
        defaultValues: EMPTY_USER
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        } else {
            reset(EMPTY_USER);
        }
    }, [defaultValues, reset]);

    return (
        <form
            onSubmit={handleSubmit(data => {
                onSubmit(data);
                reset(EMPTY_USER);
            })}
        >
            <Stack spacing={2} maxWidth={400}>
                {userFormSchema.map(field => {
                    const isPhone = field.name === "phone";
                    const isEmail = field.name === "email";

                    return (
                        <TextField
                            key={field.name}
                            label={field.label}
                            fullWidth
                            type={isPhone ? "tel" : isEmail ? "email" : "text"}
                            error={!!errors[field.name as keyof User]}
                            helperText={
                                errors[field.name as keyof User]
                                    ? field.errorMessage
                                    : ""
                            }
                            InputLabelProps={{ shrink: true }}
                            {...register(field.name as keyof User, {
                                required: field.required,
                                pattern: field.pattern
                                    ? {
                                        value: field.pattern,
                                        message: field.errorMessage
                                    }
                                    : undefined
                            })}
                        />
                    );
                })}

                <Button type="submit" variant="contained">
                    {defaultValues ? "UPDATE USER" : "SAVE USER"}
                </Button>
            </Stack>
        </form>
    );
};

export default UserForm;




