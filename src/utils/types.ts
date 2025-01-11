export type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  gender: string;
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
export type FieldConfig = {
  name: keyof User;
  label: string;
  type: string;
  validation: {
    required?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validate?: (value: any) => boolean;
  };
};
