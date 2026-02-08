export const userFormSchema = [
    {
        name: "firstName",
        label: "First Name",
        required: true,
        pattern: /^[A-Za-z\s]+$/,
        errorMessage: "First name should contain only letters"
    },
    {
        name: "lastName",
        label: "Last Name",
        required: true,
        pattern: /^[A-Za-z\s]+$/,
        errorMessage: "Last name should contain only letters"
    },
    {
        name: "phone",
        label: "Phone Number",
        required: true,
        pattern: /^[0-9]{10}$/,
        errorMessage: "Phone number must be 10 digits"
    },
    {
        name: "email",
        label: "Email Address",
        required: true,
        pattern: /^\S+@\S+\.\S+$/,
        errorMessage: "Invalid email format"
    }
];
