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
