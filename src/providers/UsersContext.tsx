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
