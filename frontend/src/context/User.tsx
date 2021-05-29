import React, { ComponentPropsWithoutRef, useState } from "react";

export type User = {
    id: number,
    name: string | null,
    lastname: string | null,
    email: string,
    imageUrl: string | null,
    born: number | Date,
    minAge: number,
    maxAge: number,
    createdAt: number | Date,
    studiengruppen: Array<StudienGruppe> | Array<null> | null,
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