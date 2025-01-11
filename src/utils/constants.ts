export const DEFAULT_EMAIL = "admin@gmail.com";
export const DEFAULT_PASSWORD = "admin";
export const API_URL = "https://dummyjson.com/users";
export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  border: "1px solid #1976d2",
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  m: 0,
  color: "text.secondary",
};
export const formFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    validation: { required: true },
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    validation: { required: true },
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    validation: {
      required: true,
      validate: (value: number) => !isNaN(value) && value > 0,
    },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: {
      required: true,
      validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    },
  },
  {
    name: "gender",
    label: "Gender",
    type: "text",
    validation: { required: true },
  },
];
