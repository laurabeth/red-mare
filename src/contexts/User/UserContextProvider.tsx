import { createContext, FC, PropsWithChildren } from "react";

interface UserContext {
  auth: object;
  fName: string;
  lName: string;
  email: string;
  phone: string;
  role: string;
}

const UserContext = createContext<UserContext>({});

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};
