import { User } from "../models/user";

export const findUserByEmailAndPassword = (
  email: string,
  password: string,
  users: User[]
): User | undefined => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};
