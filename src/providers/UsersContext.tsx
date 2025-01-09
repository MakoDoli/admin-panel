"use client";
import { User } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type UsersContextProps = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
};

export const UsersContext = createContext<UsersContextProps>({
  users: [],
  setUsers: () => {},
});

type ChildrenProps = {
  children: ReactNode;
};

export const UsersProvider = ({ children }: ChildrenProps) => {
  const [users, setUsers] = useState<User[]>([]);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

// type UsersContextProps = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email: string;
//   setFirstName: Dispatch<SetStateAction<string>>;
//   setLastName: Dispatch<SetStateAction<string>>;
//   setEmail: Dispatch<SetStateAction<string>>;
//   setAge: Dispatch<SetStateAction<number>>;
// };
// export const UsersContext = createContext<UsersContextProps>({
//   firstName: "",
//   lastName: "",
//   age: 0,
//   email: "",
//   setFirstName: () => {},
//   setLastName: () => {},
//   setEmail: () => {},
//   setAge: () => {},
// });
// type UsersProviderProps = {
//   children: ReactNode;
// };

// export const UsersProvider = ({ children }: UsersProviderProps) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [age, setAge] = useState(0);
//   const [email, setEmail] = useState("");

//   return (
//     <UsersContext.Provider
//       value={{
//         firstName,
//         setFirstName,
//         lastName,
//         setLastName,
//         age,
//         setAge,
//         email,
//         setEmail,
//       }}
//     >
//       {children}
//     </UsersContext.Provider>
//   );
// };
