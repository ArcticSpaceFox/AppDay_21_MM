import React, { ComponentPropsWithoutRef, useState } from "react";

export type User = {
    id: number,
    name: string | null,
    lastName: string | null,
    email: string,
    imageUrl: string | null,
    born: number | Date,
    minAge: number,
    maxAge: number,
    createdAt: number | Date,
    studiengruppen: Array<StudienGruppe> | Array<null> | null,
    isPro: boolean,
    faculty: Faculty,
    semester: number
}

export enum Faculty {
  SONSTIGE = 0,
  INFORMATIK = 1,
  ITTI = 2,
  WINF = 3,
  AGRARING = 4,
  SCHIFFSBAU = 5
}

export type StudienGruppe = {
  id: number,
  name: string,
  members: Array<User>,
  tags: Array<Tag>,
}

export type Tag = {
  id: string,
  name: string,
}

export const UserContext = React.createContext<[User | null, any]>([null, null]);

export const UserProvider = ({ children }: ComponentPropsWithoutRef<"div">) => {
  // state
  const [user, setUser] = useState<User | null>(null);
  const updateUser = (u: User) => setUser(u);
  // Provider
  return <UserContext.Provider value={[user, updateUser]}>{children}</UserContext.Provider>;
};

export default UserContext;