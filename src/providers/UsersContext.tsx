"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { User } from "@/utils/types";

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
