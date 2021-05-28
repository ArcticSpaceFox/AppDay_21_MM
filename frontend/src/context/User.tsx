import React, { ComponentPropsWithoutRef, useState } from "react";

export type User = {
    id: number,
    fname: string | null,
    lname: string | null,
    email: string,
    imageUrl: string | null,
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